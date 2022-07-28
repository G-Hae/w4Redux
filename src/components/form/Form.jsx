import React from 'react';
import './style.css';
import {useState} from 'react';

function Form({arr, setArr}) {

  let [id, setId] =useState(0)
  const [inputTitle, setInputTitle] = useState('')
  const [inputContent, setInputContent] = useState('')

  const UponInputTitle = (e) =>{setInputTitle(e.target.value)}
  const UponInputContent = (e) =>{setInputContent(e.target.value)}
  
  //버튼 클릭시 실행되는 함수
  const click_btn =()=>{
    let copy=[...arr];
    copy.push({
      id: id,
      title: inputTitle,
      content: inputContent,
      isDone: false
    });
    setArr(copy);
    setId(id+1)
    console.log(copy)
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