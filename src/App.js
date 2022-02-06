import React, {Component} from 'react';
import Button from './Button';
import Hover from './Hover';

class App extends Component {


  render() {
    return(
      <>
      <h1>Lets read about HOCS</h1>
      <Button/>
      <Hover/>
      </>
    )
  }
}


export default App;