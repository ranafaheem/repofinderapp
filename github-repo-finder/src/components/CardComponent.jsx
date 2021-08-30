import React from "react";
import Card from "@material-tailwind/react/Card";
import CardRow from "@material-tailwind/react/CardRow";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardStatus from "@material-tailwind/react/CardStatus";
import CardStatusFooter from "@material-tailwind/react/CardStatusFooter";
import Icon from "@material-tailwind/react/Icon";
import H6 from "@material-tailwind/react/Heading6";

const CardComponent=(props)=> {
    return (
        <div style={{
    paddingTop: '50px',
    boxSizing: 'content-box',
  }}>
        <Card border shadow maxW="sm">
            <CardRow>
                <CardHeader color="deepPurple" size="lg" iconOnly>
                    {/* <Icon name="groups" size="5xl" color="white" /> */}
                    <img class="w-full" src={props.user.owner.avatar_url} alt="Sunset in the mountains"/>
  
                </CardHeader>
                <CardRow>
                <div style={{paddingLeft:'10px'}} ><H6 color="deepPurple">FullName :</H6></div>
                </CardRow>
                <CardRow>
                <div style={{paddingLeft:'10px'}}><H6 color="deepPurple">{props.user.full_name}</H6></div>
                </CardRow>
                <CardStatus title="Language" amount={props.user.name} />
            </CardRow>

            <CardStatusFooter color="green" amount="97%" date="Since one week">
                <Icon color="green" name="arrow_upward" />
            </CardStatusFooter>
        </Card>
        </div>
    );
}


export default CardComponent;
