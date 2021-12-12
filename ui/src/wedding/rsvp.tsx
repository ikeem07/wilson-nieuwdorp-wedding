import { FC, SetStateAction, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Row, Col, Button, Form, Input, Divider, AutoComplete, message } from 'antd';
import { Helmet } from 'react-helmet';
import { Amplify } from '@aws-amplify/core';
import awsExports from '../aws-exports';
import { DataStore } from 'aws-amplify';
import { Guest } from '../models';
import moment from 'moment';
import stateList from '../assets/json/stateList.json'

const RSVP: FC<RouteComponentProps> = (props) => {
  const [stateOptions, setStateOptions] = useState<{ value: string }[]>([]);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [addressLine1, setAddressLine1] = useState<string>('');
  const [addressLine2, setAddressLine2] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [zip, setZip] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [cell, setCell] = useState<string>('');
  const [saveButtonDisabled, setSaveButtonDisabled] = useState<boolean>(false);


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

  const testCall = async () => {
    console.log('Start Save');
    try {
      await DataStore.save(
        new Guest({
          firstName: 'Ike',
          lastName: 'Wilson',
          streetAddress1: '1726 Delmar Dr.',
          city: 'Folcroft',
          state: 'PA',
          zip: '19032',
          createdAt: moment.utc().format()
        })
      )
      console.log('End Save'); 
    }
    catch (error) {
      console.log('Error saving post', error)
    }
  }

  const onFinish = async () => {
    console.log('setFirstName', firstName);
    setSaveButtonDisabled(true);
    try {
      await DataStore.save(
        new Guest({
          firstName: firstName,
          lastName: lastName,
          streetAddress1: addressLine1,
          streetAddress2: addressLine2,
          city: city,
          state: state,
          zip: zip,
          email: email,
          phone: cell,
          createdAt: moment.utc().format()
        })
      ).then((result) => {
        message.success('Contact Info Saved!');
      }).catch((error) => {
        message.error('Error Saving Contact Info :(');
      })

      setSaveButtonDisabled(false);
    }
    catch (error) {
      console.log('ERROR : ', error);
    }
  }

  const post = (that: any) => {
    console.log('HEY!', that);
  }

  return (
    <>
      <Helmet>
        <title>RSVP</title>
      </Helmet>
      <Row>
        <Col offset={6} span={12}>
          <div style={{fontSize: 'xxx-large', textAlign: 'center', fontFamily: 'Great Vibes'}}>Address Book</div>
        </Col>
      </Row>
      <Row>
        <Col xs={{ offset: 0, span: 24  }} sm={{ offset: 0, span: 24  }} md={{ offset: 3, span: 18  }} lg={{ offset: 6, span: 12  }} xl={{ offset: 6, span: 12  }}>
          <Form {...layout} validateMessages={validateMessages} onFinish={() => onFinish()}>
            <Form.Item name="firstName" label="First Name" rules={[{ required: true }]}>
              <Input value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </Form.Item>
            <Form.Item name="lastName" label="Last Name" rules={[{ required: true }]}>
              <Input value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </Form.Item>
            <Divider/>
            <Form.Item name="addressLine1" label="Address Line1" rules={[{ required: true }]}>
              <Input value={addressLine1} onChange={(e) => setAddressLine1(e.target.value)} placeholder="Street address, P.O. box"/>
            </Form.Item>
            <Form.Item name="addressLine2" label="Address Line2">
              <Input value={addressLine2} onChange={(e) => setAddressLine2(e.target.value)} placeholder="Apartment, suite, unit, building, floor, etc."/>
            </Form.Item>
            <Form.Item name="city" label="City" rules={[{ required: true }]}>
              <Input value={city} onChange={(e) => setCity(e.target.value)}/>
            </Form.Item>
            <Form.Item name="state" label="State/Province" rules={[{ required: true }]}>
              <AutoComplete 
                options={stateOptions}
                onSearch={onSearchState}
                value={state}
                onChange={(e) => setState(e)}
              />
            </Form.Item>
            <Form.Item name="zip" label="ZIP/Postal Code">
              <Input value={zip} onChange={(e) => setZip(e.target.value)}/>
            </Form.Item>
            <Divider/>
            <Form.Item name="email" label="Email">
              <Input value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Form.Item>
            <Form.Item name="cell" label="Cell">
              <Input value={cell} onChange={(e) => setCell(e.target.value)}/>
            </Form.Item>
            <Button type="primary" htmlType="submit" disabled={saveButtonDisabled}>Save</Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default withRouter(RSVP);