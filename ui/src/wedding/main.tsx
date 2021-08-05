import { FC, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Row } from 'antd';
import { callbackify } from 'util';

const Main: FC<RouteComponentProps | any> = (props) => {

  return (
      <div className={'backgroundImage'} style={{color: 'white'}}>
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
  )
}

export default withRouter(Main);

//style={{height: "calc(100vh - 41px"}}