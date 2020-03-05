import React from "react";
import "./ideaElement.css";
export class IdeaElement extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <li>{this.props.el}</li>;
  }
}
