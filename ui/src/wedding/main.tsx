import { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

const Main: FC<RouteComponentProps | any> = (props) => {

  return (
    <div className={'backgroundImage'} style={{color: 'white', textAlign: 'center', lineHeight: '90vh'}}>
      <div style={{display: 'inline-block', verticalAlign: 'middle', lineHeight: 'normal'}}>
        <div style={{fontSize: 'xxx-large', fontFamily: 'Great Vibes'}}>
          Ikeem {' & '} Joanna
        </div>
        <p>
          When:
          <br/>
          Saturday, July 11th, 2022
        </p>
        <p>
          Where:
          <br/>
          Philadelphia, PA 19125
        </p>
      </div>
    </div>
  )
}

export default withRouter(Main);

//style={{height: "calc(100vh - 41px"}}