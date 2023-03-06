import React, { Component } from 'react'
import Button from './common/button.component';
import Header from './common/header.component';
import Counter from './common/counter.component';
class Counters extends Component {
    state = {
        numbers: [0]
    }
    addCounter= () => {
        const numbers = [...this.state.numbers, 0];
        this.setState({ numbers });
    }

    isReset = (index) => {
        const numbers = [...this.state.numbers];
        numbers[index] = 0;
        this.setState({ numbers })
    }

    isIncrement = (index) => {
        const numbers = [...this.state.numbers];;
        numbers[index]++;
        this.setState({ numbers });
    }

    isDecrement = (index) => {
        const numbers = [...this.state.numbers];;
        numbers[index]--;
        this.setState({ numbers });
    }

    isDelete = (index) => {
        const copiedNumber = [...this.state.numbers];
        copiedNumber.splice(index, 1);
        this.setState({ numbers: copiedNumber })
    }

    render() { 
        return (
            <div className='card-container'>
                <Header />
                <div className='card-body'>
                    <Button
                        event={this.addCounter}
                        className="btn btn-outline-success mx-3"
                        text="add Counter"
                    />
                    <hr></hr>
                    {
                        this.state.numbers.map((number,index) => {
                            return (
                                <React.Fragment>
                                    <Counter 
                                        number = {this.state.numbers[index]} 
                                        index = {index}
                                        onIncrement = {this.isIncrement}
                                        onDecrement = {this.isDecrement}
                                        onReset = {this.isReset}
                                        onDelete = {this.isDelete}
                                    />
                                    <br />

                                </React.Fragment>
                            );
                        })
                    }

                </div>
            </div>
        );
    }
}
 
export default Counters;