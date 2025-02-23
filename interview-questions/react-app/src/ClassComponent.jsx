import React from "react";

class ClassCompoenent extends React.Component {
    state = {
        counter: 0
    }
  render() {
    return (
        <>
            <h1>Hello, World!</h1>
            <button onClick={() => this.setState({counter: this.state.counter + 1})}>Increase: {this.state.counter}</button>
        </>
)
  }
}

export default ClassCompoenent;