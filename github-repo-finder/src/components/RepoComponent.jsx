import React from 'react'
import Search from "./SearchComponent";
import Card from './CardComponent';

function Repo() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <main className="flex-grow">
            
            <div style={{}}>
            <Search>
            
            </Search>
            </div>
            <Card></Card>
            <br></br>
            <Card></Card>
            </main>
        </div>
    )
}

export default Repo
