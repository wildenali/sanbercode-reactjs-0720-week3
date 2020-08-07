import React from "react";
import { Switch, Link, Route } from "react-router-dom";

import UserInfo from '../materiHari11/UserInfo';
import Timer from '../materiHari12/Timer';
import Lists from '../materiHari13/Lists';
import HooksLists from '../materiHari14/Lists';
import Movie from '../materiHari15/Movie';
import SimpleHooks from '../materiHari14/SimpleHook';

const Routes = () => {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/timer">Timer</Link>
          </li>
          <li>
            <Link to="/lists">Lists dengan class</Link>
          </li>
          <li>
            <Link to="/hook-lists">Lists dengan Hooks</Link>
          </li>
          <li>
            <Link to="/simple-hooks">Simple Hooks</Link>
          </li>

          <li>
            <Link to="/movie">Movie dengan context</Link>
          </li>

        </ul>
      </nav>
      <Switch>
        <Route path="/timer" component={Timer}/>
        <Route path="/lists">
          <Lists />
        </Route>
        <Route path="/hook-lists">
          <HooksLists />
        </Route>
        <Route path="/simple-hooks">
          <SimpleHooks />
        </Route>
        <Route path="/movie">
          <Movie />
        </Route>
        <Route path="/">
          <UserInfo />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
