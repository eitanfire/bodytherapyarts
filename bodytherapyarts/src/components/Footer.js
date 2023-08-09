import {Container, Row, Col} from "reactstrap";
import year from "../utils/currentYear.js";

const Footer = () => {
    return (
      <Container 
    //   className="bt-site-footer"
      >
        <Row className="site-footer">
            {/* <Col> */}
              <span 
            //   id="boomtime_nap_sfoote"
              >
                Copyright &#x000A9;&nbsp;{year}&nbsp;All Rights Reserved
                |&nbsp;Body Therapy Arts
              </span>
            {/* </Col> */}
        </Row>
      </Container>
    );
}

export default Footer;