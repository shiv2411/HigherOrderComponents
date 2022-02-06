import React, {Component} from 'react';
import UpdatedComponent from './Counter';

class Hover extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const {name,count,incrementCount} = this.props;
        return(
            <div onMouseOver={incrementCount}>{name} Hovered {count} times!!!!!!!</div>
        )
    }
}

export default UpdatedComponent(Hover);