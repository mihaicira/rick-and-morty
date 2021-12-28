import {CharacterContainer,BackButton,MainInfo,SideInfo,Label} from "./Character.style";
import React from "react";
import {gql, useQuery} from "@apollo/client";
import LoadingAnimation from "../Search/LoadingAnimation";
import {Link} from "react-router-dom";
import PageNotFound from "../NotFound/PageNotFound";
import {copyToClipboard} from "../../utils";


function Character({match}){

    function getUserFromAPI(id){
        //crates the dynamic query
        const query = gql`
            query getUser{
                character(id: ${id}){
                    name
                    status
                    species
                    gender
                    origin{
                        name
                    }
                    location{
                        name
                    }
                    image
                    episode{
                        name
                    }
                }
            }
        `
        return query
    }

    function GetUser(){
        //uses the dynamic query. Prepares and places it in the DOM
        const query = getUserFromAPI(match.params.id)

        const { loading, error, data } = useQuery(query);

        if (loading) return <LoadingAnimation/>

        if (error) {
            return <PageNotFound/>;
        }

        const char = data.character

        return <>
                <MainInfo>
                    <h2>{char.name}</h2>
                    <div>
                        {
                            char.gender==="Male" &&
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="14" cy="14" r="14" fill="#7DB7ED"/>
                                <path d="M14.0818 7.84003V9.48013H18.2648L15.1598 12.3634C14.1631 11.6768 12.9292 11.2705 11.5929 11.2705C8.28309 11.2705 5.60001 13.7619 5.60001 16.8353C5.60001 19.9086 8.28309 22.4 11.5928 22.4C14.9026 22.4 17.5857 19.9086 17.5857 16.8353C17.5857 15.5944 17.1481 14.4486 16.4087 13.5231L19.5137 10.6399V14.5241H21.28V7.84003L14.0818 7.84003ZM11.5928 20.5673C9.37313 20.5673 7.5737 18.8964 7.5737 16.8352C7.5737 14.7741 9.37313 13.1032 11.5928 13.1032C13.8125 13.1032 15.612 14.7741 15.612 16.8352C15.612 18.8964 13.8125 20.5673 11.5928 20.5673V20.5673Z" fill="#3D3636"/>
                            </svg>

                        }
                        {
                            char.gender==="Female" &&
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.5" cy="12.5" r="12.5" fill="#F0A493"/>
                                <g clip-path="url(#clip0)">
                                    <path d="M16.9629 15.7681C19.4238 13.308 19.4238 9.30513 16.9629 6.84504C14.5021 4.38491 10.498 4.38491 8.03706 6.84504C5.57619 9.30513 5.57619 13.308 8.03706 15.7681C9.07872 16.8094 10.3969 17.4098 11.7574 17.5696V19.682H10.2724C9.86228 19.682 9.52986 20.0143 9.52986 20.4243C9.52986 20.8342 9.86228 21.1666 10.2724 21.1666H11.7574V23.2576C11.7575 23.6676 12.0899 23.9999 12.5 23.9999C12.9101 23.9999 13.2425 23.6676 13.2425 23.2576V21.1666H14.7276C15.1377 21.1666 15.4701 20.8342 15.4701 20.4243C15.4701 20.0143 15.1377 19.682 14.7276 19.682H13.2425V17.5696C14.6031 17.4098 15.9213 16.8094 16.9629 15.7681ZM9.08718 14.7183C7.20533 12.837 7.20533 9.77605 9.08718 7.89479C10.969 6.0136 14.0309 6.01349 15.9129 7.89479C17.7947 9.77605 17.7947 12.837 15.9129 14.7183C14.031 16.5995 10.969 16.5995 9.08718 14.7183Z" fill="#3D3636"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="19" height="19" fill="white" transform="translate(3 5)"/>
                                    </clipPath>
                                </defs>
                            </svg>


                        }
                        {
                            char.gender==="unknown" &&
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="15" cy="15" r="15" fill="#418B35"/>
                                <g clipPath="url(#clip0)">
                                    <path d="M7.53751 16.5627V18.614H6.06094C5.7889 18.614 5.56876 18.8342 5.56876 19.1062C5.56876 19.3783 5.7889 19.5984 6.06094 19.5984H7.53751V21.1078C7.53751 21.3798 7.75764 21.6 8.02969 21.6C8.30174 21.6 8.52188 21.3798 8.52188 21.1078V19.5984H9.99844C10.2705 19.5984 10.4906 19.3783 10.4906 19.1062C10.4906 18.8342 10.2705 18.614 9.99844 18.614H8.52188V16.5647C8.85667 16.5218 9.18361 16.4538 9.49359 16.3443C9.21107 16.1092 8.95478 15.8445 8.72502 15.5574C8.50032 15.6037 8.26785 15.6281 8.02969 15.6281C6.13015 15.6281 4.58438 14.0823 4.58438 12.1828C4.58438 10.2833 6.13015 8.73749 8.02969 8.73749C9.9928 8.73749 11.475 10.4119 11.475 12.1828C11.475 12.7529 11.3225 13.2831 11.0762 13.7572C11.2913 14.0131 11.5544 14.2231 11.8558 14.3746C12.2292 13.7255 12.4594 12.9839 12.4594 12.1828C12.4594 9.89984 10.5818 7.75311 8.02969 7.75311C5.58703 7.75311 3.60001 9.74014 3.60001 12.1828C3.60001 14.4569 5.32873 16.3143 7.53751 16.5627Z" fill="black"/>
                                    <path d="M19.9078 4.79999H16.9547C16.6826 4.79999 16.4625 5.02013 16.4625 5.29218C16.4625 5.56422 16.6826 5.78436 16.9547 5.78436H18.7196L15.7011 8.73726C14.9433 8.13101 13.9954 7.75311 12.9516 7.75311C12.436 7.75311 11.9483 7.8586 11.4877 8.02126C11.7702 8.25642 12.0265 8.52109 12.2562 8.8082C12.4809 8.76193 12.7134 8.73749 12.9516 8.73749C14.8511 8.73749 16.3969 10.2833 16.3969 12.1828C16.3969 14.0823 14.8511 15.6281 12.9516 15.6281C11.0018 15.6281 9.50626 13.972 9.50626 12.1828C9.50626 11.6127 9.6588 11.0825 9.90509 10.6084C9.68994 10.3525 9.42685 10.1425 9.12547 9.99102C8.75206 10.6401 8.52188 11.3817 8.52188 12.1828C8.52188 14.488 10.4498 16.6125 12.9516 16.6125C15.3942 16.6125 17.3813 14.6255 17.3813 12.1828C17.3813 11.1389 17.0034 10.1911 16.3971 9.43324L19.4156 6.48035V8.2453C19.4156 8.51735 19.6358 8.73749 19.9078 8.73749C20.1799 8.73749 20.4 8.51735 20.4 8.2453V5.29218C20.4 5.02288 20.1793 4.79999 19.9078 4.79999V4.79999Z" fill="black"/>
                                </g>
                                <path d="M21.0822 22.356C21.0773 22.1802 21.0749 22.0483 21.0749 21.9604C21.0749 21.4429 21.1481 20.9961 21.2946 20.6201C21.4021 20.3369 21.5754 20.0513 21.8146 19.7632C21.9904 19.5532 22.3054 19.248 22.7595 18.8477C23.2185 18.4424 23.5163 18.1201 23.653 17.8809C23.7897 17.6416 23.8581 17.3804 23.8581 17.0972C23.8581 16.5845 23.6579 16.1353 23.2575 15.7495C22.8571 15.3589 22.3664 15.1636 21.7854 15.1636C21.2238 15.1636 20.7551 15.3394 20.3791 15.6909C20.0031 16.0425 19.7565 16.5918 19.6394 17.3389L18.2844 17.1777C18.4064 16.1768 18.7678 15.4102 19.3684 14.8779C19.9738 14.3457 20.7722 14.0796 21.7634 14.0796C22.8132 14.0796 23.6506 14.3652 24.2756 14.9365C24.9006 15.5078 25.2131 16.1987 25.2131 17.0093C25.2131 17.478 25.1032 17.9102 24.8835 18.3057C24.6638 18.7012 24.2341 19.1821 23.5944 19.7485C23.1647 20.1294 22.884 20.4102 22.7521 20.5908C22.6203 20.7715 22.5227 20.979 22.4592 21.2134C22.3957 21.4478 22.3591 21.8286 22.3493 22.356H21.0822ZM21.0017 25V23.4985H22.5031V25H21.0017Z" fill="black"/>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="16.8" height="16.8" fill="white" transform="translate(3.60001 4.79999)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        }

                        <img src={char.image}/>

                        <svg width="30" height="30" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>{copyToClipboard(window.location.href)}}>
                            <circle cx="14.5" cy="14.5" r="13.5" stroke="#BEDD42" strokeWidth="2"/>
                            <path d="M18.8125 6C18.7428 6 12.0625 6 12.0625 6C10.8722 6 9.81251 7.09182 9.81251 8.25001L9.16226 8.2652C7.97256 8.2652 7 9.34181 7 10.5V21.75C7 22.9082 8.05975 24 9.25001 24H17.6875C18.8777 24 19.9375 22.9082 19.9375 21.75H20.5C21.6903 21.75 22.75 20.6582 22.75 19.5V10.5135L18.8125 6ZM17.6875 22.875H9.25001C8.65939 22.875 8.12502 22.3232 8.12502 21.75V10.5C8.12502 9.92682 8.60596 9.39356 9.19659 9.39356L9.81251 9.37501V19.5C9.81251 20.6582 10.8722 21.75 12.0625 21.75H18.8125C18.8125 22.3232 18.2781 22.875 17.6875 22.875ZM21.625 19.5C21.625 20.0732 21.0906 20.625 20.5 20.625H12.0625C11.4719 20.625 10.9375 20.0732 10.9375 19.5V8.25001C10.9375 7.67684 11.4719 7.12502 12.0625 7.12502H17.6875C17.6785 8.42046 17.6875 9.38908 17.6875 9.38908C17.6875 10.558 18.7394 11.625 19.9375 11.625C19.9375 11.625 20.5349 11.625 21.625 11.625V19.5ZM19.9375 10.5C19.3385 10.5 18.8125 9.41158 18.8125 8.82769C18.8125 8.82769 18.8125 8.23594 18.8125 7.14244V7.14131L21.625 10.5H19.9375ZM18.8125 13.8851H13.75C13.4395 13.8851 13.1875 14.1366 13.1875 14.4471C13.1875 14.7576 13.4395 15.009 13.75 15.009H18.8125C19.123 15.009 19.375 14.7575 19.375 14.4471C19.375 14.1366 19.123 13.8851 18.8125 13.8851ZM18.8125 16.6948H13.75C13.4395 16.6948 13.1875 16.9463 13.1875 17.2567C13.1875 17.5673 13.4395 17.8187 13.75 17.8187H18.8125C19.123 17.8187 19.375 17.5673 19.375 17.2567C19.375 16.9463 19.123 16.6948 18.8125 16.6948Z" fill="#BEDD42"/>
                        </svg>

                    </div>
                </MainInfo>

                <SideInfo>
                    <Label label="Name" value={char.name}/>
                    <Label label="Status" value={char.status}/>
                    <Label label="Species" value={char.species}/>
                    <Label label="Gender" value={char.gender}/>
                    <Label label="Origin" value={char.origin.name}/>
                    <Label label="Location" value={char.location.name}/>

                    <span>Episodes</span>
                    <div id="episodes-container">
                        {char.episode.map((ep,idx)=>
                            <p key={ep.name}>{ep.name}</p>
                        )}
                    </div>
                </SideInfo>
            </>

    }

    return <CharacterContainer>
                <Link to="/rick-and-morty/">
                    <BackButton>
                        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="back-button 1" clipPath="url(#clip0)">
                                <g id="Group">
                                    <path id="Vector" d="M21.5007 43C33.3556 43 43.0002 33.355 43.0002 21.4999C43.0002 9.64498 33.3556 0 21.5007 0C9.64576 0 0.000976562 9.64498 0.000976562 21.4999C0.000976562 33.355 9.64576 43 21.5007 43ZM21.5007 2.94318C31.7327 2.94318 40.057 11.2677 40.0572 21.4999C40.0572 31.7321 31.7329 40.0566 21.5007 40.0568C11.2686 40.0566 2.94435 31.7321 2.94435 21.4997C2.94435 11.2679 11.2686 2.94318 21.5007 2.94318Z" fill="#BEDD42"/>
                                    <path id="back-button-arrow" d="M18.6128 30.7085C19.1875 31.283 20.1193 31.2828 20.6939 30.7085C21.2688 30.1336 21.2688 29.202 20.6937 28.6271L15.0388 22.9725L31.4141 22.9709C32.2268 22.9707 32.8855 22.312 32.8855 21.4989C32.8853 20.6862 32.2266 20.0277 31.4139 20.0277L15.0381 20.0293L20.6942 14.3735C21.269 13.7988 21.269 12.8668 20.6942 12.2923C20.4068 12.005 20.0303 11.8612 19.6535 11.8612C19.277 11.8612 18.9005 12.005 18.613 12.2921L10.4449 20.46C10.1689 20.7359 10.0139 21.11 10.0139 21.5005C10.0141 21.891 10.1691 22.2649 10.4451 22.5414L18.6128 30.7085Z" fill="#BEDD42"/>
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="43" height="43" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </BackButton>
                </Link>


        {
            isNaN(match.params.id) &&
                <PageNotFound/>
        }
        {
            !isNaN(match.params.id) &&
            <GetUser/>
        }
          </CharacterContainer>
}

export default Character;