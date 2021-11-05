import styled,{keyframes} from "styled-components";

import Character from "./Character";


export const LoadingAnimationKeyframes = keyframes`
    to{
        transform: rotateZ(360deg);
    }
`

export const SearchResults = styled.div`
    width: 90%;
   
    
    & h4{
        color: #BEDD42;
        margin-top: 10vh;
        font-size: 1rem;
    }
    
    .loading-anim{
        animation: 3s ${LoadingAnimationKeyframes} linear infinite;
    }

    & .page-controllers {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-basis: 100%;
    }
    
    & .page-controllers p{
        font-size: 1rem;
        font-weight: bold;
        color: #BEDD42;
    }
    
    
    & .page-controllers button{
        background: transparent;
        outline: none;
        border: none;
        cursor: pointer;
        
        transition: 500ms;
        -webkit-transition: 500ms;
        -moz-transition: 500ms;
        -o-transition: 500ms;
        
        &:hover{
            transform: scale(.9);
        }
        
        &:disabled{
            pointer-events: none;
            opacity: .25;
        }
    }
    
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
    flex-wrap: wrap;
    gap: 15px;
`

export const CharacterCard = styled(Character)`
    width: 240px;
    padding: 2vh 0 1vh 0;
    border-radius: 11px;
    background: #3D3636;
    
    & a{
        text-decoration: none;
        transition: 500ms;
        -webkit-transition: 500ms;
        -moz-transition: 500ms;
        -o-transition: 500ms;
        &:hover{
            text-shadow: 3px 2px 3px rgba(255,255,255,.2);
        }
    }
    
    & img{
        width: 80%;
        margin-left: 10%;
        border-radius: 11px;
        border: 
    }
    
    & h3{
        text-align: center;
        color: #E3802E;
    }
    
    & div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px 0 10px;
        
        & div{
            color: red;
            display: flex;
            align-items: center;
            gap: 10px;
            & p{
            transform: translateY(15%);
            color: #BEDD42;
            }
        }
        
        .share-svg{
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

