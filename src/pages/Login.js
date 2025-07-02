import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Form, Button, Image, Alert } from "react-bootstrap";
import * as Icon from "react-feather";

// Logo image file path
import Logo from "../assets/img/logo.png";

class Login extends React.Component {
  state = {
    usuario: "",
    password: "",
    errorMessage: null,
  };

  onLoginHandler = async (e) => {
    e.preventDefault();
    const { usuario, password } = this.state;
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, password }),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.mensaje || "Login failed");
      }

      const data = await response.json();
      localStorage.setItem("usuario", data.usuario);
      localStorage.setItem("nombreCompleto", data.nombreCompleto);
      localStorage.setItem("empresa", data.empresa);
      localStorage.setItem(
        "requiereCambioPassword",
        data.requiereCambioPassword
      );

      this.props.history.push("/dashboard/");
    } catch (err) {
      this.setState({ errorMessage: err.message || "Login failed" });
    }
  };

  render() {
    return (
      <div className="auth-main-content auth-bg-image">
        <div className="d-table">
          <div className="d-tablecell">
            <div className="auth-box">
              <Row className="align-items-center">
                <Col md={6}>
                  <div className="form-left-content">
                    <div className="auth-logo">
                      <Image src={Logo} alt="Logo" />
                    </div>

                    <div className="login-links">
                      <Link to="#" className="fb">
                        <Icon.Facebook className="icon" />
                        Sign Up with Facebook
                      </Link>
                      <Link to="#" className="twi">
                        <Icon.Twitter className="icon" />
                        Sign Up with Twitter
                      </Link>
                      <Link to="#" className="ema">
                        <Icon.Mail className="icon" />
                        Sign Up with Email
                      </Link>
                      <Link to="#" className="linkd">
                        <Icon.Linkedin className="icon" />
                        Sign Up with Linkedin
                      </Link>
                    </div>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="form-content">
                    <h1 className="heading">Log In</h1>

                    <Form onSubmit={this.onLoginHandler}>
                      <Form.Group className="mb-3">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control
                          type="text"
                          value={this.state.usuario}
                          onChange={(e) => this.setState({ usuario: e.target.value })}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          value={this.state.password}
                          onChange={(e) => this.setState({ password: e.target.value })}
                        />
                      </Form.Group>

                      {this.state.errorMessage && (
                        <Alert variant="danger">{this.state.errorMessage}</Alert>
                      )}

                      <div className="text-center">
                        <Button variant="primary" type="submit">
                          Log In
                        </Button>

                        <Link to="/forgot-password/" className="fp-link">
                          Forgot Password?
                        </Link>
                      </div>
                    </Form>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
