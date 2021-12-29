import { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Row, Col } from 'antd';
import { Helmet } from 'react-helmet';

const Accommodations: FC<RouteComponentProps> = (props) => {
  return (
    <div style={{backgroundColor: '#a2bba3'}}>
      <Helmet>
        <title>Accommodations</title>
      </Helmet>
      <Row>
        <Col offset={6} span={12}>
          <div style={{fontSize: 'xxx-large', textAlign: 'center', fontFamily: 'Great Vibes'}}>Accommodations</div>
        </Col>
      </Row>
      <Row  style={{paddingLeft: '2px'}}>
        <Col xs={{ offset: 0, span: 24  }} sm={{ offset: 0, span: 24  }} md={{ offset: 3, span: 18  }} lg={{ offset: 6, span: 12  }} xl={{ offset: 6, span: 12  }}>
          <h2>Loews Hotel</h2>
          <div>Book your stay <a href="https://www.loewshotels.com/philadelphia-hotel/nieuwdorpwilson-wedding" target="_blank" rel="noreferrer">here</a> for a discount.</div>
          <iframe
            title="loews-hotel-map"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d24468.478669305954!2d-75.17022029759761!3d39.951234408777765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slowes%20hotel!5e0!3m2!1sen!2sus!4v1640748037689!5m2!1sen!2sus" 
            width="600"
            height="450"
            style={{border: '0'}}
            allowFullScreen={true}
            loading="lazy">
          </iframe>
        </Col>
      </Row>
      {/*<Row style={{paddingLeft: '2px'}}>
        <Col xs={{ offset: 0, span: 24  }} sm={{ offset: 0, span: 24  }} md={{ offset: 3, span: 18  }} lg={{ offset: 6, span: 12  }} xl={{ offset: 6, span: 12  }}>
          <h2></h2>
          <div>Street parking available.</div>
        </Col>
      </Row>*/}
    </div>
  )
}

export default withRouter(Accommodations);