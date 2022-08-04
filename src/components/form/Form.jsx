//컴포넌트에서 리덕스 데이터를 사용(불러오기
import React from "react";
import { useState } from "react";
import { createTodo } from "../../redux/modules/todos";
import nextId from "react-id-generator";
import { useDispatch, useSelector } from "react-redux";

const Form =()=>{
  const todos = useSelector{(state)=>state.todoReducer.todos;}

  const id = nextId(); //모듈을 통해 새로운 id 발급
  const [todo, setTodo] =useState({
  id: 0,
  title: "",
  body: "",
  isDone: false,
});


const dispatch = useDispatch(); //dispatch변수사용
  const onChangeHandler = (e) =>{const {name, value} = e.target;
    setTodo(
    {...todo,
    [name]:value}
  )};

  const onSubmitHandler=(e)=>{e.preventDefault();
    if (todo.title.trim() === "" || todo.body.trim() === "") return;
    //자동 새로고침 방지를 위해 반드시 들어가야 하는 문구

  dispatch(createTodo({ ...todo, id }));
  //todos에 정의한 createTodo를 dispatch해서 접수

  setTodo({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });

  // //버튼 클릭시 실행되는 함수
  // const click_btn =()=>{
  //   let copy=[...todo];
  //   copy.push({
  //     id: id,
  //     title: inputTitle,
  //     content: inputContent,
  //     isDone: false
  //   });
  //   setTodo(copy);
  //   setId(id+1)
  //   console.log(copy)
  // }

  return (
      <div className="Form">
        <div>
          제목 <input type="text" name="title" value={todo.title} onChange={onChangeHandler}/>
          내용 <input type="text" name="content" value={todo.content} onChange={onChangeHandler}/>
        </div>
        <div>
        <button onClick={onSubmitHandler}>추가하기</button>
        </div>
      </div>
    );
  }
}
export default Form;