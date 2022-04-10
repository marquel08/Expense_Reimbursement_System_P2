import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './App.css';

function App() {
  return (
    <Container id="main-container" className="d-grid h-100" style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Form id="sign-in-form" className="text-center p-4 w-400">
        
        <h1 className="mb-3 fs-3 fw-normal">Please sign in</h1>
        <Form.Group className="mb-3" controlId="sign-in-username">
          <Form.Control type="text" size="lg" placeholder="Username" autoComplete="current-username" className="position-relative" />
        </Form.Group>
        <Form.Group controlId="sign-in-email-address">
          <Form.Control type="email" size="lg" placeholder="Email address" autoComplete="username" className="position-relative" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="sign-in-password">
          <Form.Control type="password" size="lg" placeholder="Password" autoComplete="current-password" className="position-relative" />
        </Form.Group>
        
        <div className="d-grid">
          <Button variant="primary" size="lg">Sign in</Button>
        </div>
        <p className="mt-5 text-muted">&copy; 2022-2023</p>
      </Form>
    </Container>
  );
}

export default App;
