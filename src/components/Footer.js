import { Container, Row, Col } from "react-bootstrap";
import codestuart from "../assets/img/cs.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={codestuart} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>Thanks for stopping by!</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
