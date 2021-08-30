import * as type from "../types";

export function getUsers(users) {
  console.log("this is getUsers Action", users);
  return {
    type: type.GET_REPOS_REQUESTED,
    payload: users,
  };
}
