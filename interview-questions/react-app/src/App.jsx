import React, { useCallback, useContext, useMemo, useState } from "react";
import ClassComponent from "./ClassComponent";
import { ThemeContext } from "./Theme";
import { useRef } from "react";

// const Button = ({ text = "default" }) => {
//   return <button>{text}</button>;
// };

const List = React.memo(({ users, onRemove }) => {
  //React.memo is used so that component re-renders only when the props change
  console.log("list rendering", users);
  return users.map((user) => (
    <div key={user.id}>
      <span>{user.name}</span>
      <span>{user.age}</span>
      <button onClick={() => onRemove(user.id)}>X</button>
    </div>
  ));
});

List.displayName = "List";

const App = () => {
  console.log("rendering");
  const [theme, toggleTheme] = useContext(ThemeContext);
  const textInput = useRef(); //useRef doesnt trigger component rendering, it's just for DOM mnipulation
  const onTextInput = () => {
    console.log(textInput);
  };

  const [text, setText] = useState("initial value");
  const [search, setSearch] = useState("");

  const [users, setUsers] = useState([
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 22 },
    { id: 3, name: "Jack", age: 30 },
  ]);

  const onRemove = useCallback(
    (id) => {
      const newUsers = users.filter((user) => user.id !== id);
      setUsers(newUsers);
    },
    [users]
  ); //useCallback prevents re-rendering of onRemove function if users data is not changed

  const filteredUsers = useMemo(() => {
    console.log("filtered users memo");
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, users]); //useMemo prevents re-rendering of filteredUsers if search value is not changed

  //filteredUsers renders every time the text value changes even if not related to
  //users data, to avoid this we can use useMemo hook, to recaultulate only when search value is changed

  return (
    <>
      {/*React.Fragment -> short version*/}
      <div>App</div>
      <div style={{ background: theme.background, color: theme.foreground }}>
        {users.map(
          (
            user //always provide unique identifier as a key prop so that only the changed element is re-rendered
          ) => (
            <div key={user.id}>
              <span>{user.name}</span>
              <span>{user.age}</span>
            </div>
          )
        )}
      </div>
      <ClassComponent />
      <div>
        {/* <Button text={"Click me"} /> */}

        <button onClick={() => toggleTheme()}>Toggle theme</button>

        <div>
          <input type="text" ref={textInput} />
          <button onClick={onTextInput}>Text input reference</button>
        </div>

        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={() => setSearch(text)}>Change text</button>
        </div>
        <div style={{ border: "1px solid", padding: "20px" }}>
          <List users={users} onRemove={onRemove} />
        </div>
      </div>
    </>
  );
}; //functional component

export default App;
