import { FC, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import { 
  Row,
  Col,
  Button,
  Table
} from 'antd';
import { API, graphqlOperation, SortDirection } from 'aws-amplify';
import { listRSVPs } from '../graphql'

const Administration: FC<RouteComponentProps | any> = (props) => {
  const [rsvpResult, setRSVPResult] = useState<any>();

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a: any, b: any) => a.secondName.localeCompare(b.secondName),
      render: (text: any, record: any) => {
        return <div>
          {record.firstName} {record.secondName}
        </div>
      }
    },
    {
      title: 'Attending',
      dataIndex: 'attending',
      key: 'attending',
      render: (text: any, record: any) => {
        if(record.attending) {
          return <div>Yes</div>
        } else {
          return <div>No</div>
        }
      }
    },
    {
      title: 'Guest Added As Plus One',
      dataIndex: 'addedByUser',
      key: 'addedByUser',
      render: (text: any, record: any) => {
        if(record.addedByUser) {
          return <div>Yes</div>
        } else {
          return <div>No</div>
        }
      }
    },
    {
      title: 'Last Updated',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
    }
  ]

  useEffect(() => {
    console.log('FIND-ME', rsvpResult)
  }, [])

  const loadRSVPData = async () => {
    const result = await API.graphql(graphqlOperation(listRSVPs, { }));

    const rsvpsStringify = JSON.stringify(result);
    const rsvpsJSONify = JSON.parse(rsvpsStringify);
    const rsvpObject = rsvpsJSONify.data.listRSVPs.items as any[];
    setRSVPResult(rsvpObject);
  }
  
  return (
    <>
      <Helmet>
        <title>Administration</title>
      </Helmet>
      <Row>
        <Col offset={6} span={12}>
          <div style={{fontSize: 'xxx-large', textAlign: 'center', fontFamily: 'Great Vibes'}}>Administration</div>
        </Col>
      </Row>
      <Row justify='center'>
        <Col>
          <Button onClick={() => loadRSVPData()} type="primary">
            Get RSVP Info
          </Button>
        </Col>
      </Row>
      <Row style={{minHeight: '25px'}}>
        
      </Row>
      {rsvpResult !== undefined ? <Row justify='center'>
        <Col>
          <Table
            dataSource={rsvpResult as any[]}
            columns={columns}
          />
        </Col>
      </Row> : <></>}
    </>
  )
}

export default withRouter(Administration);