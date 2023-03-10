import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import LeaftNav from '../LeftNav/LeaftNav';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handlerLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand> <Link to='/'>Today-News</Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All News</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">

                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button onClick={handlerLogOut}>Log Out</Button>

                                    </>
                                    :
                                    <>
                                        <Button className='me-4'> <Link className='text-white ' to='/login'>Login</Link></Button>
                                        <Button><Link className='text-white' to='/signup'>SignUp</Link></Button>

                                    </>
                            }

                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {user?.photoURL ?
                                <Image style={{ height: '40px' }} roundedCircle src={user?.photoURL}></Image>
                                :
                                <FaUser></FaUser>
                            }
                        </Nav.Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeaftNav></LeaftNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;