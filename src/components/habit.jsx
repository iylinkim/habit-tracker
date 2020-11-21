// import React, {Component} from 'react';

// class Habit extends Component{
//     state = {
//         count: 0,
//     };

//     handleIncrement = () => {
//        // state 오브젝트 안에 있는 count를 증가한 뒤 statte를 업데이트 해야 함!
//        this.setState({count: this.state.count + 1});
//     };
//     handleDecrement = () => {
//         const count = this.state.count - 1;
//         this.setState({count: count < 0 ? 0 : count});
//     };
//     render(){
//         const {name, count} = this.props.habit;
//         return <li className="habit">
//             <span className="habit-name">{name}</span>
//             <span className="habit-count">{count}</span>
//             <button className="habit-button habit-increase" onClick={this.handleIncrement}>
//                <i className="fas fa-plus-square"></i>
//             </button>
//             <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
//                <i className="fas fa-minus-square"></i>
//             </button>
//             <button className="habit-button habit-delete">
//                <i className="fas fa-trash"></i>
//             </button>
//         </li>;
//     }
// }

// export default Habit;

import React, {Component} from 'react';

class Habit extends Component{
    state = {
        count: 0,
    };

    handleIncrement = (habit) => {
      this.props.onIncrement(this.props.habit);
    };
    handleDecrement = (habit) => {
        this.props.onDecrement(this.props.habit);
    };

    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    }
    render(){
        const {name, count} = this.props.habit;
        return <li className="habit">
            <span className="habit-name">{name}</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={this.handleIncrement}>
               <i className="fas fa-plus-square"></i>
            </button>
            <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
               <i className="fas fa-minus-square"></i>
            </button>
            <button className="habit-button habit-delete" onClick={this.handleDelete}>
               <i className="fas fa-trash"></i>
            </button>
        </li>;
    }
}

export default Habit;