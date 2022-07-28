import React from 'react';
import './style.css';
import {useState} from 'react';

function Form({arr, setArr}) {

  const [input, setInput] = useState(
    {
      id: 0,
      title: '',
      content: '',
      isDone: false
    }
  )
  const UponInputTitle = (e) =>{setInput(e.target.value)}
  console.log(UponInputTitle)
  const UponInputContent = (e) =>{setInput(e.target.value)}

  
  //버튼 클릭시 실행되는 함수
  const click_btn =()=>{
    let copy=[...arr];
    copy.push({
      id: 0,
      title: input.title,
      content: input.content,
      isDone: false
    });
    setArr(copy);
  }

  return (
      <div className="Form">
        <div>
          제목 <input type="text" name="title" value={arr.title} onChange={UponInputTitle}/>
          내용 <input type="text" name="content" value={arr.content} onChange={UponInputContent}/>
        </div>
        <div>
        <button onClick={click_btn}>추가하기</button>
        </div>
      </div>
    );
  }
export default Form;