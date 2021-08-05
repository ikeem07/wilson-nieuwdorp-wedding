import { FC, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Layout, Menu } from 'antd';
import { Footer, Content, Header } from 'antd/lib/layout/layout';
import Main from './main';
import ContactUs from './contact-us';

const SiteLayout: FC<RouteComponentProps> = (props) => {
  const [currentPage, setCurrentPage] = useState<string>('1');

  return (
    <Layout style={{height:"100vh"}}>
      <Header className={'header'} style={{height: '3%'}}>
        <span className={'link'} onClick={() => setCurrentPage('1')}>Home</span>
        {" | "}
        <span className={'link'} onClick={() => setCurrentPage('2')}>Contact Us</span>
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