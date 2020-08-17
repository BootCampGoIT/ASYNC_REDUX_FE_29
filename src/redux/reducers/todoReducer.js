import { ADDNEWTASK, DELETETASK, CHECKIMPORTANT, SET_TASK } from '../constants/todoConstants';


const initialState = []

export default (state = [...initialState], { payload, type }) => {
    switch (type) {
        case ADDNEWTASK:
            return [...state, payload];
        case DELETETASK:
            return [...state.filter(task => task.id !== payload)]
        case CHECKIMPORTANT:
            return [...state.map(task => (task.id === payload) ? { ...task, important: !task.important } : task)]
        case SET_TASK:
            return [...payload]
        default:
            return state;
    }
}
