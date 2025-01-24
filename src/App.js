import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import WeatherInfo from "./components/Weather";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Advanced To-Do Application</h1>
        <TaskInput />
        <TaskList />
        <WeatherInfo city="London" />
      </div>
    </Provider>
  );
};

export default App;
