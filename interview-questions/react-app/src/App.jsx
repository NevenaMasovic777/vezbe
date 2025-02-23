import { useEffect, useState } from "react";
import ClassComponent from "./ClassComponent";

const users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 22 },
  { id: 3, name: "Jack", age: 30 },
];

const Button = ({ text = "default" }) => {
  const [counter, setCounter] = useState(0); // [initialState, setter]

  useEffect(() => {
    console.log("use Effect rendered");
  }, []); // empty array of dipendencies which means there's nothing that triggers it and component renders only once

  return (
    <button
      onClick={() => {
        // setCounter(counter + 1); //updating the state //if this was written twice it wouldnt work since state is updated only once per snapshot
        setCounter((prevState) => prevState + 1); // 1 if we want to increase the counter in current snapshot of the state, we must increase previous value
        setCounter((prevState) => prevState + 1); // 2
      }}
    >
      {`${text} `}
      {counter}
    </button>
  );
};

const App = () => {
  return (
    <>
      {" "}
      {/*React.Fragment -> short version*/}
      <div>App</div>
      <div>
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
        <Button text={"Click me"} />
      </div>
    </>
  );
}; //functional component

export default App;
