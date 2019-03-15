import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Button from '../components/Button';
import Section from '../components/Section';
import Form from '../components/Form';
import Input from '../components/Input';
import Label from '../components/Label';

class Contact extends Component {
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
                    </div>
                </Navbar>
                <Section id="contact-section">
                    <Header className="h2" style={{textDecoration: 'underline'}}>Contact</Header>
                    <Form className="contact-form" action="" method="">
                        <div className="form-group">
                            <Label className="label" htmlFor="name" children="Name"/><br/>
                            <Input className="text-input" type="text" name="name" placeholder="Firstname Lastname"/>
                        </div>
                        <div className="form-group">
                            <Label className="label" htmlFor="email" children="Email"/><br/>
                            <Input className="text-input" type="email" name="email" placeholder="email@email-address.com"/>
                        </div>
                        <div className="form-group">
                            <Label className="label" htmlFor="message" children="Message"/><br/>
                            <Input className="text-input" type="textarea" name="message" rows="10" placeholder="Here is some example text."/>
                        </div>
                        <div className="form-group" id="form-control">
                            <Button type="submit" clickEvent={() => {}}>Submit</Button>
                        </div>
                    </Form>
                </Section>
            </div>
        );
    };
};

export default Contact;