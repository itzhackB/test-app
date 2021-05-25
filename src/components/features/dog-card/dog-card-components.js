import React,{Component} from 'react';

class Dog extends Component
{
    constructor(){
        super()
    }
    render(){
        const {dogName,dogType,dogAge}=this.props;
        return(
            <div id="cardDog">
                <h2>Dog name:{dogName}</h2>
                <h5>Dog type:{dogType}</h5>
                <h5>Dog age:{dogAge}</h5>
            </div>
        )
    }
}
export default Dog;