import { FC, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Layout, Menu } from 'antd';
import { Footer, Content, Header } from 'antd/lib/layout/layout';
import Main from './main';
import ContactUs from './contact-us';
import { HomeFilled, MailFilled } from '@ant-design/icons';

const SiteLayout: FC<RouteComponentProps> = (props) => {
  const [currentPage, setCurrentPage] = useState<string>('1');

  return (
    <Layout style={{height:"100vh"}}>
      <Header className={'header'} style={{height: '3%'}}>
        <span className={'hover'} onClick={() => setCurrentPage('1')}>
          <span className={'link-image'}><HomeFilled /></span>{" "}
          <span className={'link'}>Home</span>
        </span>
        {" | "}
        <span className={'hover'} onClick={() => setCurrentPage('2')}>
          <span className={'link-image'}><MailFilled /></span>{" "}
          <span className={'link'}>Contact Us</span>
        </span>
      </Header>
      <Content style={{height: '94%'}}>
        {currentPage === '1' && <Main />}
        {currentPage === '2' && <ContactUs />}
      </Content>
      <Footer className={'footer'} style={{height: '3%'}}>
        <div>Ike {"&"} Joe</div>
      </Footer>
    </Layout>
  )
}

export default withRouter(SiteLayout);