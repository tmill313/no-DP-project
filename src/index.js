import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Landing from './Landing'


ReactDOM.render(
    <HashRouter>
        <Switch>
    <Route exact path="/" component={Landing}/>
    <Route path='/App' component={App}/>
    </Switch>
    </HashRouter>
    
    , document.getElementById('root'));

