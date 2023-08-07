import './App.css';
import { Container, Navbar, NavbarBrand } from "reactstrap";
import btalogo from "./app/assets/img/bta-logo.jpg";
function App() {
  return (
    <div className="App">
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
              alt="Body Therapy Arts l"
            />
          </NavbarBrand>
        </Container>
      </Navbar>{" "}
    </div>
  );
}

export default App;
