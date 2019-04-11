import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import styled, {css} from 'styled-components';


const NavbarLink = styled(NavLink)`
  display: block;
  padding: 15px 20px;
  color: #FFF;
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
  text-decoration: none;
  &:hover, &.active{
    background-color: #AD0027;
    border-top: 2px solid #000;
    border-bottom: 2px solid #000;
  }
  
  
`;

const LanguageLI = styled.div`
  color: #FFF;
  position: absolute;
  bottom: 20px;
  text-align: center;
  width: 100%;
  padding: 20px;
  text-transform: uppercase;
  a {
    cursor: pointer;
    color: #AAA
    margin: 5px;
    
    ${props => props.success && css`
      color: #00B383;
    `};
    
    &.active{
      color: #FFF
    }

    &:hover{
      color: #FFF
    }
  }
`;

const Logo = styled.div`
  padding: 20px;
  color: #FFF;
  letter-spacing: 30px;
  font-weight: bold;
  border: 1px solid #FFF;
  margin: 20px;
  text-align: center;
  font-size: 15px;
  &:before{
    content: 'LOGO'
  }
 
`;

const UL = styled.ul`
  :hover a.active{
    background-color:#000;
  }
  
  :hover a.active:hover{
    background-color:#AD0027;
  }
`;

export class NavBar extends Component {
  render() {
    return <div style={{position: 'absolute', left: 0, top: 0, bottom: 0, background: '#000', width: '250px'}}>
      <Logo/>
      <UL style={{margin: 0, padding: 0}}>
        <li>
          <NavbarLink exact to="/">Home</NavbarLink>
        </li>
        <li>
          <NavbarLink to="/products">Products</NavbarLink>
        </li>
        <li>
          <NavbarLink to="/profile">Profile</NavbarLink>
        </li>
        <li>
          <NavbarLink to="/contact">Contact Us</NavbarLink>
        </li>
      </UL>
      <LanguageLI>
        <div style={{padding: '10px', fontSize: '12px', fontWeight: 'bolder', letterSpacing: '5px'}}>LANGUAGE
        </div>
        <a className={this.props.locale === 'en' ? 'active' : ''} onClick={() => {
          this.props.handleLanguage('en');
        }}>English</a>
        |
        <a className={this.props.locale === 'zh' ? 'active' : ''} onClick={() => {
          this.props.handleLanguage('zh');
        }}>Chinese</a>
      </LanguageLI>
    </div>
  }
}
