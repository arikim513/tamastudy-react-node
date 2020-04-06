import React, { useEffect } from 'react';
import GetPostByIdPresenter from './GetPostByIdPresenter';
import CommonLayout from '../../../CommonLayout/index';
import { connect } from 'react-redux';
import { getPostByIdFn } from '../../../../store/actions/v1/post.action';
import { IRootState } from '../../../../store/reducers/index';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<any> {
  postState: IRootState['postState'];
  getPostByIdFn: any;
}

const GetPostByIdContainer = ({ match, postState, getPostByIdFn }: Props) => {
  useEffect(() => {
    getPostByIdFn(match.params.postId);
  }, [getPostByIdFn, match.params.postId]);

  if (postState.loading) return <div>Loading ...</div>;

  return (
    <CommonLayout noFooter>
      <GetPostByIdPresenter post={postState.post} />
    </CommonLayout>
  );
};

const mapStateToProps = ({ postState }: IRootState) => ({
  postState,
});

export default withRouter(connect(mapStateToProps, { getPostByIdFn })(GetPostByIdContainer));
