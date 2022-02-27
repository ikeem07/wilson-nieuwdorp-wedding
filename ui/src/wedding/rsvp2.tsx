import { FC, SetStateAction, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Row, Col, Button, Form, Input, Divider, AutoComplete, message, Tooltip, Card } from 'antd';
import { PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet';
import awsExports from '../aws-exports';
import Amplify, { DataStore, API, graphqlOperation } from 'aws-amplify';
import { Guest, RSVP } from '../models';
import moment from 'moment';
import stateList from '../assets/json/stateList.json'
import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";
import GraphQLAPI, { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';
import { listGuests, updateRSVP, createRSVP } from '../graphql'
import Checkbox from 'antd/lib/checkbox/Checkbox';
import TextArea from 'antd/lib/input/TextArea';

Amplify.configure(awsExports);

const RSVP2: FC<RouteComponentProps> = (props) => {
  const [stateOptions, setStateOptions] = useState<{ value: string }[]>([]);
  const [rsvpSearchCriteria, setRSVPSearchCriteria] = useState<string>('');
  const [rsvpGuestData, setRsvpGuestData] = useState<RSVP[]>([]);
  const [dataVersionGuest1, setDataVersionGuest1] = useState<number>(0);
  const [dataVersionGuest2, setDataVersionGuest2] = useState<number>(0);
  const [attendingPerson1, setAttendingPerson1] = useState<boolean>(false);
  const [attendingPerson2, setAttendingPerson2] = useState<boolean>(false);
  const [songRequestsPerson1, setSongRequestsPerson1] = useState<string>('');
  const [songRequestsPerson2, setSongRequestsPerson2] = useState<string>('');
  const [showPlusOneButton, setShowPlusOneButton] = useState<boolean>(true);
  const [savePlusOne, setSavePlusOne] = useState<boolean>(false);
  const [saveButtonLoading, setSaveButtonLoading] = useState<boolean>(false);
  const [saveButtonDisabled, setSaveButtonDisabled] = useState<boolean>(false);
  const [plusOneFirstName, setPlusOneFirstName] = useState<string>('');
  const [plusOneSecondName, setPlusOneSecondName] = useState<string>('');
  const [plusOneAttending, setPlusOneAttending] = useState<boolean>(false);
  const [plusOneSongRequests, setPlusOneSongRequests] = useState<string>('');

  const [form] = Form.useForm();

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
          _version
        }
      }
    }
  `

  const layout = {
    labelCol: { span: 12 },
    wrapperCol: { span: 12 },
  };

  useEffect(() => {
    Amplify.configure(awsExports);
    DataStore.clear();
  }, []);

  useEffect(() => {
    if (rsvpGuestData.length >= 1) {
      setDataVersionGuest1(rsvpGuestData[0]._version as number)
      setAttendingPerson1(rsvpGuestData[0].attending)
      setSongRequestsPerson1(rsvpGuestData[0].songList ?? '')
    }

    if (rsvpGuestData.length === 2) {
      setDataVersionGuest2(rsvpGuestData[1]._version as number);
      setAttendingPerson2(rsvpGuestData[1].attending)
      setSongRequestsPerson2(rsvpGuestData[1].songList ?? '')
    }
  }, [rsvpGuestData])

  function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

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

  const updateRSVPRecord = async (
    id: string,
    _version: number,
    addedByUser: boolean,
    songList: string,
    attending: boolean,
    guestOne: boolean
  ) => {
    try {
      const result = await API.graphql(graphqlOperation(updateRSVP, { 
        input: { 
          id: id, 
          _version: _version,
          addedByUser: addedByUser,
          songList: songList,
          attending: attending
        }
      }));
      
      if (guestOne) {
        const rsvpsStringify = JSON.stringify(result);
        const rsvpsJSONify = JSON.parse(rsvpsStringify);
        setDataVersionGuest1(rsvpsJSONify?.data?.updateRSVP?._version);
      } else {
        const rsvpsStringify = JSON.stringify(result);
        const rsvpsJSONify = JSON.parse(rsvpsStringify);
        setDataVersionGuest2(rsvpsJSONify?.data?.updateRSVP?._version);
      }
    }
    catch (error) {
      message.error('Error trying to save your RSVP');
    }
  }

  const setRSVP = async () => {
    console.log('FIND-ME-rsvpGuestData', rsvpGuestData.length);
    console.log('FIND-ME-id', rsvpGuestData[0].id);
    console.log('FIND-ME-songList', songRequestsPerson1);
    console.log('FIND-ME-attending', attendingPerson1);

    if (!savePlusOne) {
      if (rsvpGuestData.length === 1) {
        await updateRSVPRecord(
          rsvpGuestData[0].id, 
          dataVersionGuest1,
          false,
          songRequestsPerson1,
          attendingPerson1,
          true
        )
        
        message.success('Your RSVP has been saved successfully!');
      } else if (rsvpGuestData.length === 2) {
        //Person 1
        await updateRSVPRecord(
          rsvpGuestData[0].id,
          dataVersionGuest1,
          false,
          songRequestsPerson1,
          attendingPerson1,
          true
        );

        //Person 2
        await updateRSVPRecord(
          rsvpGuestData[1].id,
          dataVersionGuest2,
          false,
          songRequestsPerson2,
          attendingPerson2,
          false
        );

        message.success('Your RSVP has been saved successfully!');
      }
    } else {
      await updateRSVPRecord(
        rsvpGuestData[0].id, 
        dataVersionGuest1,
        false,
        songRequestsPerson1,
        attendingPerson1,
        true
      )

      const result = await API.graphql(graphqlOperation(createRSVP, { 
        input: {  
          addedByUser: true,
          attending: plusOneAttending,
          firstName: plusOneFirstName,
          groupNum: rsvpGuestData[0].groupNum,
          searchName: plusOneFirstName.toLowerCase() + ' ' + plusOneSecondName.toLowerCase(),
          secondName: plusOneSecondName,
          songList: plusOneSongRequests
        }
      }));

      console.log('FIND-ME_createdUser', result);
      const rsvpsStringify = JSON.stringify(result);
      const rsvpsJSONify = JSON.parse(rsvpsStringify);
      setRsvpGuestData([...rsvpGuestData, rsvpsJSONify.data.createRSVP as RSVP])
    }
  }

  const addPlusOne = () => {
    setSavePlusOne(true);
    setShowPlusOneButton(false);
  }

  const removePlusOne = () => {
    setSavePlusOne(false);
    setShowPlusOneButton(true);
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
        setRsvpGuestData(convertToRSVPObject(rsvps));
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
          <Form {...layout} layout="vertical" onFinish={() => onFinish()}>
            <Form.Item 
              name="searchName" 
              label={<div><b>Enter your first or last name to find your RSVP record:</b></div>} 
              rules={[{ required: true, min: 3 }]}>
              <Input value={rsvpSearchCriteria} onChange={(e) => setRSVPSearchCriteria(e.target.value)}/>
            </Form.Item>
            <div>
              <Form.Item className='formItem' >
                <Button type="primary" htmlType="submit" loading={saveButtonLoading} disabled={saveButtonDisabled}>Search</Button>
              </Form.Item>
            </div>
          </Form>
        </Col>
      </Row>
      {rsvpGuestData.length === 2 &&
        <Row justify='center'>
          <Col>
            <p>Who will be attending our wedding on June 11th, 2022 from 12:30PM to 4PM?</p>
          </Col>
        </Row>}
      {rsvpGuestData.length === 1 &&
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
          xs={{ span: 11 }}
          sm={{ span: 9  }}
          md={{ span: 9  }}
          lg={{ span: 8  }}
          xl={{ span: 8  }}
        >
          {rsvpGuestData.length >= 1 
          ? <Card
             title={`${rsvpGuestData[0]?.firstName} ${rsvpGuestData[0]?.secondName}`}
             style={{marginRight: '3px'}}
            >
              <Row>
                <Col>
                  <Checkbox checked={attendingPerson1} onChange={(e) => setAttendingPerson1(e.target.checked)}>
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
          {rsvpGuestData[0]?.plusOne && rsvpGuestData?.length < 2 && showPlusOneButton
          ? <div style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
              <Button 
                size='large' 
                style={{display: 'inline-block',verticalAlign: 'middle'}}
                onClick={() => addPlusOne()}>
                <PlusSquareOutlined/>ADD A PLUS ONE
              </Button>
            </div>
          : <div></div>
          }
          {!showPlusOneButton
          ? <Form form={form} name={'plusOneForm'} layout={'vertical'}>
              <Row>
                <Col span={9}>
                  <Form.Item
                    label={'First Name'}
                    style={{marginRight: '3px'}}
                  >
                    <Input 
                      value={plusOneFirstName}
                      onChange={(e) => setPlusOneFirstName(e.target.value)}
                    ></Input>
                  </Form.Item>
                </Col>
                <Col span={9}>
                  <Form.Item
                    label={'Last Name'}
                  >
                    <Input 
                      value={plusOneSecondName}
                      onChange={(e) => setPlusOneSecondName(e.target.value)}
                    ></Input>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={9}>
                  <Form.Item
                    label={'Attending?'}
                  >
                    <Checkbox checked={plusOneAttending} onChange={(e) => setPlusOneAttending(e.target.checked)}>
                    </Checkbox>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label={'Any song requests for the special day?'}
                  >
                    <TextArea
                        value={plusOneSongRequests}
                        onChange={(e) => setPlusOneSongRequests(e.target.value)}
                        rows={4}
                        style={{width: '15vw', maxWidth: '400px'}}
                      >
                    </TextArea>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <div style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Button 
                    size='large' 
                    style={{display: 'inline-block',verticalAlign: 'middle'}}
                    onClick={() => removePlusOne()}
                    danger
                  >
                    <MinusSquareOutlined/>REMOVE A PLUS ONE
                  </Button>
                </div>
              </Row>
            </Form>
          : <></>
          }
          {rsvpGuestData.length > 1
          ? <Card
              title={`${rsvpGuestData[1]?.firstName} ${rsvpGuestData[1]?.secondName}`}
              style={{marginLeft: '3px'}}
            >
              <Row>
                <Col>
                  <Checkbox checked={attendingPerson2} onChange={(e) => setAttendingPerson2(e.target.checked)}>
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
      {rsvpGuestData.length > 0 && 
        <Row justify='center'>
          <Button type='primary' onClick={() => setRSVP()}>RSVP</Button>
        </Row>
      }
      <Row style={{height: '200px'}}></Row>
    </div>
  )
}

export default withRouter(RSVP2);