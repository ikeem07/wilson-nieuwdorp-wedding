import { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import { 
  Row,
  Col
} from 'antd';

const FAQ: FC<RouteComponentProps | any> = (props) => {

  return (
    <>
      <Helmet>
        <title>FAQs</title>
      </Helmet>
      <div style={{backgroundImage: 'linear-gradient(180deg, #a2bba3, #64242e)', paddingLeft: '3px'}}>
        <Row>
          <Col offset={6} span={12}>
            <div style={{fontSize: 'xxx-large', textAlign: 'center', fontFamily: 'Great Vibes'}}>FAQ</div>
          </Col>
        </Row>
        <div style={{fontSize: '16px'}}>
          <Row>
            <Col>
              <p>
                <b>
                  Question:
                </b> {' '}
                Do guests need to stay at the Leows Hotel?
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p><b>Answer:</b></p>
              <p>
                No, there are multiple hotel options to choose from. We would suggest staying in Old City, Center City, or Fishtown neighborhoods.
                <br/>
                Note: The wedding trolley will only depart to {' & '} from the Leows
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <b>
                  Question:
                </b> {' '}
                Do we need to rent a car?
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p><b>Answer:</b></p>
              <p>
                Not at all. Philly is very walkable, and the hotel is central to public transportation (SEPTA, Regional Rail, Amtract, etc.).
                For further information, please visit the Venue {' & '} Accomodations sections of the site.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <b>
                  Question:
                </b> {' '}
                What else can we do while we are in the city?
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p><b>Answer:</b></p>
              <p>
                Please visit some of our favorite places:
                <br/>
                Links go here
              </p>
            </Col>
          </Row>
          <div style={{color: '	#B8B8B8'}}>
            <Row>
              <Col>
                <p>
                  <b>
                    Question:
                  </b> {' '}
                  Where else should we eat?
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p><b>Answer:</b></p>
                <p>
                  Here are a few of our favorites
                  <ul>
                    <li>Middle Child</li>
                    <li>Mercato</li>
                    <li>Sampan (where we got engaged)</li>
                    <li>Sangkee Pecking Duckhouse</li>
                    <li>Telulas Daily</li>
                    <li>Federal Donuts</li>
                    <li>Little Nonnas</li>
                    <li>Indeblue</li>
                    <li>Terakawa Ramen</li>
                  </ul>
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  <b>
                    Question:
                  </b> {' '}
                  Where can I get the best cheesesteaks?
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p><b>Answer:</b></p>
                <p>
                  Ike's recommendation: Jim's on South St.
                  <br/>
                  Joanna's recommendation: Sonny's in Old City
                  <br/>
                  Try them out and let us know!
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(FAQ);