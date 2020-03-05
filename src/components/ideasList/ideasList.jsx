import React from "react";
import "./ideasList.css";
import {IDEAS} from "../../ideas";

import {IdeaElement} from "../ideaElement/ideaElement";

export class IdeasList extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <ul className={"ideas-list"}>
                {console.log(this.props.state)}
               { this.props.state && this.props.state.map(el => <IdeaElement el={el}></IdeaElement>)}
            </ul>
        )
    }
}
