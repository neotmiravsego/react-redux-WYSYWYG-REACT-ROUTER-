import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import MainPage from './pages/MainPage/MainPage'
import AddPost from './pages/AddPost/AddPost'
import PostPage from './pages/PostPage/PostPage'
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route exact path="/post-сreated" component={AddPost}></Route>
        <Route exact path="/post/:id" component={PostPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
