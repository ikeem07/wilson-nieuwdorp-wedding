import { FC, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Row, Col } from 'antd';
import { Helmet } from 'react-helmet';
import 'pro-gallery/dist/statics/main.css';

const proGallery = require('pro-gallery');
const { ProGallery } = proGallery;

interface ProGalleryItem {
  itemId: string,
  html: string,
  metadata: {
    type: string,
    height: number,
    width: number,
    title: string,
    description: string,
    focalPoint: [number, number],

  }
}

const PhotoViewer: FC<RouteComponentProps> = (props) => {
  const [photoItems, setPhotoItems] = useState<ProGalleryItem[]>([]);

  const options = {
    galleryLauout: -1,
    imageMargin: 3,
    hoveringBehaviour: 'DISAPPEARS',
    imageLoadingMode: 'MAIN_COLOR',
    scrollAnimation: 'SLIDE_UP',
    overlayAnimation: 'SLIDE_UP',
    imageHoverAnimation: 'SHRINK',
  }
  const container = {
    width: window.innerWidth,
    height: window.innerHeight,
  }
  const scrollingElement = window;
  
  useEffect(() => {
    buildPhotoArray();
  }, [])

  const eventsListener = (eventName: any, eventData: any) => console.log({eventName, eventData});
//11
  const buildPhotoArray = () => {
    var proGalleryItemArray: ProGalleryItem[] = [];

    for (let i = 1; i < 19; i++) {
      var proGalleryItem = {
        itemId: 'engagementPhoto' + i.toString().padStart(2, '0'),
        html: '<img style="height: 200px; width: 300px; object-fit: cover" src="/images/engagementPhoto' + i.toString().padStart(2, '0') + '.jpg" alt="">' + 
              '</img>',
        metadata: {
          type: 'text',
          height: 200,
          width: 300,
          title: 'title' + i.toString(),
          description: 'description',
          focalPoint: [0, 0]
        }
      } as ProGalleryItem

      proGalleryItemArray.push(proGalleryItem);
    }
    setPhotoItems(proGalleryItemArray);
  }
  
  return (
    <>
      <Helmet>
        <title>Photos</title>
      </Helmet>
      <Row>
        <Col offset={6} span={12}>
          <div style={{fontSize: 'xxx-large', textAlign: 'center', fontFamily: 'Great Vibes'}}>Engagement Photos</div>
        </Col>
      </Row>
      <Row>
        <ProGallery
          items={photoItems}
          options={options}
          container={container}
          eventsListener={eventsListener}
          scrollingElement={scrollingElement}
        />
      </Row>
    </>
  )
}

export default withRouter(PhotoViewer);