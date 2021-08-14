import { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Row, Col } from 'antd';

const RSVP: FC<RouteComponentProps> = (props) => {
  return (
    <>
      <Row>
        <Col offset={6} span={12}>
          <div style={{fontSize: 'xxx-large', textAlign: 'center'}}>Coming Soon!</div>
        </Col>
      </Row>
    </>
  )
}

export default withRouter(RSVP);