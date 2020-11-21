// import React, { Component } from 'react';
// import Habit from './habit';

// class Habits extends Component {
//     state = {
//         habits: [
//             {id:1, name: 'Reading', count: 0},
//             {id:2, name: 'Climbing', count: 0},
//             {id:3, name: 'Running', count: 0},
//         ],
//     };
//     render() {
//         return (
//         <ul>
//             {this.state.habits.map(habit => (
//                 <Habit key={habit.id} habit={habit}/>
//             ))}
//         </ul>
//         );
//     }
// }

// export default Habits;

import React, {Component} from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component{
    render(){
        return (
            <>
                <HabitAddForm onAdd={this.props.onAdd}/>
                <ul>
                    {this.props.habits.map(habit => (
                        <Habit 
                        key={habit.id} 
                        habit={habit} 
                        onIncrement={this.props.onIncrement} 
                        onDecrement={this.props.onDecrement}
                        onDelete={this.props.onDelete}
                        />
                    ))}
            </ul>
            <button className="habits-reset" onClick={this.props.onReset}>
                Reset
            </button>
            </>
        );
    }
}

export default Habits;