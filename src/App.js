import React from 'react';
import Child from './child.js';
 
 
class App extends React.Component {
  constructor() {
    super();
    this.state = {num : 1,input:""};

  }
 
   setData = (e) => {
      this.setState({input:e.target.value});

  }
  handleChange = () =>{
    this.setState({num:this.state.input});
  }
  
  render() {
     
    return ( <div className="container">
              <h2>React lifecycle->shouldComponentUpdate</h2>
              <h5>Print number if it is less than 100, else print "100 plus",do not render component,if previous number is also greator than hundred and current is also. we can check in console</h5>
              <input type="text" onChange={this.setData}/> 
              <button onClick={this.handleChange}>clcik</button>
              <Child number={this.state.num}/> 
             </div>); 
     
  }
}

  
export default App;