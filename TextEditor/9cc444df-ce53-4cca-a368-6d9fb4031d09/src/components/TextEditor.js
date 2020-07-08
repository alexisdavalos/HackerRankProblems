import React from 'react';

class TextEditor extends React.Component {
  constructor(props){
    super(props);
    //some state intialized
    this.state = {
      currentTxt: "",
      displayTxt: []
    }
  }

  render() {
    // write on change handler
    const onChange = (e) =>{
      this.setState({
        ...this.state,
        currentTxt: e.target.value
      })
    }
    // write a on append handler
    const onAppend = (word) =>{
      // append word to displayTxt
      // set currentTxt to ""
      this.setState({
        ...this.state,
        displayTxt: [...this.state.displayTxt, `${word} `],
        currentTxt: ""
      })
    }

    //write on undo function
    const undoHandler = () => {
      this.state.displayTxt.pop()
      //pop the most recent word from the array
      this.setState({
        ...this.state,
        displayTxt: this.state.displayTxt
      })
    }
    
    return (
      <React.Fragment>
        <div className="controls">
          <input className="word-input" value= {this.state.currentTxt} onChange={(e) => onChange(e)}type="text" data-testid="word-input"/>

          {(this.state.currentTxt === "") ? 
          <button onClick={()=> onAppend(this.state.currentTxt)} data-testid="append-button" disabled>Append</button> : 
          <button onClick={()=> onAppend(this.state.currentTxt)} data-testid="append-button">Append</button>  }
          
          {(this.state.displayTxt.length < 1) ? 
            <button onClick={()=> undoHandler()}data-testid="undo-button" disabled>Undo</button> :
            <button onClick={()=> undoHandler()}data-testid="undo-button">Undo</button>
          }
          
        </div>
    <div className="text-field" data-testid="text-field">{this.state.displayTxt}</div>
      </React.Fragment>
    );
  }
}

export default TextEditor;
