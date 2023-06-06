import React from "react";
import Pure from'./Pure';
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {b: "Init B", c: "", pure: ""};
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      console.log("getDerivedStateFromProps: ", nextProps,prevState);
      if(nextProps.a === "Test") {
        return {
          b: "Change Test"
        };
      }
      if(prevState.c === "") {
        return {
          c: "Set data"
        }
      }
      return null;
    }
    shouldComponentUpdate(nextProps, nextState) {
      console.log("shouldComponentUpdate: ", nextProps, nextState);
      return nextProps.a !== "Edit";
    }
    componentDidMount() {
      console.log("componentDidMount: ");
    }
  
    componentWillUnmount() {
      console.log("componentWillUnmount: ");
    }

  
    render() {
      const { pure } = this.state;
      console.log("render: ", this.state, this.props);
      return (
        <div>
          <h1>Hello, world!</h1>
          <button onClick={() => this.setState({pure: "pure"})}>ClickPure</button>
          <Pure pure={pure}/>
        </div>
      );
    }
  }
  export default Clock;