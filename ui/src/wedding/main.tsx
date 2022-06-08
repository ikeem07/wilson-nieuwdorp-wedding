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

  const goToVenue = () => {
    props.history.push({
      pathname: ROUTE_PATHS.DIRECTIONS
    })
  }

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className={'backgroundImage'} style={{color: 'white', textAlign: 'center', lineHeight: '90vh'}}>
        <Alert message={
        <>
          <div>Please RSVP by April 15th, 2022</div>
          <div style={{color: 'red', fontWeight: 'bold'}}>We are not doing a wedding registry, but you can gift us via Venmo at @Joanna-Nieuwdorp</div>
        </>
        } type="error" />
        <div style={{display: 'inline-block', verticalAlign: 'middle', lineHeight: 'normal'}}>
          <div style={{fontSize: 'xxx-large', fontFamily: 'Great Vibes'}}>
            Ikeem {' & '} Joanna
          </div>
          <div style={{maxWidth: '500px', background: 'rgb(0,0,0,0.33)'}}>
            <p>
              Please join us at the {' '}
              <a onClick={() => goToVenue()}>
                Sculpture Courtyard
              </a>{' '}
              for a short outdoor ceremony followed by a cocktail hour
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
          <p style={{background: 'rgb(0,0,0,0.33)'}}>
            When:
            <br/>
            Saturday, June 11th, 2022
            <br/>
            12:30 PM - 4:00 PM
          </p>
          <p style={{background: 'rgb(0,0,0,0.33)'}}>
            Where:
            <br/>
            <a onClick={() => goToVenue()}>The Sculpture Courtyard</a>
            <br/>
            1717 N Hancock St.
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