import React from "react";
class Pure extends React.PureComponent {
    render() {
      console.log("Pure Component ");
      return (
        <div>
          <h1>Pure component</h1>
        </div>
      );
    }
  }
  export default Pure;