import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './pages/Home';
import Tama from './pages/Tama';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import Signup from './pages/Auth/Signup';
import Signin from './pages/Auth/Signin';
import GetPosts from './pages/Post/GetPosts';
import CreatePost from './pages/Post/CreatePost';
import GetPostById from './pages/Post/GetPostById';
import UpdatePostById from './pages/Post/UpdatePostById';
import Navigation from './components/organisms/Navigation';
import useNavigation from './hooks/useNavigation';
import ContainerLayout from './components/layout/ContainerLayout';

// redux
import { getMeFn } from './store/actions/auth.action';
import nonmemberComponent from './hoc/nonmemberComponent';
import requireAuth from './hoc/requireAuth';

const App = ({ auth, getMeFn }) => {
  useEffect(() => {
    getMeFn();
  }, [getMeFn, auth.isLoggedIn]);

  const { handleNavigation, isNavOpen } = useNavigation();

  return (
    <Router>
      <ContainerLayout>
        <Header handleNavigation={handleNavigation} />
        <Navigation isNavOpen={isNavOpen} handleNavigation={handleNavigation} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tama" component={Tama} />
          <Route exact path="/signup" component={nonmemberComponent(Signup)} />
          <Route exact path="/signin" component={nonmemberComponent(Signin)} />
          <Route exact path="/posts" component={GetPosts} />
          <Route exact path="/post/create" component={requireAuth(CreatePost)} />
          <Route path="/post/:postId/update" component={requireAuth(UpdatePostById)} />
          <Route path="/post/:postId" component={GetPostById} />
          <Route exact path="/private" component={() => <div>Private2</div>} />
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </ContainerLayout>
    </Router>
  );
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps, { getMeFn })(App);
