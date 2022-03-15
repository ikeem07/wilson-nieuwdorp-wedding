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
                Do guests need to stay at the Loews Hotel?
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p><b>Answer:</b></p>
              <p>
                No, there are multiple hotel options to choose from. We would suggest staying in Old City, Center City, or Fishtown neighborhoods.
                <br/>
                Note: The wedding trolley will only depart to {' & '} from the Loews
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
                    <li>
                      <a href='https://middlechildphilly.com/'>
                        Middle Child
                      </a>
                      </li>
                    <li>
                      <a href='https://mercatobyob.com/'>
                        Mercato
                      </a>
                    </li>
                    <li>
                      <a href='https://www.sampanphilly.com/'>
                        Sampan
                      </a>{' '}
                      (where we got engaged)
                    </li>
                    <li>
                      <a href='https://www.sangkeechinatown.com/'>
                        Sangkee Pecking Duckhouse
                      </a>
                    </li>
                    <li>Telulas Daily</li>
                    <li>
                      <a href='https://www.federaldonuts.com/index.html'>
                        Federal Donuts
                      </a>{' '}
                      (East Market)</li>
                    <li>
                      <a href='http://littlenonnas.com/'>
                        Little Nonnas
                      </a>
                    </li>
                    <li>
                      <a href='https://www.indebluerestaurant.com/'>
                        Indeblue
                      </a>
                    </li>
                    <li>
                      <a href='https://terakawaramen.com/'>
                        Terakawa Ramen
                      </a>
                    </li>
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
                  Ike's recommendation:{' '}
                  <a href='https://jimssouthstreet.com/'>
                    Jim's on South St.
                  </a>
                  <br/>
                  Joanna's recommendation:
                  <a href='https://sonnyscheesesteaks.com/menu/'>
                    Sonny's in Old City
                  </a>
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