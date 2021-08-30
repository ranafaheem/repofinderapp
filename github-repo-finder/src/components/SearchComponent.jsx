import React from "react";
import Input from "@material-tailwind/react/Input";


const Search=(props)=> {
    return (
        <div style={{padding:'5px 5px 5px 5px'}}>
        <Input
            type="text"
            color="deepPurple"
            size="regular"
            outline={false}
            placeholder="Input"
            onChange={(e) => props.changeword(e.target.value)}
        />
        </div>
    )
}

export default Search