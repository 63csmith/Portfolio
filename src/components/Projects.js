import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import website from "../assets/img/placeholder.gif";
import bookify from "../assets/img/preview.gif";
import rose from "../assets/img/Rose.png";
import tree from "../assets/img/treequiz.png";
import shopwizzard from "../assets/img/shopwizzard.png";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  // Websites
  const projects = [
    {
      title: "Bookify",
      description: "FullStack App that provides new book recommendations!",
      imgUrl: bookify,
      link: "https://bookify-project1.herokuapp.com/",
    },
    {
      title: "Lenroa Rose Jewelry",
      description: "Shopify Store to sell handmade jewelry.",
      imgUrl: rose,
      link: "https://lenorarosejewelry.myshopify.com/",
    },
    {
      title: "ShopWizzard",
      description: "90's themed game loot store.",
      imgUrl: shopwizzard,
      link: "http://shop-wizard.herokuapp.com/",
    },
    {
      title: "Tree Quiz App",
      description: "It's a quiz about trees.",
      imgUrl: tree,
      link: "https://63csmith.github.io/Tree-quiz/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "" : ""}>
                  <h2>My Content</h2>
                  <p> </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Websites</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Bio</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Youtube</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          Hi, <br></br> First, I want to thank you personally
                          for stopping by my portfolio. I have come a long way
                          from making HTML docs in my code editor. I started my
                          journey of becoming a software developer a few short
                          months before I am writing this now, in April of 2022.
                          I was ready for something new and prepared to invest
                          in myself!<br></br> After quitting my Job at Elk Creek
                          Fire department, where I had spent three years
                          fighting wildfires, it was safe to say I was lost. I
                          didn't know my next move. So it was time to do some
                          self-reflection. What do I love about this world? What
                          drives my excitement?........... While catching a ride
                          on a plane into the middle of the Frank Church
                          Wilderness of No Return was pretty exciting. I don't
                          think it was my calling. I want to see the whole world
                          and travel. So I hopped on Google and searched away
                          about what remote jobs I could find interesting. After
                          a couple of days, I started to come back to one common
                          theme. I want to be a creator who can design beautiful
                          applications for people. To help people connect and be
                          involved in the world around them.<br></br> So now I
                          code.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane className="youtube" eventKey="third">
                        <p>
                          Standby for some coding tutorial videos on my YouTube
                          channel!
                          <br></br>
                          <a
                            target="_blank"
                            href={
                              "https://www.youtube.com/channel/UCUGmii3egRMxDKSsZwJUbvQ"
                            }
                          >
                            YouTube
                          </a>
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
