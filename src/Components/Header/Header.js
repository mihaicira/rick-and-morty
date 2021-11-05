import rmlogo from '../../assets/rmlogo.png'
import rmchars from '../../assets/characters.png'
import React from 'react';
import {HeaderContainer,BigImage,SmallImage} from './Header.style'


function Header(){

    return <HeaderContainer>
            <BigImage src={rmlogo}/>
            <SmallImage src={rmchars}/>
        </HeaderContainer>
}

export default Header;