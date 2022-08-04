//컴포넌트에서 리덕스 데이터를 사용(불러오기)
import React from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleStatus } from "../../redux/modules/todos";
import { Link } from "react-router-dom";

const List = ()=>{
  const dispatch=useDispatch();
  //Form에서와 마찬가지로 dispatch변수 연결
  const todos = useSelector((state)=>state.todos.todos);
  // const todos = useSelector((state)=>console.log(state));
  //useSelector => 조회 state의 값을 가져옴
  const removeTodo = (id)=>{
    dispatch(removeTodo(id));
  }
  //dispatch를 통해 todos.js에 있는 함수를 불러옴, id 값으로 가져갈 것임
  const toggleStatus =(id) =>{
    dispatch(toggleStatus(id));
  }
  //상동

    return (
      <div className="List">
        <h2 style={{display: 'left'}}>Working.. 🔥</h2>
        <div className="list-container">
          {todos.map((todo) => {
            if (todo.isDone===false) {
                return (
                  <div className="Working" key={todo.id}>
                    <div>
                      <h2>{todo.title}</h2>
                      <div>{todo.content}</div>
                    </div>
                    <div>
                    <button onClick={()=>removeTodo(todo.id)}>삭제하기</button> 
                    <button onClick={()=>toggleStatus(todo.id)}>완료</button> 
                    </div>
                  </div>
              );
              } else {
                return null;
              }
          })}
        </div>

        <div><h2 style={{display: 'left'}}> Done..! 🎉</h2></div>
        <div className="list-container">
          {todos.map((todo) => {
          if (todo.isDone===true) {
            return (
            <div className="Done" key={todo.id}>
              <div>
                <h2>{todo.title}</h2>
                <div>{todo.content}</div>
              </div>
              <div>
              <button onClick={()=>removeTodo(todo.id)}>삭제하기</button> 
              <button onClick={()=>toggleStatus(todo.id)}>취소</button> 

              {/* <button onClick={(e)=>{
                e.target.parentElement.parentElement.remove()
              }}>삭제하기</button>
                      <button onClick={()=>{
                        let copy = [...arr];
                        copy[i].isDone=false;
                        setArr(copy)
                      }}>취소</button> */}
            </div>
          </div>
        );
        } else {
          return null;
        }
    })}
  </div>
      </div>
    );
  }
  export default List;


