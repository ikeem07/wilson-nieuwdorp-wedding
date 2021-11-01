import { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Row, Col } from 'antd';
import { Helmet } from 'react-helmet';
import 'pro-gallery/dist/statics/main.css';

const proGallery = require('pro-gallery');
const { ProGallery } = proGallery;

const items = [{
  itemId: 'WeddingPhoto001',
  html: `<img src="../assets/images/WeddingPhoto001.jpg" alt="" />`,
  metadata: {
    type: 'image',
    height: 200,
    width: 300,
    title: 'title',
    description: 'description',
    backgroundColor: 'pink'
  }
}]

const container = {
  width: 1000,
  height: 500,
}

const PhotoViewer: FC<RouteComponentProps> = (props) => {
  return (
    <>
      <Helmet>
        <title>Photos</title>
      </Helmet>
      <Row>
        <Col offset={6} span={12}>
          <div style={{fontSize: 'xxx-large', textAlign: 'center'}}>Coming Soon!</div>
        </Col>
      </Row>
      <Row>
        <ProGallery
          items={items}
          container={container}
        />
      </Row>
    </>
  )
}

export default withRouter(PhotoViewer);