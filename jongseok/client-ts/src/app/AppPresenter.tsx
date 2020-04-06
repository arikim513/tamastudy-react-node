import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import GetPosts from '../components/pages/Post/GetPosts';
import Home from '../components/pages/Home';
import Sign from '../components/pages/Sign';
import nonmemberComponent from '../hoc/nonmemberComponent';
import CommonLayout from '../components/CommonLayout/index';
import PostForm from '../components/pages/Post/PostForm';
import GetPostById from '../components/pages/Post/GetPostById';

interface IProps {}

const AppPresenter: React.SFC<IProps> = (props) => {
  return (
    <Router>
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/signin'} exact component={nonmemberComponent(Sign)} />
        <Route path={'/signup'} exact component={nonmemberComponent(Sign)} />
        <Route path={'/posts'} exact component={GetPosts} />
        <Route path={'/post/create'} exact component={PostForm} />
        <Route path={'/post/:postId'} component={GetPostById} />
        <Route path={'/studies'} exact component={() => <CommonLayout>studies</CommonLayout>} />
        <Route path={'/contact'} exact component={() => <CommonLayout>contact</CommonLayout>} />
        <Redirect from={'*'} to={'/'} />
      </Switch>
    </Router>
  );
};

export default AppPresenter;
