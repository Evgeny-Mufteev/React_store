import { PostsDataType } from "../../assets/data";
import { PostsActionsType } from "./actions";

export type ReducerType = {
  posts: PostsDataType;
};

type fetchPostsDataActionsType = {
  type: PostsActionsType.fetchPostsData;
  payload: PostsDataType;
};

export type ActionsType = fetchPostsDataActionsType;
