import React, { Component } from 'react';  
import SearchBar from './components/search';
import RicipeList from './components/recipeList';
import '../src/index.css'

class App extends Component{ 
   render(){  
      return(  
         <div> 
            <h1>Welcome to finincial tech data</h1>
            <SearchBar/>
            <RicipeList/>
         </div>  
      );  
   }  
}  
export default App;  