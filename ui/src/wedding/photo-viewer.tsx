import { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Row, Col } from 'antd';
import { Helmet } from 'react-helmet';

const PhotoViewer: FC<RouteComponentProps> = (props) => {
  return (
    <>
      <Helmet>
        <title>Photo Viewer</title>
      </Helmet>
      <Row>
        <Col offset={6} span={12}>
          <div style={{fontSize: 'xxx-large', textAlign: 'center'}}>Coming Soon!</div>
        </Col>
      </Row>
    </>
  )
}

export default withRouter(PhotoViewer);