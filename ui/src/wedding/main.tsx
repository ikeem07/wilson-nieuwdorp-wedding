import { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import { Alert } from 'antd';
import { ROUTE_PATHS } from '../common/constants';

const Main: FC<RouteComponentProps | any> = (props) => {
  const goToFAQ = () => {
    props.history.push({
      pathname: ROUTE_PATHS.FAQ
    })
  }

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className={'backgroundImage'} style={{color: 'white', textAlign: 'center', lineHeight: '90vh'}}>
        <Alert message="Please RSVP by April 15th, 2022" type="error" />
        <div style={{display: 'inline-block', verticalAlign: 'middle', lineHeight: 'normal'}}>
          <div style={{fontSize: 'xxx-large', fontFamily: 'Great Vibes'}}>
            Ikeem {' & '} Joanna
          </div>
          <div style={{maxWidth: '500px', background: 'rgb(0,0,0,0.25)'}}>
            <p>
              Please join us at the Sculpture Courtyard for a short outdoor ceremony followed by a cocktail hour
              and brunch to celebrate our love.
            </p>
            <p>
              For frequently asked questions please checkout our {' '}
              <a onClick={() => goToFAQ()}>
                FAQ
              </a>{' '}
              page.
            </p>
          </div>
          <p>
            When:
            <br/>
            Saturday, June 11th, 2022
          </p>
          <p>
            Where:
            <br/>
            <a href="https://www.google.com/maps/place/The+Sculpture+Courtyard/@39.9763803,-75.1364325,15z/data=!4m5!3m4!1s0x0:0x44c5162f0b634b77!8m2!3d39.9763471!4d-75.1361584">The Sculpture Courtyard</a>
            <br/>
            1714 N Mascher St.
            <br/>
            Philadelphia, PA 19122
          </p>
        </div>
      </div>
    </>
  )
}

export default withRouter(Main);

//style={{height: "calc(100vh - 41px"}}