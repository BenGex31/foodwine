import React from 'react'
import './Header.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import {Navbar} from 'reactstrap';

const Header = () => {
    return (
        <Router>
            <header>
                <Navbar dark expand="xxl">
                <Link className="navbar-brand text-white" to='/'><h1 className='text-center'>FoodWine</h1></Link>
                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav text-white">
                    <Link className='nav-item nav-link text-white' to='/Entrées'>Entrées</Link>
                    <Link className='nav-item nav-link text-white' to='/Plats'>Plats</Link>
                    <Link className='nav-item nav-link text-white' to='/Desserts'>Desserts</Link>
                    </div>
                </div>
                </Navbar>
                <Switch>
                    <Route exact path='/'>
                        
                    </Route>
                    <Route path='/Entrées'>

                    </Route>
                    <Route path='/Plats'>

                    </Route>
                    <Route path='/Desserts'>

                    </Route>
                </Switch>
            </header>
        </Router>
    )
}

export default Header