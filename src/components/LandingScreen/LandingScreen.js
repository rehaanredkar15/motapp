import React from 'react'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import './LandingScreen.css';
import {useState,useEffect} from 'react';
import BookData from '../../Data.json';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
// import SearchIcon from "@material-ui/icons/Search";
// import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';




const LandingScreen = () => {


    const [MotData, setMotData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  let navigate = useNavigate();

   useEffect(() => {

   const getJoke=() => {

      axios.get("https://mot-test.herokuapp.com/v1/business/search?field=Postcode&term=LA").then((response) =>{

       setMotData(response.data.data);
      }
     )
  
   }  

   getJoke();
    
   }, [])

  //  console.log(MotData)

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = MotData.filter((value) => {
      return value.Trading_Name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };



   const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      
      navigate("/search");
    }
  }



    return (
        <div className="LandingContainer">
           <div className="Landingwrapper">
            <div className="searchbarsection">

               <div className="TopSection">
               <span className="details">Lorem ipsum</span>
             <div className="SearchBar"> 

                        <input placeholder="Search for a person"
                                 type="text"
                                  className="searchInput" 
                                   placeholder="Type A Mot Center Name "
                           value={wordEntered}
                           onChange={handleFilter}
                           onKeyDown={handleKeyDown}
                           />

                        <div className="SearchIcon">
                              {filteredData.length === 0 ? (
                                 <SearchTwoToneIcon />
                              ) : (
                                 <CloseTwoToneIcon id="clearBtn" onClick={clearInput} />
                              )}
                           </div>
               </div>
             
                {filteredData.length != 0 && (
                  <div className="dataResult">
                     {filteredData.slice(0, 15).map((value, key) => {
                        return (
                       <Link to={{pathname:"/profile/" + value.Trading_Name}}>
                        <a className="dataItem" target="_blank">
                           <p>{value.Trading_Name} </p>
                        </a>
                          </Link>
                        );
                     })}
                  </div>
                  )}
                
                
               </div>
               <div className="BottomSection">
               <button className="searchButton">
                Sign Up
               </button>
               </div>
            </div>
             
             <div className="Imagewrap">
              <div  className="image" >
               </div>
             </div>
           </div>
        </div>
    )
}

export default LandingScreen
