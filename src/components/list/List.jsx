import './style.css'

function List({arr, setArr}) {

  const Click_Done = () =>{
    const newId=arr.map((todo, i)=>{
    if (todo.id===i){
      todo.isDone=true
    }
  }

  )};

      // const onToggle = (userId) => {
      //   setUsers(
      //     users.map((user) =>
      //       user.id === userId ? { ...user, active: !user.active } : user
      //     )
      //   );
      // };



    return (
      <div className="List">
        <h2>Working.. 🔥</h2>
        <div>
          {arr.map((arr) => {
            if (arr.isDone=false) {
                return (
                  <div className="Working">
                    <div>
                      <h2>{arr.title}</h2>
                      <div>{arr.content}</div>
                    </div>
                    <div>
                    <button onClick={(e)=>{
                      e.target.parentElement.parentElement.remove()
                     }}>삭제하기</button>
                      <button onClick={Click_Done}>완료</button>
                    </div>
                  </div>
              );
              } else {
                return null;
              }
          })}
        </div>


        <h2> Done..! 🎉</h2>
        <div>
          {arr.map((arr) => {
          if (arr.isDone=true) {
            return (
            <div className="Done">
              <div>
                <h2>{arr.title}</h2>
                <div>{arr.content}</div>
              </div>
              <div>
              <button onClick={(e)=>{
                e.target.parentElement.parentElement.remove()
               }}>삭제하기</button>
                <button onClick={Click_Done}>취소</button>
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
