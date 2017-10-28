import React, {Component} from 'react';
import './App.css';

import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './components/Footer';
import Counter from './components/Counter';
import CounterButton from './containers/CounterButton'

class App extends Component {
    render() {
        return (
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
                <Counter/>
                <CounterButton/>
            </div>
        );
    }
}

export default App;