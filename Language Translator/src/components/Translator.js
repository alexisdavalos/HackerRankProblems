import React from 'react';

class Translator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {map: this.props.translations, input: '', output: ''};
  }
  render() {
    
   
    //handles input change and state update
    const handleChange = (e) =>{
      let change = e.target.value;
      // updates state and grabs translation from map
      this.setState({
        ...this.state,
        input: change.toLowerCase(),
        output: this.state.map.has(change.toLowerCase()) ? this.state.map.get(change.toLowerCase()) : ''
      })
    }

    return (
      <React.Fragment>
        <div className="controls">
          <div className="input-container">
            <span>input:</span>
            <input type="text" value={this.state.input} onChange={(e) => handleChange(e)}className="text-input" data-testid="text-input" />
          </div>
          <div className="input-container">
            <span>output:</span>
            <input type="text" value={this.state.output} onChange={(e)=> console.log(e)}className="text-output" data-testid="text-output" readOnly />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Translator;
