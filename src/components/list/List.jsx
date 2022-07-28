import './style.css'

function List({arr, setArr}) {

    return (
      <div className="List">
        <h2 style={{display: 'left'}}>Working.. 🔥</h2>
        <div className="list-container">
          {arr.map((val, i) => {
            if (val.isDone===false) {
                return (
                  <div className="Working">
                    <div>
                      <h2>{val.title}</h2>
                      <div>{val.content}</div>
                    </div>
                    <div>
                    <button onClick={(e)=>{
                      e.target.parentElement.parentElement.remove()
                     }}>삭제하기</button>
                     
                      <button onClick={()=>{
                        let copy = [...arr];
                        copy[i].isDone=true;
                        setArr(copy)
                      }}>완료</button>
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
          {arr.map((val, i) => {
          if (val.isDone===true) {
            return (
            <div className="Done">
              <div>
                <h2>{val.title}</h2>
                <div>{val.content}</div>
              </div>
              <div>
              <button onClick={(e)=>{
                e.target.parentElement.parentElement.remove()
              }}>삭제하기</button>
                      <button onClick={()=>{
                        let copy = [...arr];
                        copy[i].isDone=false;
                        setArr(copy)
                      }}>취소</button>
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


