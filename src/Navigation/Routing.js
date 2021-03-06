import React from 'react'
import Home from './Home'
import {
    Switch,
    Route
  } from "react-router-dom";
import Entree from './Entree';
import Plat from './Plat';
import Dessert from './Dessert';
import FormAddWine from '../Components/FormAddWine';

const Routing = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/Entrées'>
                <Entree />
            </Route>
            <Route path='/Plats'>
                <Plat />
            </Route>
            <Route path='/Desserts'>
                <Dessert />
            </Route>
            <Route path='/formulaire'>
                <FormAddWine/>
            </Route>
        </Switch>
    )
}

export default Routing