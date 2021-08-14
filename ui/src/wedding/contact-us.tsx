import { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Helmet } from 'react-helmet';

const ContactUs: FC<RouteComponentProps> = (props) => {
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <div>CONTACT US!!</div>
    </>
  )
}

export default withRouter(ContactUs);