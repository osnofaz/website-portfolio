import React from 'react';
import { SiAdobeaftereffects, SiAdobeillustrator, SiAdobephotoshop, SiAdobepremierepro } from 'react-icons/si';
import { v4 as uuidv4 } from 'uuid';
import WebpageBanner from '../images/BannerBoomBap.mp4';
import PostRaf from '../images/FacebookAds.mp4';
import RejuvemedStandImg from '../images/LojaRejuvemed.mp4';
import RejuvemedOutdoorImg from '../images/OutdoorRejuvemed.webp';
import RejuvemedStandImg2 from '../images/Stand2.webp';
import PostRaf2 from '../images/PostRafPhil.webp';
import PostNSImg from '../images/SocialMediaPosts.mp4';
import StandACLImg from '../images/StandACL.gif';
import StandACLImg2 from '../images/StandACL.jpeg';

const projects = [
  {
    id: uuidv4(),
    name: 'socialmediatitle',
    desc: 'socialmediadesc1',
    desc2: 'socialmediadesc2',
    img: PostNSImg,
    img2: PostNSImg,
    imgVideo: true,
    img2Video: true,
    url: "#!",
    tool1: <><SiAdobeillustrator /><SiAdobephotoshop /><SiAdobeaftereffects /></>
  },
  {
    id: uuidv4(),
    name: 'Stands',
    desc: 'standsdesc1',
    desc2: 'standsdesc2',
    img: StandACLImg2,
    img2: StandACLImg,
    url: "#!",
    tool1: <><SiAdobeillustrator /><SiAdobephotoshop /></>
  },
  {
    id: uuidv4(),
    name: 'Outdoors',
    desc: 'outdoorsdesc1',
    desc2: 'outdoorsdesc2',
    img: RejuvemedOutdoorImg,
    img2: RejuvemedOutdoorImg,
    url: "#!",
    tool1: <><SiAdobeillustrator /><SiAdobephotoshop /></>
  },
  {
    id: uuidv4(),
    name: "fbadstitle",
    desc: 'fbadsdesc1',
    desc2: 'fbadsdesc2',
    img: PostRaf2,
    img2: PostRaf,
    img2Video: true,
    url: 'https://youtu.be/KP3gumrZcP4',
    tool1: <><SiAdobeillustrator /><SiAdobephotoshop /><SiAdobeaftereffects /><SiAdobepremierepro /></>
  },
  {
    id: uuidv4(),
    name: 'storefronttitle',
    desc: "storefrontdesc1",
    desc2: 'storefrontdesc2',
    img: RejuvemedStandImg2,
    img2: RejuvemedStandImg,
    img2Video: true,
    url: "#!",
    tool1: <><SiAdobeillustrator /><SiAdobephotoshop /></>
  },
  {
    id: uuidv4(),
    name: 'webpagebannertitle',
    desc: "webpagebannerdesc1",
    desc2: 'webpagebannerdesc2',
    img: WebpageBanner,
    img2: WebpageBanner,
    imgVideo: true,
    img2Video: true,
    url: 'https://youtu.be/44QYEZYQrlo',
    tool1: <><SiAdobeillustrator /><SiAdobeaftereffects /><SiAdobepremierepro /></>
  },
];

export default projects;
