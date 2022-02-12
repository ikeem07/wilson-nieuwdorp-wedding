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
import { listGuests } from '../graphql'

Amplify.configure(awsExports);

const RSVP2: FC<RouteComponentProps> = (props) => {
  const [stateOptions, setStateOptions] = useState<{ value: string }[]>([]);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [rsvpSearchCriteria, setRSVPSearchCriteria] = useState<string>('');
  const [addressLine2, setAddressLine2] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [zip, setZip] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [cell, setCell] = useState<string>('');
  const [saveButtonText, setSaveButtonText] = useState<string>('Search');
  const [saveButtonLoading, setSaveButtonLoading] = useState<boolean>(false);
  const [saveButtonDisabled, setSaveButtonDisabled] = useState<boolean>(false);

  //Queries
  const findRSVP = `
    query listRSVPs {
      listRSVPs(filter: {searchName: {contains: "${rsvpSearchCriteria}"}}) {
        items {
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
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
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
        // fetch('https://axj2yvcatbfonpgqqxjhcfhf7m.appsync-api.us-east-2.amazonaws.com/graphql', {
        //   method: 'GET',
        //   headers: { "Content-Type": "application/json"},
        //   body: JSON.stringify({query: findRSVP})
        // }).then((result) => {
        //   console.log('FIND-ME', result);
        // })

        const rsvps = await API.graphql(graphqlOperation(findRSVP));
        const rsvpObject = convertToRSVPObject(rsvps);
        console.log('FIND-ME', rsvpObject.length);
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
      <Row>
        <Col offset={8} span={10}>
          <p>
            The RSVP Page is coming soon.
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={{ offset: 0, span: 24  }}
          sm={{ offset: 0, span: 24  }}
          md={{ offset: 3, span: 18  }}
          lg={{ offset: 6, span: 12  }}
          xl={{ offset: 6, span: 12  }}
        >
          <Form {...layout} validateMessages={validateMessages} onFinish={() => onFinish()}>
            <Form.Item 
              name="firstName" 
              label={<div className='formLabel'>Last Name</div>} 
              className='formItem' 
              rules={[{ required: true, min: 3 }]}>
              <Input value={rsvpSearchCriteria} onChange={(e) => setRSVPSearchCriteria(e.target.value)}/>
            </Form.Item>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px'}}>
              <Form.Item className='formItem' >
                <Button type="primary" htmlType="submit" loading={saveButtonLoading} disabled={saveButtonDisabled}>{saveButtonText}</Button>
              </Form.Item>
            </div>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card></Card>
        </Col>
        <Col>
          <Card></Card>
        </Col>
      </Row>
    </div>
  )
}

export default withRouter(RSVP2);