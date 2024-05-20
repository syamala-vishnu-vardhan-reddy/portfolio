// Routes.tsx or App.tsx (wherever you handle routing)

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Projects from './projects';
import TodoList from './fature'; // Import TodoList component here

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Projects} />
      </Switch>
    </Router>
  );
};

export default Routes;
