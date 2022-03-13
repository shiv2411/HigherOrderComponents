import React, {Component} from 'react';
import Button from './Button';
import Hover from './Hover';
import Hello from './Hello';
class App extends Component {


  render() {
    return(
      <>
      <h1>Lets read about HOCS</h1>
      <Button/>
      <Hover/>
      <Hello/>
      </>
    )
  }
}


export default App;