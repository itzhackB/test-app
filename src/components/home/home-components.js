import React from 'react';
import { render } from 'react-dom/cjs/react-dom.development';
import Dog from '../features/dog-card'
const dogArray =
    [
        { dogName: "Rose", dogType: "Beagle", dogAge: 1 },
        { dogName: "Rose", dogType: "Beagle", dogAge: 2 }, ,
        { dogName: "Rose", dogType: "Beagle", dogAge: 5 },
        { dogName: "Rose", dogType: "Beagle", dogAge: 4 },
    ];

function DogArray() {




    return (<div>{dogArray.map(cardDog => <div style={{ color: "green" }}> <Dog dogName={cardDog.dogName} dogType={cardDog.dogType} dogAge={cardDog.dogAge} /> </div>)}</div>);









}

export default DogArray;