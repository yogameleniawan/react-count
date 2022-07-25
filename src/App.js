import React from "react";
import { Provider} from "react-redux";
import Increment from "./components/Increment";
import store from "./store"
const App= () => {
  return(
    <Provider store={store}>
      <div>
        <Increment/>
      </div>
    </Provider>
  )
}
export default App;