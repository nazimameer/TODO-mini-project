import React from "react";
import "./App.css";
import { useState } from "react";
function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");

  const handleChange = (e) => {
    const { name } = e.target;
    if (name === "allselect") {
      let tempuser = toDos.map((item) => {
        return { ...item, status: true };
      });
      console.log(name);
      console.log({ tempuser });

      setToDos(tempuser);
    }
  };

  const clearall =(e) =>{
    setToDos([]);
  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>

      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() =>
            setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])
          }
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          let removehandler = (e) => {
            const newtodo = toDos.filter((toDos) => toDos.text !== e);
            setToDos(newtodo);
          };
          return (
            <div className="todo">
              <div className="left">
                <input
                  onChange={(e) => {
                    console.log(e.target.checked);
                    console.log(obj);

                    setToDos(
                      toDos.filter((obj2) => {
                        if (obj2.id === obj.id) {
                          obj2.status = e.target.checked;
                          console.log("hai", e.target.checked);
                        }
                        return obj2;
                      })
                    );
                  }}
                  value={obj.status}
                  type="checkbox"
                  name={obj.text}
                  checked={obj?.status || false}
                  id=""
                />
              <p>{ obj.status? <s>{obj.text}</s> : obj.text }</p>
              </div>
              <div className="right">
                <i
                  onClick={() => removehandler(obj.text)}
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          );
        })}

        <div className="buttons">
          <button
            onClick={(e) => {
              handleChange(e);
            }}
            className="tickallbtn"
            name="allselect"
          >
            SELECT ALL
          </button >

          <button className="tickallbtn" onClick={(e)=>{
            clearall(e);
          }}>
            CLEAR ALL
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;

//SET PATH=C:\Program Files\Nodejs;%PATH%
