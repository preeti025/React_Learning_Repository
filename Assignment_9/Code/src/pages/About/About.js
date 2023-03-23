import Profile from "../../components/Profile/Profile";
import { Component } from "react";


class About extends Component {
  constructor(props){
    super(props);
    console.log("Parent : constructor call")
  }

  componentDidMount(){
    console.log("Parent : componentDidMoutn call")
    this.timer = setInterval(() => {
      console.log("Namaste react");
    }, 1000);
  }

  componentWillUnmount(){
    console.log("Parent : componentWillUnmount call")
    clearInterval(this.timer);
  }
  render() {
    console.log("Parent : render call")
    return (
      <div style={{margin: '3rem'}}>
        <h1 style={{ textAlign: "center" }}>This is About us component</h1>
        {console.log("Parent : return call")}
        <Profile name= {'preeti'}/>
      </div>
    );
  }
}

export default About;
