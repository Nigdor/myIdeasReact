import React from "react";
import "./App.css";
import { IdeasList } from "./components/ideasList/ideasList";
import { IdeaInput } from "./components/ideaInput/ideaInput";
import { IDEAS } from "./ideas";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null,
      array: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState([...this.state.input, event.target.value]);
  }
  handleSubmit(event) {
    if (this.state.value) {
      IDEAS.push(this.state.value);
    }
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <IdeaInput
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        ></IdeaInput>
        <IdeasList state={this.state.array}></IdeasList>
      </div>
    );
  }
}

export default App;
