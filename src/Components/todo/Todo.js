import React, { Component } from 'react'
import TodoForm from './todoForm/TodoForm';
import { connect } from 'react-redux';
import TodoLIst from './todoList/TodoLIst';
import {
    getTasksOperation,
    postTasksOperation,
    deleteTasksOperation,
    setImportantTasksOperation
} from '../../redux/operations/todoOperations';

class Todo extends Component {
    state = {}

    componentDidMount() {
        this.props.getTasksOperation();
    }

    render() {
        const { todoItems, postTasksOperation, deleteTasksOperation, setImportantTasksOperation } = this.props;
        return (
            <>
                <TodoForm postTasksOperation={postTasksOperation} />
                {this.props.error && <h2>{this.props.error}</h2>}
                {this.props.loader
                    ? <h2>...loading</h2>
                    : <TodoLIst todoItems={todoItems} deleteTask={deleteTasksOperation} checkImportant={setImportantTasksOperation} />
                }
            </>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        todoItems: state.todo,
        loader: state.loader,
        error: state.error
    }
}

const mapDispatchToProps = {
    getTasksOperation, postTasksOperation, deleteTasksOperation, setImportantTasksOperation
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

