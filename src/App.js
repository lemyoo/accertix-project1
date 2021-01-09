import {Provider} from "react-redux"
import store from "./store"
import 'bootstrap/dist/css/bootstrap.min.css'

import Entry from "./view/Entry"


function App() {
  return (
    <Provider store={store}>
      <Entry />
    </Provider>
  );
}

export default App;
