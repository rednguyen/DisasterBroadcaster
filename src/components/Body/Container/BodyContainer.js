import React from 'react'
import Body from '../Style'
import Icon from '../../Icons'

export default function BodyContainer() {
    return (
    <Body>
        <Body.Wrapper>
            <Body.Row>
                <Body.Column>
                <Body.Title>About Us</Body.Title>
                    <Body.Link href="#">Story</Body.Link>
                    <Body.Link href="#">Clients</Body.Link>
                    <Body.Link href="#">Testimonials</Body.Link>
                </Body.Column>
                <Body.Column>
                <Body.Title>Services</Body.Title>
                    <Body.Link href="#">Marketing</Body.Link>
                    <Body.Link href="#">Consulting</Body.Link>
                    <Body.Link href="#">Development</Body.Link>
                    <Body.Link href="#">Design</Body.Link>
                </Body.Column>
                <Body.Column>
                <Body.Title>Social</Body.Title>
                    <Body.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Body.Link>
                    <Body.Link href="#"><Icon className="fab fa-instagram" />Instagram</Body.Link>
                    <Body.Link href="#"><Icon className="fab fa-youtube" />Youtube</Body.Link>
                    <Body.Link href="#"><Icon className="fab fa-twitter" />Twitter</Body.Link>
                </Body.Column>
            </Body.Row>
        </Body.Wrapper>
        
        <Body.Wrapper>
            <Body.Link >___________________________________________________________________________</Body.Link>
            <Body.Link >Copyright &copy;{new Date().getFullYear()} DISASTER BROADCASTER</Body.Link>
        </Body.Wrapper>
        
        </Body>
    )
}