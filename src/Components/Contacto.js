import ImgContact from "../assets/Contacto.jpg";
import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Contacto extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  handleSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    let templateParams = {
      from_name: name,
      to_name: "All Service",
      message: `Consulta: ${message}, contactar de ser necesario al numero ${subject} o al siguiente correo: ${email}`,
    };
    emailjs.send(
      "pato",
      "template_X1rrM9UH",
      templateParams,
      "user_8N5VgAZ7O6ZB0VdWR7YDX"
    );
    this.resetForm();
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };
  render() {
    return (
      <>
        <div className="container mb-5  ">
          <div className="row no-gutters d_flex align-items-center  ">
            <div className="col-sm-12 col-md-6 text-center ">
              <img src={ImgContact} className="w-100 rounded"></img>
            </div>
            <div className="col-sm-12 col-md-6 p-5 w-100 rounded">
              <h2 className="p-heading1 text-center textgrey p-1">
                CONTÁCTANOS
              </h2>
              <Form
                onSubmit={this.handleSubmit.bind(this)}
                className="container"
              >
                <FormGroup controlId="formBasicEmail">
                  <Label className="text-label mx-4 ">Email</Label>

                  <Input
                    type="email"
                    name="email"
                    value={this.state.email}
                    className="text-primary"
                    onChange={this.handleChange.bind(this, "email")}
                    placeholder="Ingresa tu correo"
                    className="textgrey back rounded-pill"
                  />
                </FormGroup>
                <FormGroup controlId="formBasicName">
                  <Label className="text-label mx-4">Nombres y Apellidos</Label>
                  <Input
                    type="text"
                    name="name"
                    value={this.state.name}
                    className="text-primary"
                    onChange={this.handleChange.bind(this, "name")}
                    placeholder="Ingresa nombres y apellidos"
                    className="textgrey back rounded-pill"
                  />
                </FormGroup>
                <FormGroup controlId="formBasicSubject">
                  <Label className="text-label mx-4">
                    Número de telefónico
                  </Label>
                  <Input
                    type="text"
                    name="subject"
                    className="text-primary"
                    value={this.state.subject}
                    onChange={this.handleChange.bind(this, "subject")}
                    placeholder="Ingresa tu N°"
                    className="textgrey back rounded-pill"
                  />
                </FormGroup>
                <FormGroup controlId="formBasicMessage">
                  <Label className="text-label mx-4">Consulta</Label>
                  <Input
                    type="textarea"
                    name="message"
                    className="text-primary"
                    value={this.state.message}
                    onChange={this.handleChange.bind(this, "message")}
                    placeholder="Tu consulta"
                    className="textgrey back rounded"
                  />
                </FormGroup>
                <div className="text-center">
                  <Button variant="primary" type="submit">
                    Enviar
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Contacto;
