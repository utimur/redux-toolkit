const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const ADD_TODO = 'ADD_TODO'
const REMOVE_LAST_TODO = 'REMOVE_LAST_TODO'

const initialState = {
    count: 0,
    todos: ['снять видео', "смонтировать видео", "рассказать про toolkit"]
}

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case REMOVE_LAST_TODO:
            return {
                ...state,
                todos: [...state.todos.slice(0, state.todos.length-1)]
            }
        default:
            return state
    }
}

export const increment = () => ({type: INCREMENT})
export const decrement = () => ({type: DECREMENT})
export const addTodo = (payload) => ({type: ADD_TODO, payload})
export const removeLastTodo = () => ({type: REMOVE_LAST_TODO})
