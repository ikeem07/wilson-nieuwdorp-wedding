import { FC, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Layout, Drawer, Row, Col } from 'antd';
import { Icon } from '@mdi/react';
import { Footer, Content, Header } from 'antd/lib/layout/layout';
import Main from './main';
import ContactUs from './contact-us';
import { HomeFilled, MailFilled, MenuOutlined } from '@ant-design/icons';
import { mdiCardsPlayingOutline } from '@mdi/js';
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

const SiteLayout: FC<RouteComponentProps> = (props) => {
  const [currentPage, setCurrentPage] = useState<string>('1');
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const screens = useBreakpoint();

  const onDrawerClose = () => {
    setDrawerVisible(false);
  }

  return (
    <>
      <Layout style={{height:"100vh"}}>
        {screens.xs ? (
          <Header className={'header-mobile'} style={{ height: '6%', lineHeight: '6vh' }}>
            <MenuOutlined
                style={{ fontSize: "16px" }}
                onClick={() => {setDrawerVisible(true)}}
              />
              <Drawer
                placement="left"
                closable={false}
                onClose={onDrawerClose}
                visible={drawerVisible}
                height="auto"
              >
                <Row>
                  <span 
                    style={{lineHeight: '35px', fontSize: '20px'}} 
                    onClick={() => setCurrentPage('1')}
                  >
                    <span className={'link-image'}><HomeFilled /></span>{" "}
                    <span className={'link'}>Home</span>
                    {currentPage === '1' && <Icon path={mdiCardsPlayingOutline} size={1}/>}
                  </span>
                </Row>
                <Row>
                  <span
                    style={{lineHeight: '35px', fontSize: '20px'}}
                    onClick={() => setCurrentPage('2')}
                  >
                    <span className={'link-image'}><MailFilled /></span>{" "}
                    <span className={'link'}>Contact Us</span>
                    {currentPage === '2' && <Icon path={mdiCardsPlayingOutline} size={1}/>}
                  </span>
                </Row>
              </Drawer>
          </Header>
        ) : (
          <Header className={'header'} style={{ height: '6%', lineHeight: '6vh' }}>
            <div>
              <span className={'hover'} style={currentPage === '1' ? {borderBottom: '3px solid black'} : {}} onClick={() => setCurrentPage('1')}>
                <span className={'link-image'}><HomeFilled /></span>{" "}
                <span className={'link'}>Home</span>
              </span>
              {" | "}
              <span className={'hover'} style={currentPage === '2' ? {borderBottom: '3px solid black'} : {}} onClick={() => setCurrentPage('2')}>
                <span className={'link-image'}><MailFilled /></span>{" "}
                <span className={'link'}>Contact Us</span>
              </span>
            </div>
          </Header>
        )}
        <Content style={{height: '91%'}}>
          {currentPage === '1' && <Main />}
          {currentPage === '2' && <ContactUs />}
        </Content>
        <Footer className={'footer'} style={{height: '3%'}}>
          <div>Ike {"&"} Joe</div>
        </Footer>
      </Layout>
    </>
  )
}

export default withRouter(SiteLayout);