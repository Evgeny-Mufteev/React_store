import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostsList from "../../components/PostsList";
import fakeData from "../../assets/data";
import { fetchPostsDataActions } from "../../store/StorePostsPage/actions";
import { getPostsData } from "../../store/StorePostsPage/selectors";

const PostsPage: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector(getPostsData);

  useEffect(() => {
    setTimeout(() => dispatch(fetchPostsDataActions(fakeData)), 3000);
  }, []);
  return <PostsList data={data} />;
};
export default PostsPage;
