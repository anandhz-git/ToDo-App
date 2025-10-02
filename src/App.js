import React, { useState } from 'react';
import './App.css';

function App() {
  const today = new Date().toLocaleDateString('en-US', { day: 'numeric' , month: 'long' , weekday: 'long', year: 'numeric'});
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');

  return (
    <div className="app">
      <center>
        <div className="mainHeading">
          <h1>To-Do List 📝</h1>
        </div>
        <div className="subHeading">
          <br />
          <h1>Whoop, it's {today}!</h1>
        </div>
      </center>

      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="Add your item"
        />
        <h6
          onClick={() => {
            if (toDo.trim() !== "") {
              setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
              setToDo(""); // ✅ clears input box
            }
          }}
          
        >Add</h6>
      </div>

      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div className="todo" key={obj.id}>
              <label className="custom-checkbox">
              <div className="left">
                <input
                  type="checkbox"
                  checked={obj.status}
                  onChange={(e) => {
                    setToDos(
                      toDos.map((obj2) =>
                        obj2.id === obj.id
                          ? { ...obj2, status: e.target.checked }
                          : obj2
                      )
                    );
                  }}
                /><span></span>
                <p className={obj.status ? "done" : ""}>
                  {obj.text}
                </p>
                
              </div>
              </label>
              <div className="right">
                <i
                  onClick={() =>
                    setToDos(toDos.filter((obj2) => obj2.id !== obj.id))
                  }
                  className="fas fa-times"
                ></i>
              </div>
            </div>

          );
        })}
      </div>
    </div>
  );
}

export default App;
