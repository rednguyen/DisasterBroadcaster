import React from 'react'
import Footer from '../Style'

export default function FooterContainer() {
    return (
    <Footer>
        <Footer.Wrapper>
            <Footer.Link ></Footer.Link>
            <Footer.Link >Copyright &copy;{new Date().getFullYear()} DISASTER BROADCASTER</Footer.Link>
        </Footer.Wrapper>
        
        </Footer>
    )
}