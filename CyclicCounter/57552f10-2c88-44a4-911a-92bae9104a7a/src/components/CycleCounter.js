import React from 'react';

class CycleCounter extends React.Component {
  
  // First Step Build Constructor Function
  constructor(props) {
    // Initialize any props that might be passed into this component
    super(props);
    //Initialize the component's state
    this.state = {counter: 0}
  }
  componentDidUpdate(prevProps) {
    //Sanity Check
    // console.log('clicked button')
    // console.log('state:', this.state)
    // console.log('props', this.props)
    // const counter = document.getElementById("cycle-counter");
    // console.log(counter)
 }
  render() {
    // Functional Logic Goes Here
    // Handle Button Click
    const handleClick = (cycleMax) =>{
      // console.log('state counter:', this.state.counter)
      // console.log('cycleMax:', cycleMax)
      if (this.state.counter + 1 === cycleMax){
        // console.log('EQUAL')
        this.setState({
          ...this.state,
          counter: 0
        })
      }else if (this.state.counter < cycleMax){
        //Increment counter by 1 per click
        this.setState({
          //Spreads current state and updates counter
          ...this.state,
          counter: this.state.counter+=1
        })
      }
    }



    return (
      <button
        onClick={()=> handleClick(this.props.cycle)}
        id = "cycle-counter"
        data-testid="cycle-counter"
        style={{ fontSize: '1rem', width: 120, height: 30, }}
    >{this.state.counter}</button>
    );
  }
}

export default CycleCounter;
