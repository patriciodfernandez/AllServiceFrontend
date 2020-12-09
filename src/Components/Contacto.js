import ImgContact from "../assets/Contacto.jpg";
import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class ContactForm extends Component {
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
        {/* <div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1780.3604091038494!2d-65.23453723906039!3d-26.817016737917598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c59e87a2f03%3A0xc7fd8a5ef5178b03!2sPcia%20de%20Corrientes%202514%2C%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1607451661596!5m2!1ses!2sar" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div> */}
      </>
    );
  }
}
export default ContactForm;
