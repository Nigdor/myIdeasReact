import React from "react";
import "./ideaInput.css";
import {InputSubmit} from "../submitButton";

export class IdeaInput extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <form action="" onSubmit={this.props.handleSubmit}>
                <label>
                    Entrez une idée
                    <input type="text" onChange={this.props.handleChange}/>
                </label>
                    <InputSubmit margin={20}  type="submit" value="Envoyer"/>
                <input type="submit" value="Envoyer" />
            </form>

        )
    }
}
