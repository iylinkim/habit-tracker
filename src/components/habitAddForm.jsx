import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
    inputRef = React.createRef();

    onSubmit = event => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.inputRef.current.value = "";
    };
    render() {
        return (
            <form className="add-form" onSubmit={this.onSubmit}>
               <input ref={this.inputRef} type="text" className="add-input" placeholder="Please enter your habit"/> 
               <button className="add-button">ADD</button>
            </form>
        );
    }
}

export default HabitAddForm;