import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import woodcutter from "../assets/img/woodcutter.gif";
import rocket from "../assets/img/rocket.gif";
import punch from "../assets/img/punch.gif";
import dj from "../assets/img/dj.gif";
import food from "../assets/img/19-parenting-healthyeating-superJumbo.gif";
import ux from "../assets/img/march7agif.gif";
import click from "../assets/img/200.gif";
import website from "../assets/img/placeholder.gif";
import frontend from "../assets/img/frontend.gif";
import cat from "../assets/img/cat.gif";
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Here are some of my top highlighted skills fot you to check out!
                <br></br>
              </p>

              <Carousel
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2500}
                responsive={responsive}
                className="owl-carousel owl-theme skill-slider"
                arrows={false}
              >
                <div className="item">
                  <img src={food} alt="Image" />
                  <h5>Snacking</h5>
                </div>
                <div className="item">
                  <img src={punch} alt="Image" />
                  <h5>Database Development</h5>
                </div>
                <div className="item">
                  <img src={dj} alt="Image" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={frontend} alt="Image" />
                  <h5>FrontEnd Design</h5>
                </div>
                <div className="item">
                  <img src={click} alt="Image" />
                  <h5>AWS Cloud Practitioner</h5>
                </div>
                <div className="item">
                  <img src={rocket} alt="Image" />
                  <h5>MERN Stack</h5>
                </div>
                <div className="item">
                  <img src={woodcutter} alt="Image" />
                  <h5>Communication</h5>
                </div>
                <div className="item">
                  <img src={ux} alt="Image" />
                  <h5>UX/UI Design</h5>
                </div>
                <div className="item">
                  <img src={website} alt="Image" />
                  <h5>React.JS</h5>
                </div>
                <div className="item">
                  <img src={cat} alt="Image" />
                  <h5>GitHub</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
