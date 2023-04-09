import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { DesignCard } from "./DesignCard";
import IMAGES from "../assets/img/images.js";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  // web
  const web_projects = [
    {
      title: "好口味包子",
      description: "2021年參與桃園楊梅職訓為期半年的網頁課程專題",
      imgUrl: IMAGES.webImg1,
      webUrl: "https://li71.github.io/BAO/",
    },
    {
      title: "單點影像Demo站",
      description: "2023年於山川久也設計公司切版的前端專案",
      imgUrl: IMAGES.webImg2,
      webUrl: "https://demo.nsdi.com.tw/2022-onerphoto/index.php",
    },
    {
      title: "2023 ASUS電競產品",
      description: "2023年於山川久也設計公司切版的前端專案，此案有做WCAG 2.2 AA無障礙送審",
      imgUrl: IMAGES.webImg3,
      webUrl: "https://www.asus.com/us/laptops/for-gaming/tuf-gaming/asus-tuf-gaming-f15-2023/",
    },
    {
      title: "富邦文教基金會活動案 Demo",
      description: "2023年於山川久也設計公司切版的前端專案",
      imgUrl: IMAGES.webImg4,
      webUrl: "https://demo.nsdi.com.tw/2023-fubon/myClassList.php",
    },
    {
      title: "Three js demo",
      description: "2023年於山川久也設計公司切版的前端專案(尚未完成)",
      imgUrl: IMAGES.webImg5,
      webUrl: "https://demo.nsdi.com.tw/2023-lollipop-bowl&plate/app/index.html#",
    },
    {
      title: "NUTC中科大E店平台",
      description: "2022年於國興資訊有限公司參與的案子，主要有使用到asp.net,angular.js,bootstrap4,mssql",
      imgUrl: IMAGES.webImg6,
      webUrl: "https://nutceshop.ksi.com.tw/NTCUST/Login/List",
    },
  ];

  // design
  const design_projects = [
    {
      title: "LOGO名片設計",
      description: "健身教練Jill，女性取向名片設計",
      imgUrl: IMAGES.designImg1,
    },
    {
      title: "LOGO設計",
      description: "KSF，2022年於國興資訊有限公司製作",
      imgUrl: IMAGES.designImg2,
    },
    {
      title: "LOGO設計",
      description: "享訂，2022年於國興資訊有限公司製作",
      imgUrl: IMAGES.designImg3,
    },
    {
      title: "登入頁面視覺設計",
      description: "衛福部毒防登入頁面，2022年於國興資訊有限公司製作",
      imgUrl: IMAGES.designImg4,
    },
    {
      title: "產品建模及3D渲染",
      description: "2019年於七色水晶框有限公司製作，以maya及Arnold做3D渲染，https://skfb.ly/opWGD",
      imgUrl: IMAGES.designImg5,
    },
    {
      title: "包裝盒設計及3D渲染",
      description: "2019年於七色水晶框有限公司製作，保健食品產盒，https://skfb.ly/6YDMT",
      imgUrl: IMAGES.designImg6,
    },
  ]

  // video
  const video_projects = [

    {
      title: "國興資訊 農委會計畫期中 形象影片",
      description: "2022年於國興資訊有限公司參與的案子",
      imgUrl: IMAGES.videoImg1,
      webUrl: "https://www.youtube.com/watch?v=CT-Yw4l5-rg",
    },
    {
      title: "國興資訊 工業局計畫期中 形象影片",
      description: "2022年於國興資訊有限公司參與的案子",
      imgUrl: IMAGES.videoImg2,
      webUrl: "https://www.youtube.com/watch?v=Otfot_uRQsE",
    },
    {
      title: "聯合線上 世界地球日短影音",
      description: "2020年於聯合線上有限公司參與的案子",
      imgUrl: IMAGES.videoImg3,
      webUrl: "https://www.youtube.com/watch?v=jy8SXPJgn0I",
    },
    {
      title: "聯合線上 宏亞國民巧克力的創新路",
      description: "2020年於聯合線上有限公司參與的案子",
      imgUrl: IMAGES.videoImg4,
      webUrl: "https://www.youtube.com/watch?v=9nMw44SGEfE",
    },
    {
      title: "聯合線上 台灣汽電轉動循環經濟",
      description: "2020年於聯合線上有限公司參與的案子",
      imgUrl: IMAGES.videoImg5,
      webUrl: "https://www.youtube.com/watch?v=pobWsepjZ7M",
    },
    {
      title: "聯合線上 橘世代在家健身教學影片",
      description: "2020年於聯合線上有限公司參與的案子",
      imgUrl: IMAGES.videoImg6,
      webUrl: "https://www.youtube.com/watch?v=PPxq0_PU9gQ",
    },
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>以下是過去經手過的一些案子，很感謝磨練的過程中有他們的出現。</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">WEB</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">DESIGN</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">VIDEO</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          web_projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          design_projects.map((project, index) => {
                            return (
                              <DesignCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          video_projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
