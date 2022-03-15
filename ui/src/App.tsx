import { FC, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { Layout, Drawer, Row } from 'antd';
import { Footer, Content, Header } from 'antd/lib/layout/layout';
import { Icon } from '@mdi/react';
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import {
  HomeFilled,
  HomeOutlined,
  MailFilled,
  MailOutlined,
  PictureFilled,
  PictureOutlined,
  MenuOutlined,
  GlobalOutlined,
  QuestionCircleFilled
} from '@ant-design/icons';
import { mdiCardsPlayingOutline, mdiMapMarkerRadius, mdiMapMarkerRadiusOutline } from '@mdi/js';
import './App.css';
import Main from './wedding/main';
import RSVP from './wedding/rsvp';
import RSVP2 from './wedding/rsvp2';
import Accommodations from './wedding/accommodations';
import Directions from './wedding/directions';
import PhotoViewer from './wedding/photo-viewer';
import ContactUs from './wedding/contact-us';
import FAQ from './wedding/faq';
import { ROUTE_PATHS } from './common/constants';

const App: FC<RouteComponentProps> = (props) => {
  const [currentPage, setCurrentPage] = useState<string>('');
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const [showRSVP, setShowRSVP] = useState<boolean>(true);
  const screens = useBreakpoint();

  useEffect(() => {
    switch(props.location.pathname) {
      case ROUTE_PATHS.HOME:
        setCurrentPage('1');
        break;
      case ROUTE_PATHS.RSVP:
        setCurrentPage('2');
        break;
      case ROUTE_PATHS.ACCOMMODATIONS:
        setCurrentPage('6');
        break;
      case ROUTE_PATHS.DIRECTIONS:
        setCurrentPage('3');
        break;
      case ROUTE_PATHS.PHOTO_VIEWER:
        setCurrentPage('4');
        break;
      case ROUTE_PATHS.CONTACT_US:
        setCurrentPage('5');
        break;
      case ROUTE_PATHS.RSVP2:
        setCurrentPage('7');
        break;
      case ROUTE_PATHS.FAQ:
        setCurrentPage('8');
        break;
      default:
        setCurrentPage('1');
        break;
    }
  }, [props.location])

  const onDrawerClose = () => {
    setDrawerVisible(false);
  }

  const routeToPage = (key:string) => {
    switch(key) {
      case '1':
        props.history.push({
          pathname: ROUTE_PATHS.HOME
        })
        break;
      case '2':
        props.history.push({
          pathname: ROUTE_PATHS.RSVP
        })
        break;
      case '6':
        props.history.push({
          pathname: ROUTE_PATHS.ACCOMMODATIONS
        })
        break;
      case '3':
        props.history.push({
          pathname: ROUTE_PATHS.DIRECTIONS
        })
        break;
      case '4':
        props.history.push({
          pathname: ROUTE_PATHS.PHOTO_VIEWER
        })
        break;
      case '5':
        props.history.push({
          pathname: ROUTE_PATHS.CONTACT_US
        })
        break;
      case '7':
        props.history.push({
          pathname: ROUTE_PATHS.RSVP2
        })
        break;
      case '8':
        props.history.push({
          pathname: ROUTE_PATHS.FAQ
        })
        break;
    }
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
                width={'70%'}
              >
                <Row>
                  <span 
                    style={{lineHeight: '35px', fontSize: '20px'}} 
                    onClick={() => {setCurrentPage('1'); routeToPage('1')}}
                  >
                    <span className={'link-image'}><HomeOutlined /></span>{" "}
                    <span className={'link'}>Home</span>
                    {currentPage === '1' && <Icon path={mdiCardsPlayingOutline} size={1}/>}
                  </span>
                </Row>
                {showRSVP && <Row>
                  <span
                    style={{lineHeight: '35px', fontSize: '20px'}}
                    onClick={() => {setCurrentPage('7'); routeToPage('7')}}
                  >
                    <span className={'link-image'}><PictureOutlined /></span>{" "}
                    <span className={'link'}>RSVP</span>
                    {currentPage === '7' && <Icon path={mdiCardsPlayingOutline} size={1}/>}
                  </span>
                </Row>}
                {showRSVP && <Row>
                  <span
                    style={{lineHeight: '35px', fontSize: '20px'}}
                    onClick={() => {setCurrentPage('2'); routeToPage('2')}}
                  >
                    <span className={'link-image'}><PictureOutlined /></span>{" "}
                    <span className={'link'}>Address Book</span>
                    {currentPage === '2' && <Icon path={mdiCardsPlayingOutline} size={1}/>}
                  </span>
                </Row>}
                <Row>
                  <span
                    style={{lineHeight: '35px', fontSize: '20px'}}
                    onClick={() => {setCurrentPage('6'); routeToPage('6')}}
                  >
                    <span className={'link-image'}><GlobalOutlined /></span>{" "}
                    <span className={'link'}>Accommodations</span>
                    {currentPage === '6' && <Icon path={mdiCardsPlayingOutline} size={1}/>}
                  </span>
                </Row>
                <Row>
                  <span
                    style={{lineHeight: '35px', fontSize: '20px'}}
                    onClick={() => {setCurrentPage('3'); routeToPage('3')}}
                  >
                    <span className={'link-image'}><Icon path={mdiMapMarkerRadiusOutline} size={.9}/></span>{" "}
                    <span className={'link'}>Venue</span>
                    {currentPage === '3' && <Icon path={mdiCardsPlayingOutline} size={1}/>}
                  </span>
                </Row>
                <Row>
                  <span
                    style={{lineHeight: '35px', fontSize: '20px'}}
                    onClick={() => {setCurrentPage('4'); routeToPage('4')}}
                  >
                    <span className={'link-image'}><PictureOutlined /></span>{" "}
                    <span className={'link'}>Photos</span>
                    {currentPage === '4' && <Icon path={mdiCardsPlayingOutline} size={1}/>}
                  </span>
                </Row>
                <Row>
                  <span
                    style={{lineHeight: '35px', fontSize: '20px'}}
                    onClick={() => {setCurrentPage('8'); routeToPage('8')}}
                  >
                    <span className={'link-image'}><QuestionCircleFilled /></span>{" "}
                    <span className={'link'}>FAQs</span>
                    {currentPage === '8' && <Icon path={mdiCardsPlayingOutline} size={1}/>}
                  </span>
                </Row>
                {/*<Row>
                  <span
                    style={{lineHeight: '35px', fontSize: '20px'}}
                    onClick={() => {setCurrentPage('5'); routeToPage('5')}}
                  >
                    <span className={'link-image'}><MailOutlined /></span>{" "}
                    <span className={'link'}>Contact Us</span>
                    {currentPage === '5' && <Icon path={mdiCardsPlayingOutline} size={1}/>}
                  </span>
                </Row>*/}
              </Drawer>
          </Header>
        ) : (
          <Header className={'header'} style={{ height: '6%', lineHeight: '6vh' }}>
            <div>
              <span
                className={'hover'}
                style={currentPage === '1' ? {borderBottom: '3px solid black'} : {}}
                onClick={() => {setCurrentPage('1'); routeToPage('1')}}
              >
                <span className={'link-image'}><HomeFilled /></span>{" "}
                <span className={'link'}>Home</span>
              </span>
              {" | "}
              {showRSVP && <span
                className={'hover'}
                style={currentPage === '7' ? {borderBottom: '3px solid black'} : {}}
                onClick={() => {setCurrentPage('7'); routeToPage('7')}}
              >
                <span className={'link-image'}><PictureFilled /></span>{" "}
                <span className={'link'}>RSVP</span>
              </span>
              }
              {showRSVP && " | "}
              {showRSVP && <span
                className={'hover'}
                style={currentPage === '2' ? {borderBottom: '3px solid black'} : {}}
                onClick={() => {setCurrentPage('2'); routeToPage('2')}}
              >
                <span className={'link-image'}><PictureFilled /></span>{" "}
                <span className={'link'}>Address Book</span>
              </span>
              }
              {showRSVP && " | "}
              <span
                className={'hover'}
                style={currentPage === '6' ? {borderBottom: '3px solid black'} : {}}
                onClick={() => {setCurrentPage('6'); routeToPage('6')}}
              >
                <span className={'link-image'}><GlobalOutlined /></span>{" "}
                <span className={'link'}>Accommodations</span>
              </span>
              {showRSVP && " | "}
              <span
                className={'hover'}
                style={currentPage === '3' ? {borderBottom: '3px solid black'} : {}}
                onClick={() => {setCurrentPage('3'); routeToPage('3')}}
              >
                <span className={'link-image'}><Icon path={mdiMapMarkerRadius} size={.6}/></span>{" "}
                <span className={'link'}>Venue</span>
              </span>
              {" | "}
              <span
                className={'hover'}
                style={currentPage === '4' ? {borderBottom: '3px solid black'} : {}}
                onClick={() => {setCurrentPage('4'); routeToPage('4')}}
              >
                <span className={'link-image'}><PictureFilled /></span>{" "}
                <span className={'link'}>Photos</span>
              </span>
              {" | "}
              <span
                className={'hover'}
                style={currentPage === '8' ? {borderBottom: '3px solid black'} : {}}
                onClick={() => {setCurrentPage('8'); routeToPage('8')}}
              >
                <span className={'link-image'}><QuestionCircleFilled /></span>{" "}
                <span className={'link'}>FAQs</span>
              </span>
              {/*{" | "}
              <span
                className={'hover'}
                style={currentPage === '5' ? {borderBottom: '3px solid black'} : {}}
                onClick={() => {setCurrentPage('5'); routeToPage('5')}}
              >
                <span className={'link-image'}><MailFilled /></span>{" "}
                <span className={'link'}>Contact Us</span>
            </span>*/}
            </div>
          </Header>
        )}
        <Content style={{minHeight: '91%'}}>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path={ROUTE_PATHS.HOME}>
              <Main />
            </Route>
            <Route exact path={ROUTE_PATHS.RSVP2}>
              <RSVP2 />
            </Route>
            <Route exact path={ROUTE_PATHS.RSVP}>
              <RSVP />
            </Route>
            <Route exact path={ROUTE_PATHS.ACCOMMODATIONS}>
              <Accommodations />
            </Route>
            <Route exact path={ROUTE_PATHS.DIRECTIONS}>
              <Directions />
            </Route>
            <Route exact path={ROUTE_PATHS.PHOTO_VIEWER}>
              <PhotoViewer />
            </Route>
            <Route exact path={ROUTE_PATHS.CONTACT_US}>
              <ContactUs />
            </Route>
            <Route exact path={ROUTE_PATHS.FAQ}>
              <FAQ />  
            </Route>
          </Switch>
        </Content>
        <Footer className={'footer'} style={{height: '3%'}}>
          <div>Ike {"&"} Joe</div>
        </Footer>
      </Layout>
      
    </>
  );
}

export default withRouter(App);
