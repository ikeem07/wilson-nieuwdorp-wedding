import { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

const ContactUs: FC<RouteComponentProps> = (props) => {
  return (
    <div>CONTACT US!!</div>
  )
}

export default withRouter(ContactUs);