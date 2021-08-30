import { call, put, takeEvery } from "redux-saga/effects";

// const apiUrl = `https://jsonplaceholder.typicode.com/repos`;
const apiUrl = `https://api.github.com/search/repositories?q=`;

function getApi(item) {
  console.log("this is getAPI", testVariable);
  return fetch(
    apiUrl + testVariable
    //     , {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
  )
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

// here is the generators
let testVariable;
function* fetchrepos(action) {
  console.log("this is the fetch user function", action.payload);
  testVariable = action.payload;
  try {
    // const repos = yield call(getApi(action.payload));
    const repos = yield call(getApi);
    yield put(
      { type: "GET_REPOS_SUCCESS", repos: repos.items }
      //   console.log("this is the response", repos)
    );
  } catch (e) {
    yield put({ type: "GET_REPOS_FAILED", message: e.message });
  }
}

// here is generator listening get repos request
function* reposaga() {
  yield takeEvery("GET_REPOS_REQUESTED", fetchrepos);
}

export default reposaga;
