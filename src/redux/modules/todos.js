//리덕스 모듈생성(덕스구조)

//액션타입을 정해준다
const CREATE = 'todos/CREATE';
const REMOVE = 'todos/REMOVE';
const TOGGLE_STATUS = 'todos/TOGGLE_STATUS';
const LOADID = 'todos/LOAD_ID';

//초기값 설정
const initialState = {
    todos: [
      {
        id: "1",
        title: "리액트",
        body: "리액트를 배워봅시다",
        isDone: false,
      },
    ],
    todo: {
      id: "0",
      title: "",
      body: "",
      isDone: false,
    },
  };

// Action Creators (액션 생성 함수)
export function createTodo(todo) {
    return { type: CREATE, todo:todo };};
export function removeTodo(todo) {
    return { type: REMOVE, todo:todo };};
export function toggleStatus(todo) {
    return { type: TOGGLE_STATUS, todo:todo };};
export function getTodoByID(todo) {
    return { type: LOADID, todo:todo };};

// Reducer
export default function reducer(state=initialState, action ={}){
    switch(action.type){
        case CREATE:
            return{
                ...state,
                todos:[...state.todos, action.todos],
            };
        case REMOVE:
            {const newTodos=state.todos.fileter((todo)=>todo.id!==action.id);
              return {...state, todos: newTodos}
              };
        case TOGGLE_STATUS:{
            return {
                ...state,
                todos: state.todos.map((todo) => {
                  if (todo.id === action.todos) {
                    return {
                      ...todo,
                      isDone: !todo.isDone,
                    };
                  } else {
                    return todo;
                  }
            })}}
        case LOADID: {
            return {
                //LoadID함수 고민
            }
        }

      default: return state;
    }
}
