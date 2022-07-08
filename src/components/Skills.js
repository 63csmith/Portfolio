import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import woodcutter from "../assets/img/woodcutter.gif";
import rocket from "../assets/img/rocket.gif"
import punch from "../assets/img/punch.gif"
import dj from "../assets/img/dj.gif"
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={woodcutter} alt="Image" />
                                <h5>Snacking</h5>
                            </div>
                            <div className="item">
                                <img src={punch} alt="Image" />
                                <h5>Backend Development</h5>
                            </div>
                            <div className="item">
                                <img src={dj} alt="Image" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={rocket} alt="Image" />
                                <h5>FrontEnd Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
