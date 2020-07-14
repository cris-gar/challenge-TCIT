import React from 'react';
import Home from "./pages/Home";
import { Provider } from "react-redux";
import posts from "./posts";

const App = () => {
    return (
      <Provider store={posts}>
          <Home />
      </Provider>
  )
}

export default App;
