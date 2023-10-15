import React, { Component } from 'react';
import './index.css';
import { Button } from 'reactstrap';

export default class ChangeColor extends Component {
    constructor() {
        super();
        this.state = { color: 'coral', colorIndex: 1 };
        this.colorArray = ["coral", "green", "aquamarine", "cornflowerblue", "crimson", "cyan", "darkmagenta", "BlueViolet", "Chartreuse", "DarkGoldenRod", "DarkBlue", "DarkOrchid"];
    }

    colorchange() {
        const newIndex = (this.state.colorIndex) % this.colorArray.length + 1;
        this.setState({ color: this.colorArray[newIndex - 1], colorIndex: newIndex });

        if (newIndex >= this.colorArray.length) {
            alert('');
        }
    }

    render() {
        return (
            <>
                <div className='main'>
                    <h1>Color Palette</h1>
                    <h1>Color Index : {this.state.colorIndex}</h1> {/* Display the index as it is */}
                    <hr />
                    <div className="colorchange" style={{ backgroundColor: this.state.color }}>
                        box
                    </div>
                    <hr />
                    <Button color='success' onClick={() => this.colorchange()}>
                        Change Color
                    </Button>
                </div>
            </>
        );
    }
}


