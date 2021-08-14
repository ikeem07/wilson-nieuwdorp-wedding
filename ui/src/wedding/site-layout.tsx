import { FC, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Layout, Drawer, Row } from 'antd';
import { Icon } from '@mdi/react';
import { Footer, Content, Header } from 'antd/lib/layout/layout';
import Main from './main';
import RSVP from './rsvp';
import Directions from './directions';
import PhotoViewer from './photo-viewer';
import ContactUs from './contact-us';
import { HomeFilled, HomeOutlined, MailFilled, MailOutlined, PictureFilled, PictureOutlined, MenuOutlined } from '@ant-design/icons';
import { mdiCardsPlayingOutline, mdiMapMarkerRadius, mdiMapMarkerRadiusOutline } from '@mdi/js';
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
      <Layout style={{minHeight:"100vh"}}>
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
                    <span className={'link-image'}><HomeOutlined /></span>{" "}
                    <span className={'link'}>Home</span>
                    {currentPage === '1' && <Icon path={mdiCardsPlayingOutline} size={1}/>}
                  </span>
                </Row>
                <Row>
                  <span
                    style={{lineHeight: '35px', fontSize: '20px'}}
                    onClick={() => setCurrentPage('2')}
                  >
                    <span className={'link-image'}><PictureOutlined /></span>{" "}
                    <span className={'link'}>RSVP</span>
                    {currentPage === '2' && <Icon path={mdiCardsPlayingOutline} size={1}/>}
                  </span>
                </Row>
                <Row>
                  <span
                    style={{lineHeight: '35px', fontSize: '20px'}}
                    onClick={() => setCurrentPage('3')}
                  >
                    <span className={'link-image'}><Icon path={mdiMapMarkerRadiusOutline} size={.9}/></span>{" "}
                    <span className={'link'}>Directions</span>
                    {currentPage === '3' && <Icon path={mdiCardsPlayingOutline} size={1}/>}
                  </span>
                </Row>
                <Row>
                  <span
                    style={{lineHeight: '35px', fontSize: '20px'}}
                    onClick={() => setCurrentPage('4')}
                  >
                    <span className={'link-image'}><PictureOutlined /></span>{" "}
                    <span className={'link'}>Photos</span>
                    {currentPage === '4' && <Icon path={mdiCardsPlayingOutline} size={1}/>}
                  </span>
                </Row>
                <Row>
                  <span
                    style={{lineHeight: '35px', fontSize: '20px'}}
                    onClick={() => setCurrentPage('5')}
                  >
                    <span className={'link-image'}><MailOutlined /></span>{" "}
                    <span className={'link'}>Contact Us</span>
                    {currentPage === '5' && <Icon path={mdiCardsPlayingOutline} size={1}/>}
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
                <span className={'link-image'}><PictureFilled /></span>{" "}
                <span className={'link'}>RSVP</span>
              </span>
              {" | "}
              <span className={'hover'} style={currentPage === '3' ? {borderBottom: '3px solid black'} : {}} onClick={() => setCurrentPage('3')}>
                <span className={'link-image'}><Icon path={mdiMapMarkerRadius} size={.6}/></span>{" "}
                <span className={'link'}>Directions</span>
              </span>
              {" | "}
              <span className={'hover'} style={currentPage === '4' ? {borderBottom: '3px solid black'} : {}} onClick={() => setCurrentPage('4')}>
                <span className={'link-image'}><PictureFilled /></span>{" "}
                <span className={'link'}>Photos</span>
              </span>
              {" | "}
              <span className={'hover'} style={currentPage === '5' ? {borderBottom: '3px solid black'} : {}} onClick={() => setCurrentPage('5')}>
                <span className={'link-image'}><MailFilled /></span>{" "}
                <span className={'link'}>Contact Us</span>
              </span>
            </div>
          </Header>
        )}
        <Content style={{minHeight: '91%'}}>
          {currentPage === '1' && <Main />}
          {currentPage === '2' && <RSVP/>}
          {currentPage === '3' && <Directions />}
          {currentPage === '4' && <PhotoViewer />}
          {currentPage === '5' && <ContactUs />}
        </Content>
        <Footer className={'footer'} style={{height: '3%'}}>
          <div>Ike {"&"} Joe</div>
        </Footer>
      </Layout>
    </>
  )
}

export default withRouter(SiteLayout);