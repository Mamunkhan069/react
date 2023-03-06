import React, { Component } from 'react'
class Button extends Component {
    render() { 
        const {text, className, event, disabled } = this.props
        return (
            <button 
                onClick={ event }
                className={className}
                type = "button"
                disabled = {disabled}
             
            >
                { text}
            </button>
        );
    }
}
 
export default Button;