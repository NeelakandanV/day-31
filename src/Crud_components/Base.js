import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChildren } from '@fortawesome/free-solid-svg-icons';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { children } from 'react';

export default function BaseApp({title,children}){
    return(
        <div className="MainParent">
           <div className="MainTitle">
            <h2>ICY School(ICSE),Chennai.</h2>
           </div>


           <div className="NavBars">
            <Navbar key={false} expand={false} className="bg-body-tertiary mb-3">
              <Container fluid>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
                <p className='PageTitle'>{title}</p>
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-false`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-false`}
                  placement="start"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                      Teacher-Student Management System
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="/"><FontAwesomeIcon icon={faSchool} />{" "}Home</Nav.Link>

                      <NavDropdown
                        title="Students"
                        id={`offcanvasNavbarDropdown-expand-false`}
                      >
                        <NavDropdown.Item href="/StudentHome"><FontAwesomeIcon icon={faChildren} />{" "}Student Data</NavDropdown.Item>
                        <NavDropdown.Item href="/CreateStudent"><FontAwesomeIcon icon={faCirclePlus} style={{color: "#4c1fd1",}} />{" "}Create Student</NavDropdown.Item>
                      </NavDropdown>

                      <NavDropdown
                        title="Teachers"
                        id={`offcanvasNavbarDropdown-expand-false`}
                      >
                        <NavDropdown.Item href="/TeacherHome"><FontAwesomeIcon icon={faChalkboardUser} />{" "}Teacher Data</NavDropdown.Item>
                        <NavDropdown.Item href="/CreateTeacher"><FontAwesomeIcon icon={faCirclePlus} style={{color: "#4c1fd1",}} />{" "}Create Teacher</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
           </div>


           <div className="Content">
            {children}
           </div>

           <div className='Footer'>
                <div className='FootCent'>
                    <p>ICY Group of Educational Institutions</p>
                    <p>Chennai</p>
                    <p>ICY@allRightsReserved</p>
                </div>
                <div className='FootRight'>
                    <p>Contact Us</p>
                    <p>Telephone : <a href="tel:044-****545">044-****545</a></p>
                    <p>Email : <a href="mailto : icy@gmail.com">icy@gmail.com</a></p>
                    <p>Fax : <a href="#">044-****531</a></p>
                </div>
           </div>
        </div>
    );
};