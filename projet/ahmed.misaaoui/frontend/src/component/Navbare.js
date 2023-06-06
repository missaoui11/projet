import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { logout } from '../redux/Action/Action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'

function Navbare() {
const dispatch=useDispatch()
const { isAuthenticated }=useSelector(state=>state.Reducer)

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to="/" href="/">About Us</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/Avocat" href="Avocat">Avocat</Nav.Link>
          {isAuthenticated ?(
           <Nav.Link to="/Profile" href="Profile">Profile</Nav.Link>
          ) : (null)}           
          </Nav>
          <Nav>
            <Nav.Link to="/Signin" href="Signin">Sign in </Nav.Link>
            <Nav.Link to="/Signup" href="Signup">Sign up </Nav.Link>
            <Nav.Link onClick={()=>dispatch(logout())} to="/Signin" href="Signin">log out </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbare;