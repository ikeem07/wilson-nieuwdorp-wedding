import { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Row, Col } from 'antd';
import { Helmet } from 'react-helmet';

const Directions: FC<RouteComponentProps> = (props) => {
  return (
    <>
      <Helmet>
        <title>Directions</title>
      </Helmet>
      <Row>
        <Col offset={6} span={12}>
          <div style={{fontSize: 'xxx-large', textAlign: 'center'}}>Directions</div>
        </Col>
      </Row>
      <Row  style={{paddingLeft: '2px'}}>
        <Col xs={{ offset: 0, span: 24  }} sm={{ offset: 0, span: 24  }} md={{ offset: 3, span: 18  }} lg={{ offset: 6, span: 12  }} xl={{ offset: 6, span: 12  }}>
          <h2>Venue Location</h2>
          <div>The entrance is located accross from Stateside Vodka on N Hancock St.</div>
          <iframe 
            title="sculpture-courtyard-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.4349476457833!2d-75.13862118489136!3d39.97638439022661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c9ddfa3775f9%3A0x44c5162f0b634b77!2sThe%20Sculpture%20Courtyard!5e0!3m2!1sen!2sus!4v1628934624067!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{border: '0'}}
            allowFullScreen={true}
            loading="lazy">
          </iframe>
        </Col>
      </Row>
      <Row style={{paddingLeft: '2px'}}>
        <Col xs={{ offset: 0, span: 24  }} sm={{ offset: 0, span: 24  }} md={{ offset: 3, span: 18  }} lg={{ offset: 6, span: 12  }} xl={{ offset: 6, span: 12  }}>
          <h2>Parking</h2>
          <div>Street parking available.</div>
        </Col>
      </Row>
      <Row style={{paddingLeft: '2px'}}>
        <Col xs={{ offset: 0, span: 24  }} sm={{ offset: 0, span: 24  }} md={{ offset: 3, span: 18  }} lg={{ offset: 6, span: 12  }} xl={{ offset: 6, span: 12  }}>
          <h2>Public Transportation</h2>
          <div>
            <b>
              Subway{" "}
              (<a href="http://www.septa.org/schedules/transit/index.html">
                Map {" & "} Schedule
              </a>)
              :
            </b>
            <ul style={{paddingInlineStart: '20px'}}>
              <li>Take the Market-Frankford Line (MFL) to Berks</li>
              <li>Walk west on Berks until you reach N Hancock St</li>
              <li>Walk south on N Hancock St until you see W Palmer St</li>
              <li>Keep walking south and start looking to your left for the entrance. It will be accross the street from the Stateside Vodka building. If you hit Cecil B. Moore Ave then you went too far</li>
            </ul>
            <b>Bus:</b>
            <br/>3{" "}
            (<a href="http://www.septa.org/schedules/bus/pdf/003.pdf">
              Map {' & '} Schedule
            </a>)
            <ul style={{paddingInlineStart: '20px'}}>
              <li>Get of the bus at Berks St {' & '} N Hancock St; this stop is located between Front and Dauphin Sts {' & '} Broad St and Cecil B. Moore Ave on the bus schedule</li>
              <li>Walk south down N Hancock St until W Palmer St</li>
              <li>Keep walking south and start looking to your left for the entrance. It will be accross the street from the Stateside Vodka building. If you hit Cecil B. Moore Ave then you went too far</li>
            </ul>
            <br/>57{" "}
            (<a href="http://www.septa.org/schedules/bus/pdf/057.pdf">
              Map {' & '} Schedule
            </a>)
            <ul style={{paddingInlineStart: '20px'}}>
              <li>Get of the bust at N American St {' & '} Cecil B. Moore Ave; this stop is located between 2nd St and Lehigh Ave {' & '} 3rd St and Girard Ave on the bus schedule</li>
              <li>Walk east on Cecil B. Moore Ave until you reach N Hancock St</li>
              <li>Start heading north on N Hancock St while looking to your right for the entrance. It will be accross the street from the Stateside Vodka building</li>
            </ul>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default withRouter(Directions);