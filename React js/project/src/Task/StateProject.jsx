import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class StateProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            isRepeate: false
        };
        this.colorArr = ["red", "green", "yellow", "blue", "lightcoral"]
    }

    indexChange = () => {
        let { index, isRepeate } = this.state
        if (this.colorArr.length > index || isRepeate) {
            this.setState({ index: index + 1 })
        } else {
            const isContinue = confirm("want to continue....?")
            if (!isContinue) this.setState({ index: 0 })
            else this.setState({ index: index + 1, isRepeate: true })
        }
    }

    render() {
        return (
            <><div className=''>
                <h1>
                    {this.state.isRepeate.toString()}
                </h1>
                {/* <h1>{this?.state?.index}</h1> */}
                <div style={{
                    display: "grid",
                    placeContent: "center"
                }}>
                    {/* <h1>StateProp1</h1> */}
                    <h1>index is {this.state.index}</h1>
                    <div style={{
                        height: "300px",
                        width: "300px",
                        display: "grid",
                        placeContent: "center",
                        padding: '38px 0px',
                        textAlign: 'center',
                        marginBottom: '20px',
                        backgroundColor: this.colorArr[this?.state?.index >= this?.colorArr?.length ? this?.colorArr?.length - 1 : this?.state?.index],
                    }}>
                        BOX
                    </div>
                    <hr />
                    <Button color="success" onClick={this.indexChange}>Change Color</Button>
                </div>
            </div>
            </>
        );
    }
}


/*

        if (this.colorArr.length > this.state.index || this.state.isRepeate) {
            this.setState({ index: this.state.index + 1 })
        } else {
            // if (this.state.index === this.colorArr.length) {
            const isContinue = confirm("want to continue....?")
            if (!isContinue) {
                this.setState({ index: 0 })
            } else {
                this.setState({ index: this.state.index + 1, isRepeate: true })
            }
            // } else {
            //     this.setState({ index: this.state.index + 1 })
            // }
        }
*/