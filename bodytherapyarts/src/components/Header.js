import { Container, Navbar, NavbarBrand } from "reactstrap";
import btalogo from "../app/assets/img/bta-logo.jpg";

const Header = () => {
    return (
 <Navbar
        className="site-header"
        dark
        // color="primary"
        sticky="top"
        // expand="md"
      >
        <Container>
          <NavbarBrand href="/">
            <img
              src={btalogo}
              className="title-area"
              alt="Body Therapy Arts"
            />
          </NavbarBrand>
        </Container>
      </Navbar>
    );
}

export default Header;