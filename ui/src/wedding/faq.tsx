import { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import { Alert } from 'antd';

const FAQ: FC<RouteComponentProps | any> = (props) => {

  return (
    <>
      <Helmet>
        <title>FAQs</title>
      </Helmet>
      <div>FAQ</div>
    </>
  )
}

export default withRouter(FAQ);