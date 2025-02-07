import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import Nav from 'react-bootstrap/Nav';
import { IoIosSearch } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Navbars() {

  const carted = useSelector((state) => state.cart.carts);
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary fixed-top">
        <Container fluid="md">
          <Navbar.Brand href="#"><img src='/logo/logo(4).png' alt='Logo' className='logo-img'></img></Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" className='order-last' />
          <Navbar.Collapse id="navbarScroll" className='order-last order-lg-2'>
            <Nav className='offset-xl-9 offset-lg-8 toggle-items'>

              {/* search button  */}

              <Nav className='d-flex search-button'>
                <Link to='/searchfood' as={NavLink} className='d-flex'>
                  <div className="icon-btn"><IoIosSearch size={30} className='icon-color' /></div>
                  <div className="search">Search</div>
                </Link>
              </Nav>

              {/* login and signup  */}

              <Nav href="#deets" className='enter-info position-relative w-20'>
                <div className="person-icon"><IoPersonCircleOutline size={30} className='icon-color' /></div>
                <div className="information-login position-absolute">
                  {/* login  */}
                  <Nav.Link href=''>
                    <div className="log-in">
                      Log-In
                    </div>
                  </Nav.Link>
                  {/* sign up  */}
                  <Nav.Link href=''>
                    <div className="sign-up">
                      Sign-Up
                    </div>
                  </Nav.Link>
                </div>
              </Nav>
            </Nav>
          </Navbar.Collapse>

          {/* cart  */}
          <Nav className='offset-2 offset-lg-0 offset-sm-5 order-lg-last'>
            <Link to="/savedfood" as={NavLink}>
              <div className="cart">
                <BsCart className='icon-color' size={30} />
                <p className='no-items'>{carted.length}</p>
              </div>
            </Link>
          </Nav>
        </Container>
      </Navbar>



    </>
  );
}

export default Navbars;