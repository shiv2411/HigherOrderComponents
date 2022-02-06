import React, {Component} from 'react';
import UpdatedComponent from './Counter';
class Button extends Component {
constructor(props) {
    super(props);
    console.log('HOCsprops:', this.props)
}

 render(){
     return (
         <button onClick = {this.props.incrementCount}> {this.props.name} Click {this.props.count} times</button>
     )
 }
}

export default UpdatedComponent(Button);