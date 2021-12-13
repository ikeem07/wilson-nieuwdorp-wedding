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
  const [saveButtonText, setSaveButtonText] = useState<string>('Save');
  const [saveButtonLoading, setSaveButtonLoading] = useState<boolean>(false);
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

  const onFinish = async () => {
    setSaveButtonLoading(true);
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
        setSaveButtonText('Saved!');
      }).catch((error) => {
        message.error('Error Saving Contact Info :(');
        setSaveButtonText('Save');
        setSaveButtonDisabled(false);
      });

      setSaveButtonLoading(false);
    }
    catch (error) {
      console.log('ERROR : ', error);
    }
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
            <Form.Item name="firstName" label="First Name" className='formItem' rules={[{ required: true }]}>
              <Input value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </Form.Item>
            <Form.Item name="lastName" label="Last Name" className='formItem' rules={[{ required: true }]}>
              <Input value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </Form.Item>
            <Divider/>
            <Form.Item name="addressLine1" label="Address Line1" className='formItem' rules={[{ required: true }]}>
              <Input value={addressLine1} onChange={(e) => setAddressLine1(e.target.value)} placeholder="Street address, P.O. box"/>
            </Form.Item>
            <Form.Item name="addressLine2" label="Address Line2" className='formItem'>
              <Input value={addressLine2} onChange={(e) => setAddressLine2(e.target.value)} placeholder="Apartment, suite, unit, building, floor, etc."/>
            </Form.Item>
            <Form.Item name="city" label="City" className='formItem' rules={[{ required: true }]}>
              <Input value={city} onChange={(e) => setCity(e.target.value)}/>
            </Form.Item>
            <Form.Item name="state" label="State/Province" className='formItem' rules={[{ required: true }]}>
              <AutoComplete 
                options={stateOptions}
                onSearch={onSearchState}
                value={state}
                onChange={(e) => setState(e)}
              />
            </Form.Item>
            <Form.Item name="zip" label="ZIP/Postal Code" className='formItem'>
              <Input value={zip} onChange={(e) => setZip(e.target.value)}/>
            </Form.Item>
            <Divider/>
            <Form.Item name="email" label="Email" className='formItem'>
              <Input value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Form.Item>
            <Form.Item name="cell" label="Cell" className='formItem'>
              <Input value={cell} onChange={(e) => setCell(e.target.value)}/>
            </Form.Item>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px'}}>
              <Form.Item className='formItem' >
                <Button type="primary" htmlType="submit" loading={saveButtonLoading} disabled={saveButtonDisabled}>{saveButtonText}</Button>
              </Form.Item>
            </div>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default withRouter(RSVP);