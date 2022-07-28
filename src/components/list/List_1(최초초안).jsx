//https://github.com/bluemiv/react_todo_app/blob/main/src/components/ToDoItem.jsx

import './style.css'
import {useState} from 'react';

function List({arr, setArr}) {

  let [undone, setUndone]=useState(true);


const done = arr.filter((object)=>{
  return object.isDone===true;
})

const Undone = arr.filter((object)=>{
  return object.isDone===false;
})


// const click_done =()=>{
//   let copy=[...arr];
//   copy.({
//     isDone: true
//   });
//   setArr(copy);
//   console.log(copy)
// }

// const click_undone =()=>{
//   let copy=[...arr];
//   copy.({
//     isDone: false
//   });
//   setArr(copy);
//   console.log(copy)
// }

//삭제버튼 클릭시 실행되는 함수
  // const delete_btn =()=>{
  //   let copy=[...arr];
  //   copy.splice();
  //   setArr(copy);
  // }

  {
    setArr.isDone===true?<Undone/>:null
  }


return (
  <div className="List">
        <div> Working..🔥</div>
             <div className="Working" key={i}>
              <div>
                <div>{arr[i].title}</div>
                <div>{arr[i].content}</div>
              </div>
              
            <button onClick={(e)=>{
              e.target.parentElement.remove()
            }}>삭제하기</button>

            <button 
            // onClick={click_done}
            >완료</button>
            </div>
            </Undone>
          )})}
        
        <div>Done..🎉
            <div className="Done">
                <div>{arr[0].title}</div>
                <div>{arr[0].content}</div>
                <button onClick={(e)=>{
                e.target.parentElement.remove()
                }}>삭제하기</button>
                <button 
                // onClick={click_undone}
                >취소</button>
              </div>
          </div>
      </div>    
      );
  }

  export default List;