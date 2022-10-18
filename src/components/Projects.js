import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import website from "../assets/img/placeholder.gif";
import bookify from "../assets/img/preview.gif";
import rose from "../assets/img/Rose.jpg";
import tree from "../assets/img/treequiz.png";
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
  ];
  // Apps
  const apps = [
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
                  <h2>My Projects</h2>
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
                        <Nav.Link eventKey="second">Apps</Nav.Link>
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
                        <Row>
                          {apps.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis
                          quo.dffffffffffffffffffffffffffffffffff
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
