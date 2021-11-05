import styled,{keyframes} from "styled-components";

const ContainerAnimation = keyframes`
    0%{
        height: 100vh;
        background: #1A1A1A;
        border-radius: 0%;
    }
    30%{
        background: transparent;
    }
    90%{
        background: transparent;
        height: 15vh;
      border-radius: 100%;
    }
    100%{
        background: transparent;
        height: 15vh;
      border-radius: 100%;
    }
`

export const HeaderContainer = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      z-index: 10;
      
      
      position: absolute;
      top: 0;
      
      width: 100%;
      height: 100vh;
      
      background: #1A1A1A;
      
      transform: translateX(-50%);
      margin-left:50%;
      
      animation: 1s ${ContainerAnimation} ease-out forwards 2.5s;
    
  
    `;

const BigImageAnimation = keyframes`
    0%{
        margin-top: 10vh;
        width: 60vh;
        opacity: 0;
        }
    45%{
        transform: scale(1.3);
        opacity: 1;
    }
    60%{
        transform: scale(1);
    }
        
    80%{
        margin-top: 10vh;
        width: 60vh;
    }
    100%{
        margin-top: 0vh;
        width: 30vh;
        transform: scale(1);
        opacity: 1;
    }
`

export const BigImage = styled.img`

      transform-origin: bottom;
      transform: scale(0);
      opacity: 0;
      width: 60vh;
      margin-top: 10vh;
      
      animation: ${BigImageAnimation} 3s forwards;
      
      transition: 500ms;
      -webkit-transition: 500ms;
      -moz-transition: 500ms;
      -o-transition: 500ms;
    `

const SmallImageAnimation = keyframes`
    0%{
        transform: rotateX(90deg);
        opacity: 0;
       }
    10%{
        transform: rotateX(0deg);
        opacity: 1;
        width: 40vh;
    }
    100%{
        width: 18vh;
        opacity: 1;
        transform: rotateX(0deg);
    }
`

export const SmallImage = styled.img`
      transform-origin: center;
      transform: rotateX(90deg);
      width: 40vh;
      opacity: 0;
      
      animation: ${SmallImageAnimation} 2s forwards 1.5s;
      
      transition: 500ms;
      -webkit-transition: 500ms;
      -moz-transition: 500ms;
      -o-transition: 500ms;
    `