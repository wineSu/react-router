import React from 'react';
import Home from './home';
import List from './List';
import Detail from './Detail';
import {HashRouter as Router, Route, Link, Redirect, Switch} from './react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Link to="/home">首页</Link>
        <Link to="/list">列表</Link>
        <Link to="/detail/1">产品1</Link>
        <Link to="/detail/2">产品2</Link>
      </div>
      <Switch>
          <Route path="/home" exact={true} component={Home}></Route>
          <Route path="/list" component={List}></Route>
          <Route path="/detail/:id" component={Detail}></Route>
          <Redirect to="/home"></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
