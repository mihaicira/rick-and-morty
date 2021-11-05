import styled,{keyframes} from "styled-components";


export const SearchContainer = styled.div`
    width: 80%;
    margin-left: 50%;
    margin-top: 10vh;
    transform: translateX(-50%);
  
  
    margin-bottom: 10vh;
    
    display: flex;  
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3vh;
    
`

export const SearchControls = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    
    width: 90%;
    
    position: relative;
    
    gap: 10vw;
    
    //INPUT CSS @@@@@@@@@
        & input{
            flex-grow: 1;
            padding: 0 2vh 0 9vh;
            
            background: #3D3636;
            height: 5.5vh;
            
            font-weight: 900;
            font-size: 1rem;
            color: #1A1A1A;
            
            border-radius: 36px;
            
            outline: none;
            border: none;
            
            transition: 1000ms;
            -webkit-transition: 1000ms;
            -moz-transition: 1000ms;
            -o-transition: 1000ms;
        
            &:focus{
                box-shadow: 0px 4px 10px -5px #FFFFFF;
            }
        
        
            &::placeholder{
                color: #1A1A1A;
            }
        }
    
    //SVG CSS @@@@@@@@@
        &>svg{
        position: absolute;
        left: 3vh;
        top: 0px;
        transform: translateY(25%);
        }
`

export const DropdownMenu = styled.div`
        background: #3D3636;
        height: 5.5vh;
        border-radius: 36px;
        width: 200px;
        position: relative;
        
        &:hover #dropdown-options{
            transform: rotateX(0deg)  translateY(0px);
        }
        
       
       //top dropdown brick
            & div:nth-of-type(1){
                width: 81%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 2vh 0 2vh;
                cursor: pointer;
           
                &>svg{
                    right: 2vh;
                }
                
                &>p{
                   font-weight: bold;
                   font-size: 1rem;
                   color: #1A1A1A;
                   cursor: pointer;
                }
            }   
            
       //actual dropdown brick (with buttons)
            & div:nth-of-type(2){
                width: 95%;
                position: absolute;
                background: #3D3636;
                border-radius: 20px;
                padding: 10% 0 10% 5%;
                
                display: flex;
                align-items: baseline;
                justify-content: left;
                flex-direction: column;
                
                transform: rotateX(90deg) translateY(-50px);
                transform-origin: top;
                transition: 750ms;
                -webkit-transition: 750ms;
                -moz-transition: 750ms;
                -o-transition: 750ms;
                
                & hr{
                    border: 1px solid transparent;
                    border-top: 1px solid #1A1A1A;
                   margin-left: 1vh;
                    width: 30%;
                    display: block;
                    cursor: default;
                }
                & button{
                    display: block;
                    border: none;
                    background: transparent;
                    font-weight: 900;
                    padding: 3px;
                    font-size: .9rem;
                    color: #1A1A1A;
                    cursor: pointer;
                    transition: 300ms;
                    -webkit-transition: 300ms;
                    -moz-transition: 300ms;
                    -o-transition: 300ms;
                }
            }
`