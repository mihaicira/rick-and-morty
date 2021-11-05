import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {AppContainer} from './Components/AppContainer.style';

import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";
import Character from "./Components/Character/Character";
import PageNotFound from "./Components/NotFound/PageNotFound";



function App() {

  useEffect(()=>{
    //reactivate the scrollbar when the landing animation approaches its end
    setTimeout(()=>{
      document.getElementsByTagName("html")[0].style.overflowY = "visible"
    },2500)
  })

  return <>
    <Router>
      <AppContainer>
        <Header/>
        <Switch>
          <Route path="/rick-and-morty/" exact component={Search}/>
          <Route path="/rick-and-morty/character/:id" component={Character}/>
          <Route path="/rick-and-morty/" component={PageNotFound}/>
        </Switch>


      </AppContainer>

    </Router>
    </>;
}

export default App;
