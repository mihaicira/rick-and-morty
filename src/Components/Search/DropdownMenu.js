import {DropdownMenu} from "./Search.style";
import React from "react";

function Dropdown(props){
    return <>
        <DropdownMenu>
            <div>
                <p>{props.status}</p>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                        <path d="M24.2569 6.47449C23.0944 4.48287 21.5175 2.90597 19.5258 1.7435C17.5338 0.581087 15.3592 0 13.0004 0C10.6418 0 8.46659 0.581087 6.47491 1.7435C4.48311 2.90579 2.90621 4.48269 1.74368 6.47449C0.581088 8.46641 0 10.6416 0 13C0 15.3585 0.581265 17.5334 1.7435 19.5254C2.90597 21.5171 4.48287 23.094 6.47467 24.2566C8.46659 25.4189 10.6417 26.0001 13.0001 26.0001C15.3587 26.0001 17.5339 25.4189 19.5257 24.2566C21.5174 23.0944 23.0943 21.5171 24.2567 19.5254C25.4189 17.5336 25.9999 15.3584 25.9999 13C26 10.6414 25.4189 8.46611 24.2569 6.47449ZM21.4466 12.1367L13.762 19.8216C13.5477 20.0359 13.2936 20.1434 13.0002 20.1434C12.7069 20.1434 12.453 20.0359 12.2385 19.8216L4.5536 12.1367C4.33915 11.9223 4.2319 11.6684 4.2319 11.3751C4.2319 11.0817 4.33915 10.8276 4.5536 10.6132L6.28003 8.88665C6.49471 8.67214 6.74841 8.56495 7.04194 8.56495C7.3353 8.56495 7.58924 8.6722 7.80362 8.88665L13.0003 14.0833L18.1969 8.88665C18.4112 8.67214 18.6652 8.56495 18.9586 8.56495C19.252 8.56495 19.506 8.6722 19.7203 8.88665L21.4469 10.6132C21.6616 10.8276 21.7688 11.0817 21.7688 11.3751C21.7686 11.6684 21.6615 11.9223 21.4466 12.1367Z" fill="#1A1A1A"/>
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="26" height="26" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>

            <div id="dropdown-options">
                <hr/>
                <button onClick={()=>{props.changeStatus("All")}}> All</button>
                <hr/>
                <button onClick={()=>{props.changeStatus("Alive")}}> Alive</button>
                <hr/>
                <button onClick={()=>{props.changeStatus("Dead")}}> Dead</button>
                <hr/>
                <button onClick={()=>{props.changeStatus("Unknown")}}> Unknown</button>
            </div>

        </DropdownMenu>
        </>
}

export default Dropdown