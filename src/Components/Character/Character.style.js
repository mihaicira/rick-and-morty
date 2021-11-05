import styled, {keyframes} from "styled-components";
import SideInfoLabel from "./SideInfoLabel";
import {LoadingAnimationKeyframes} from "../Search/SearchResults.style";

export const CharacterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0vh 0 10vh 0;
    gap: 10vh;
    
    .loading-anim{
        animation: 3s ${LoadingAnimationKeyframes} linear infinite;
    }
    
    #page-not-found{
        position: absolute;
        left: 0;
        top: 20vh;
    }
`

export const BackButton = styled.button`
    background: transparent;
    border: none;
    z-index: 20;
    outline: none;
    cursor: pointer;
    position: absolute;
    top: 30px;
    left: 30px;
    overflow: hidden;
     
    &:hover #back-button-arrow{
        transform: translateX(-100%);
    } 
    
    & #back-button-arrow{
        transition: 500ms;
        -webkit-transition: 500ms;
        -moz-transition: 500ms;
        -o-transition: 500ms;
        
        
    }
`

export const MainInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 300px;
    
    color: white;
    
    
    &>h2{
        font-size: 2rem;
        color: #BEDD42;
    }
    
    &>div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #3D3636;
        border-radius: 36px;
        padding: 2.5vh;
        
        & img{
            width: 60%;
            border-radius: 11px;
        }
        
        & svg{
        align-self: flex-end;
        }
        
        & svg:nth-of-type(2){
            transition: 500ms;
            -webkit-transition: 500ms;
            -moz-transition: 500ms;
            -o-transition: 500ms;
            background: transparent;
            border-radius: 100%;
            
            cursor: pointer;
            
            &:active{
            background: white;
            }
        }
    }
`

export const SideInfo = styled.div`
    background: #3D3636;
    border-radius: 36px;
    min-width: 50%;
    max-width: 80%;
    padding: 20px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5vh; 
    
    &>span{
        font-size: 1.1rem;
        font-weight: bold;
         color: #E3802E;
         text-align: center;
         width: 100%;
    }
    
    & #episodes-container{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
        width: 50vw;
        transform: translateX(-50%);
        margin-left: 50%;
        
        
        & p{
            background: #1A1A1A;
            width: 200px;
            padding: 1vh;
            border-radius: 19px;
            text-align: center;
            color: #BEDD42;
            font-size: 1rem;
            font-weight: bold;
        }
    }
   
`

export const Label = styled(SideInfoLabel)`
    display: flex;
    justify-content: left;
    gap: 4vh;
    font-size: 1.1rem;
    font-weight: bold;
    
    width: max-content;
    & span{
       overflow-wrap: break-word;
   }
    
    & span:nth-of-type(1){
        color: #E3802E;
    }
    
    & span:nth-of-type(2){
        color: #BEDD42;
        justify-self: center;
        max-width: 60vw;
    }
`