import { store } from ".";
import { Statistics } from "./Statistics";

function App() {

  const dispatch = (type) => {
    console.log(type)
    store.dispatch({ type })
  }

  return (
    <div className="App">
      <button id='GOOD' onClick={(e) => dispatch(e.target.id)}>Good</button>
      <button id='OK' onClick={(e) => dispatch(e.target.id)}>OK</button>
      <button id='BAD' onClick={(e) => dispatch(e.target.id)}>BAD</button>
      <br/>
      <h2>Statistics</h2>
      {store.getState().good || store.getState().ok || store.getState().bad ? (
        <>
          <Statistics good={store.getState().good} bad={store.getState().bad} neutral={store.getState().ok} />
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
}

export default App;
