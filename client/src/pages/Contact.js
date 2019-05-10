import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Button from '../components/Button';
import Section from '../components/Section';
import Form from '../components/Form';
import Input from '../components/Input';
import Label from '../components/Label';
import API from '../utils/API';

class Contact extends Component {
    state = {
        subject: "",
        name: "",
        email: "",
        message: "",
    };

    _handleFormSubmit = event => {
        event.preventDefault();
        var data;
        if (this.state.subject !== "" && this.state.email !== "" && this.state.message !== "" && this.state.name !== "") {
            data = this.state;
        };
        if (!data) {
            alert("Please enter a valid email address and include a subject line and a message.")
        } else {
            API.email(data)
            .then(response => console.log(response))
            .catch(err => console.log(err));    
        }
    };

    _handleChange = async(event) => {
        const { name, value } = event.target;
        await this.setState({ [name]: value });
    };

    render() {
        return(
            <div className="contact">
                <Navbar id="contact">
                    <Header className="h1" style={{whiteSpace: "nowrap"}}>
                        <Button href="/" id="index">
                            Christopher O'Connell
                        </Button>
                    </Header>
                    <div className="btn btn-group">
                        <Header className="h3">
                            <Button href="/about" id="about">
                                About
                            </Button>
                        </Header>
                        <Header className="h3">
                            <Button href="/portfolio" id="portfolio">
                                Portfolio
                            </Button>
                        </Header>
                        <Header className="h3">
                            <Button href="https://bit.ly/2UHhypN" id="resume">
                                Resume
                            </Button>
                        </Header>
                    </div>
                </Navbar>
                <Section id="contact-section">
                    <Header className="h2" style={{textDecoration: 'underline'}}>Contact</Header>
                    <Form className="contact-form">
                        <div className="form-group">
                            <Label className="label" htmlFor="email" children="Email"/><br/>
                            <Input className="text-input" type="email" name="email" placeholder="john.smith@email.com" handleChange={this._handleChange}/>
                        </div>
                        <div className="form-group">
                            <Label className="label" htmlFor="name" children="Name"/><br/>
                            <Input className="text-input" type="text" name="name" placeholder="John Smith" handleChange={this._handleChange}/>
                        </div>
                        <div className="form-group">
                            <Label className="label" htmlFor="subject" children="Subject"/><br/>
                            <Input className="text-input" type="text" name="subject" placeholder="How I learned developer skills in six months!" handleChange={this._handleChange}/>
                        </div>
                        <div className="form-group">
                            <Label className="label" htmlFor="message" children="Message"/><br/>
                            <Input className="text-input" type="textarea" name="message" rows="10" placeholder="I learned my skills as a web developer through a coding bootcamp at UCF. There I learned HTML, CSS, JavaScript, and many other technologies." handleChange={this._handleChange}/>
                        </div>
                        <div className="form-group" id="form-control">
                            <Button type="submit" clickEvent={this._handleFormSubmit}>Submit</Button>
                        </div>
                    </Form>
                </Section>
            </div>
        );
    };
};

export default Contact;