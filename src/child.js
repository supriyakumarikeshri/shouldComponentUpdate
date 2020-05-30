import React from 'react';

class Child extends React.Component {
  constructor(props) {
    super();
    

  }
  //nextProps is current data(newProps)
  shouldComponentUpdate(nextProps, nextState) {

   if(this.props.number>=100 && nextProps.number>=100){
        return false;//if it will return false then component will not rerender
   }
        return true; 
   
  }
  render() {
    
    console.log("render");   
    return ( <div className="container">
            
                {
                   
                    this.props.number>=100 ? <p>{"100 plus"}</p> : <p>{this.props.number}</p>
                   
                    
                }
             
            </div>); 

            
     
  }
}

  
export default Child;