import React, { useState, useEffect } from 'react';
import GetPostsPresenter from './GetPostsPresenter';
import { connect } from 'react-redux';
import { IRootState } from '../../../../store/reducers/index';
import { getPostsFn, getSearchPostsFn } from '../../../../store/actions/v1/post.action';
import CommonLayout from '../../../CommonLayout/index';

interface Props {
  postState: IRootState['postState'];
  getPostsFn: any;
  getSearchPostsFn: any;
}

const GetPostsContainer = ({ postState, getPostsFn, getSearchPostsFn }: Props) => {
  const [searchByTitle, setSearchByTitle] = useState('');

  useEffect(() => {
    getPostsFn();
  }, [getPostsFn]);

  const handleNextCursor = (cursor: string) => {
    getPostsFn(cursor);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchByTitle(e.target.value);
  };

  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      getSearchPostsFn(searchByTitle);
    }
  };

  if (postState.loading) return <div>Loading ...</div>;

  return (
    <CommonLayout>
      <GetPostsPresenter
        posts={postState.posts}
        pageInfo={postState.pageInfo}
        handleNextCursor={handleNextCursor}
        searchByTitle={searchByTitle}
        handleSearchChange={handleSearchChange}
        handleSearchSubmit={handleSearchSubmit}
      />
    </CommonLayout>
  );
};

const mapStateToProps = ({ postState }: IRootState) => ({
  postState,
});

export default connect(mapStateToProps, { getPostsFn, getSearchPostsFn })(GetPostsContainer);
