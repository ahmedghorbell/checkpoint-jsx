import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
    return (
    <>
    <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Profile</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Projects</Nav.Link>
            <Nav.Link href="#pricing">CV</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
    </>
);
}

export default ColorSchemesExample;