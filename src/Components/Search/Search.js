import {SearchContainer,SearchControls} from "./Search.style";
import Dropdown from "./DropdownMenu";
import React, {useState} from 'react';
import {gql,useQuery} from "@apollo/client";
import {SearchResults,CharacterCard} from "./SearchResults.style";
import LoadingAnimation from "./LoadingAnimation";

var Timeout;

function Search(){
    const [statusFilter,setStatusFilter] = useState("All")
    const [searchBarValue,setSearchBarValue] = useState("")
    const [pageNumber,setPageNumber] = useState(1)

    function handleSearchValueChange(text){
        //handles the timeout delay before sending the query to the API
        clearTimeout(Timeout)
        Timeout = setTimeout(()=>{
            setPageNumber(1)
            setSearchBarValue(text)
        },300)
    }

    function handleStatusFilterChange(value){
        //makes sure that the PageNumber is reseted everytime the status filter changes
        setPageNumber(1);
        setStatusFilter(value);
    }

    function handleSearchQuery(page,searchText,statusFilter){
        //crates the dynamic query
        const filter = statusFilter==="All" ? '' : `,status:"${statusFilter}"`

        const query = gql`
            query getChars{
                characters(page: ${page},filter: {name: "${searchText}"${filter}}){
                    info {
                        count
                        pages
                    }
                    results {
                        name
                        id
                        status
                        image
                    }
                }
            }
        `
        return query
    }

    function GetData(props){
        //uses the dynamic query. Prepares and places it in the DOM
        const { loading, error, data } = useQuery(handleSearchQuery(props.page,searchBarValue,statusFilter));

        if (loading)  return <LoadingAnimation/>

        if (error) {
            setPageNumber(0)
            return <h4>No results have been found matching your search.</h4>;
        }

        let Characters = []
        data.characters.results.map((character,index)=>{
            Characters.push(<CharacterCard
                key={character.id}
                id={character.id}
                name={character.name}
                status={character.status}
                image={character.image}/>)
        })

        return <>
            <div className="page-controllers">
                <button onClick={()=>{setPageNumber(pageNumber-1)}} disabled={pageNumber===1}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 0C5.8331 0 0 5.83245 0 13C0 20.1675 5.8331 26 13 26C20.1688 26 26 20.1675 26 13C26 5.83245 20.1688 0 13 0ZM16.7297 20.2013C16.3449 20.5302 15.8743 20.6908 15.4056 20.6914C14.8239 20.6927 14.2467 20.4477 13.8404 19.9712L9.0402 14.3383C8.3876 13.5739 8.3863 12.4527 9.035 11.685L13.8157 6.03525C14.547 5.1714 15.8405 5.0635 16.703 5.79475C17.5675 6.526 17.6754 7.8195 16.9442 8.6827L13.288 13.0039L16.9578 17.3127C17.6949 18.174 17.5916 19.4675 16.7297 20.2013Z" fill="#BEDD42"/>
                    </svg>
                </button>
                <p>{pageNumber}</p>

                <button onClick={()=>{setPageNumber(pageNumber+1)}} disabled={pageNumber===data.characters.info.pages}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 0C20.1669 0 26 5.83245 26 13C26 20.1675 20.1669 26 13 26C5.83115 26 9.53674e-07 20.1675 9.53674e-07 13C9.53674e-07 5.83245 5.83115 0 13 0ZM9.2703 20.2013C9.6551 20.5302 10.1257 20.6908 10.5944 20.6914C11.1761 20.6927 11.7533 20.4477 12.1596 19.9712L16.9598 14.3383C17.6124 13.5739 17.6137 12.4527 16.965 11.685L12.1843 6.03525C11.453 5.1714 10.1595 5.0635 9.29695 5.79475C8.43245 6.526 8.32455 7.8195 9.0558 8.6827L12.712 13.0039L9.04215 17.3127C8.30505 18.174 8.4084 19.4675 9.2703 20.2013Z" fill="#BEDD42"/>
                    </svg>
                </button>
            </div>

            {Characters}

            <div className="page-controllers">
                <button onClick={()=>{setPageNumber(pageNumber-1)}} disabled={pageNumber===1}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 0C5.8331 0 0 5.83245 0 13C0 20.1675 5.8331 26 13 26C20.1688 26 26 20.1675 26 13C26 5.83245 20.1688 0 13 0ZM16.7297 20.2013C16.3449 20.5302 15.8743 20.6908 15.4056 20.6914C14.8239 20.6927 14.2467 20.4477 13.8404 19.9712L9.0402 14.3383C8.3876 13.5739 8.3863 12.4527 9.035 11.685L13.8157 6.03525C14.547 5.1714 15.8405 5.0635 16.703 5.79475C17.5675 6.526 17.6754 7.8195 16.9442 8.6827L13.288 13.0039L16.9578 17.3127C17.6949 18.174 17.5916 19.4675 16.7297 20.2013Z" fill="#BEDD42"/>
                </svg>
                </button>
                <p>{pageNumber}</p>

                <button onClick={()=>{setPageNumber(pageNumber+1)}} disabled={pageNumber===data.characters.info.pages}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 0C20.1669 0 26 5.83245 26 13C26 20.1675 20.1669 26 13 26C5.83115 26 9.53674e-07 20.1675 9.53674e-07 13C9.53674e-07 5.83245 5.83115 0 13 0ZM9.2703 20.2013C9.6551 20.5302 10.1257 20.6908 10.5944 20.6914C11.1761 20.6927 11.7533 20.4477 12.1596 19.9712L16.9598 14.3383C17.6124 13.5739 17.6137 12.4527 16.965 11.685L12.1843 6.03525C11.453 5.1714 10.1595 5.0635 9.29695 5.79475C8.43245 6.526 8.32455 7.8195 9.0558 8.6827L12.712 13.0039L9.04215 17.3127C8.30505 18.174 8.4084 19.4675 9.2703 20.2013Z" fill="#BEDD42"/>
                </svg>
                </button>
            </div>
        </>

    }

    return <SearchContainer>
            <SearchControls>
                <svg width="30" height="31" id="dropdown-svg" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.1956 7.35989C23.49 7.05526 23.9676 7.05622 24.261 7.35989C26.2593 9.4259 26.2593 12.7852 24.262 14.8492C24.1148 15.0013 23.9226 15.0773 23.7293 15.0773C23.5361 15.0773 23.3437 15.0013 23.1966 14.8492C22.9022 14.545 22.9022 14.0524 23.1966 13.7483C24.6063 12.2911 24.6063 9.91898 23.1956 8.46076C22.9012 8.1567 22.9012 7.66356 23.1956 7.35989Z" fill="#1A1A1A"/>
                    <path d="M0.841364 25.9361L9.90987 16.5658C7.59665 12.3322 8.17154 6.85573 11.6549 3.25354C13.6857 1.15506 16.3853 0 19.2557 0C22.1271 0 24.8268 1.15506 26.8567 3.25354C31.0444 7.58238 31.0435 14.6271 26.8554 18.9571C24.8239 21.0546 22.1252 22.2096 19.2538 22.2096C17.3683 22.2096 15.5613 21.7023 13.9652 20.7657L4.90175 30.1313C3.7816 31.2893 1.96467 31.2898 0.842352 30.1313C0.303951 29.5747 0.00172806 28.8205 0.000801086 28.0338C0.000801086 27.2467 0.303953 26.4924 0.841364 25.9361ZM24.725 16.755C27.7385 13.6393 27.7385 8.57027 24.7259 5.45502C23.2652 3.94517 21.3228 3.11397 19.2558 3.11397C17.1898 3.11397 15.2474 3.94517 13.7858 5.45458C10.7731 8.57027 10.7741 13.6403 13.7867 16.756C15.2474 18.2649 17.1889 19.0956 19.2539 19.0956C21.3199 19.0956 23.2631 18.2644 24.725 16.755Z" fill="#1A1A1A"/>
                </svg>
                <input placeholder="Type your favorite character’s name" onChange={(e)=>{handleSearchValueChange(e.target.value)}}/>
                <Dropdown status={statusFilter} changeStatus={handleStatusFilterChange}/>
            </SearchControls>

            <SearchResults>
                <GetData page={pageNumber}/>
            </SearchResults>

        </SearchContainer>
}


export default Search