import React , { useEffect, useState } from 'react'
import Search from "./SearchComponent";
import Card from './CardComponent';
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
// useSelector Allows you to extract data from the Redux store state, using a selector function.
// useDispatch() hook returns a reference to the dispatch function from the Redux store.
import { getUsers } from "../redux/actions/repos";
const Repo=()=> {
    const [word, setWord] = useState("test");
    const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos.repos);
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <main className="flex-grow">
            
            <div style={{}}>
            <Search
             changeword={(word) => {
            setWord(word);
            dispatch(getUsers(word));
          }}/>
            
            </div>
             {repos && repos.map((user) => <Card key={user.id} user={user} />)}
            </main>
        </div>
    )
}

const mapStateToProps = (state) => ({
  users: state.users,
  loading: state.loading,
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Repo);