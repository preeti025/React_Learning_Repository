import { Component } from "react";

class Profile extends Component {
  constructor(props) {
    console.log("Child : constructor call");
    super(props);
    this.state = {
      count: 0,
      name: this.props.name
    };
  }
  componentDidMount(){
    console.log("child : componentDidMount call")
  }
  incrementHandler(){
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    console.log("Child : render call")
    return (
      <div style={{margin: '2rem', textAlign: 'center'}}>
        {console.log("child : return call")}
        <h3 style={{margin: '0 0 2rem 0'}}>
          Let's Count : {this.state.count}
        </h3>
        <button onClick={this.incrementHandler.bind(this)}>
          Increase
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          decrease
        </button>
        <h2 >{this.state.name}</h2>
        <button onClick={() =>{this.setState({name: 'Akansha'})}}>Change Name</button>
      </div>
    );
  }
}

export default Profile;
