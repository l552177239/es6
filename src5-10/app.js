import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import Home from './home';
import Topic from './topic';
import Header from './header';
import User from './user';
import './todolist.css';

class App extends React.Component{
    render(){
        return(
          <BrowserRouter>
          <Route render={props => (
            <ReactCSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
              <div className={props.location.key} key={props.location.key}>
                <Header />
                <Route exact path='/' component={Home} />
                <Route path='/topic/:id' component={Topic} />
                <Route path='/user/:loginname' component={User} />
                <h1>我是底部footer</h1>
              </div>
            )} />
            
          </BrowserRouter>
        )
    }
}

export default App;