import { FC, SetStateAction, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Row, Col, Button, Form, Input, Divider, AutoComplete, message, Tooltip, Card } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet';
import awsExports from '../aws-exports';
import Amplify, { DataStore, API, graphqlOperation } from 'aws-amplify';
import { Guest, RSVP } from '../models';
import moment from 'moment';
import stateList from '../assets/json/stateList.json'
import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";
import GraphQLAPI, { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';
import { listGuests, updateRSVP } from '../graphql'
import Checkbox from 'antd/lib/checkbox/Checkbox';
import TextArea from 'antd/lib/input/TextArea';

Amplify.configure(awsExports);

const RSVP2: FC<RouteComponentProps> = (props) => {
  const [stateOptions, setStateOptions] = useState<{ value: string }[]>([]);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [rsvpSearchCriteria, setRSVPSearchCriteria] = useState<string>('');
  const [rsvpQuestData, setRsvpQuestData] = useState<RSVP[]>([]);
  const [versionNum, setVersionNum] = useState<number>();
  const [attendingPerson1, setAttendingPerson1] = useState<boolean>(false);
  const [attendingPerson2, setAttendingPerson2] = useState<boolean>(false);
  const [songRequestsPerson1, setSongRequestsPerson1] = useState<string>('');
  const [songRequestsPerson2, setSongRequestsPerson2] = useState<string>('');
  const [cell, setCell] = useState<string>('');
  const [saveButtonText, setSaveButtonText] = useState<string>('Search');
  const [saveButtonLoading, setSaveButtonLoading] = useState<boolean>(false);
  const [saveButtonDisabled, setSaveButtonDisabled] = useState<boolean>(false);

  //Queries
  const FIND_RSVP = `
    query listRSVPs {
      listRSVPs(filter: {searchName: {contains: "${rsvpSearchCriteria.toLocaleLowerCase()}"}}) {
        items {
          id
          addedByUser
          attending
          firstName
          groupNum
          plusOne
          secondName
          songList
          updatedAt
        }
      }
    }
  `

  const layout = {
    labelCol: { span: 12 },
    wrapperCol: { span: 12 },
  };

  const validateMessages = {
    required: '${label} is required!'
  }

  useEffect(() => {
    Amplify.configure(awsExports);
    DataStore.clear();
  }, [])

  const onSearchState = (searchText: string) => {
    let stateArray: SetStateAction<{ value: string; }[]> = []
    if (searchText) {
      var tempArray = stateList.filter((element: { value: string; }) => element.value.toLowerCase().startsWith(searchText.toLowerCase()));
      if (tempArray) {
        stateArray = tempArray;
      }
    }
    setStateOptions(stateArray);
  }

  const setRSVP = async () => {
    console.log('FIND-ME-rsvpQuestData', rsvpQuestData.length);
    console.log('FIND-ME-id', rsvpQuestData[0].id);
    console.log('FIND-ME-songList', songRequestsPerson1);
    console.log('FIND-ME-attending', attendingPerson1);
    if (rsvpQuestData.length === 1) {
      await API.graphql(graphqlOperation(updateRSVP, { 
        input: { 
          id: rsvpQuestData[0].id, 
          //_version: 10,
          addedByUser: false,
          songList: songRequestsPerson1,
          attending: attendingPerson1
        }
      }));
    } else if (rsvpQuestData.length === 2) {
      //Person 1
      await API.graphql(graphqlOperation(updateRSVP, { 
        input: { 
          id: rsvpQuestData[0].id, 
          addedByUser: false,
          songList: songRequestsPerson1,
          attending: attendingPerson1
        }
      }));

      //Person 2
      await API.graphql(graphqlOperation(updateRSVP, { 
        input: { 
          id: rsvpQuestData[1].id, 
          addedByUser: false,
          songList: songRequestsPerson2,
          attending: attendingPerson2
        }
      }));
    }
  }

  const convertToRSVPObject = (graphqlObject:any) => {
    const rsvpsStringify = JSON.stringify(graphqlObject);
    const rsvpsJSONify = JSON.parse(rsvpsStringify);
    const rsvpObject = rsvpsJSONify.data.listRSVPs.items as RSVP[];

    return rsvpObject
  }

  const onFinish = async () => {
    setSaveButtonLoading(true);

    try {
      if (rsvpSearchCriteria.trim() !== '') {
        const rsvps = await API.graphql(graphqlOperation(FIND_RSVP));
        setRsvpQuestData(convertToRSVPObject(rsvps));
      }

      setSaveButtonLoading(false);
    }
    catch (error) {
      console.log('ERROR : ', error);
      setSaveButtonLoading(false);
    }
  }

  return (
    <div style={{backgroundImage: 'linear-gradient(180deg, #a2bba3, #64242e)'}}>
      <Helmet>
        <title>RSVP</title>
      </Helmet>
      <Row>
        <Col offset={6} span={12}>
          <div style={{fontSize: 'xxx-large', textAlign: 'center', fontFamily: 'Great Vibes'}}>RSVP</div>
        </Col>
      </Row>
      <Row justify='center'>
        <Col xs={{ offset: 0, span: 24  }}
          sm={{ offset: 0, span: 24  }}
          md={{ offset: 3, span: 18  }}
          lg={{ offset: 6, span: 12  }}
          xl={{ offset: 6, span: 12  }}
        >
          <Form {...layout} validateMessages={validateMessages} layout="vertical" onFinish={() => onFinish()}>
            <Form.Item 
              name="firstName" 
              label={<div><b>Enter your first or last name to find your RSVP record:</b></div>} 
              rules={[{ required: true, min: 3 }]}>
              <Input value={rsvpSearchCriteria} onChange={(e) => setRSVPSearchCriteria(e.target.value)}/>
            </Form.Item>
            <div>
              <Form.Item className='formItem' >
                <Button type="primary" htmlType="submit" loading={saveButtonLoading} disabled={saveButtonDisabled}>{saveButtonText}</Button>
              </Form.Item>
            </div>
          </Form>
        </Col>
      </Row>
      {rsvpQuestData.length === 2 &&
        <Row justify='center'>
          <Col>
            <p>Who will be attending our wedding on June 11th, 2022 from 12:30PM to 4PM?</p>
          </Col>
        </Row>}
      {rsvpQuestData.length === 1 &&
        <Row justify='center'>
          <Col>
            <p>Will you be attending our wedding on June 11th, 2022 from 12:30PM to 4PM?</p>
          </Col>
        </Row>}
      <Row>
        <Col
          xs={{ span: 1  }}
          sm={{ span: 3  }}
          md={{ span: 3  }}
          lg={{ span: 4  }}
          xl={{ span: 4  }}
        ></Col>
        <Col
          xs={{ span: 11  }}
          sm={{ span: 9  }}
          md={{ span: 9  }}
          lg={{ span: 8  }}
          xl={{ span: 8  }}
        >
          {rsvpQuestData.length >= 1 
          ? <Card
             title={`${rsvpQuestData[0]?.firstName} ${rsvpQuestData[0]?.secondName}`}
             style={{marginRight: '3px'}}
            >
              <Row>
                <Col>
                  <Checkbox value={attendingPerson1} onChange={(e) => setAttendingPerson1(e.target.checked)}>
                    Attending?
                  </Checkbox>
                </Col>
              </Row>
              <Row>
                <Col>
                  Any song requests for the special day?
                </Col>
              </Row>
              <Row>
                <Col>
                  <TextArea
                    value={songRequestsPerson1}
                    onChange={(e) => setSongRequestsPerson1(e.target.value)}
                    rows={4}
                    style={{width: '30vw', maxWidth: '400px'}}

                  >
                  </TextArea>
                </Col>
              </Row>
            </Card>
          : <div></div>}
        </Col>
        <Col
          xs={{ span: 11  }}
          sm={{ span: 9  }}
          md={{ span: 9  }}
          lg={{ span: 8  }}
          xl={{ span: 8  }}
        >
          {rsvpQuestData.length > 1
          ? <Card
              title={`${rsvpQuestData[1]?.firstName} ${rsvpQuestData[1]?.secondName}`}
              style={{marginLeft: '3px'}}
            >
              <Row>
                <Col>
                  <Checkbox value={attendingPerson2} onChange={(e) => setAttendingPerson2(e.target.checked)}>
                    Attending?
                  </Checkbox>
                </Col>
              </Row>
              <Row>
                <Col>
                  Any song requests for the special day?
                </Col>
              </Row>
              <Row>
                <Col>
                <TextArea
                  value={songRequestsPerson2}
                  onChange={(e) => setSongRequestsPerson2(e.target.value)}
                  rows={4}
                  style={{width: '30vw', maxWidth: '400px'}}
                >
                </TextArea>
                </Col>
              </Row>
            </Card>
          : <div></div>}
        </Col>
        <Col
          xs={{ span: 1  }}
          sm={{ span: 3  }}
          md={{ span: 3  }}
          lg={{ span: 4  }}
          xl={{ span: 4  }}
        ></Col>
      </Row>
      <br/>
      <Row justify='center'>
        <Button type='primary' onClick={() => setRSVP()}>RSVP</Button>
      </Row>
      <Row style={{height: '200px'}}></Row>
    </div>
  )
}

export default withRouter(RSVP2);