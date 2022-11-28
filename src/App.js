import "./App.css";
import Navbar from "./layouts/Navbar/Navbar";
import Settings from "./screens/Settings/Settings";
import store, { persistor } from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import axios from "axios";
import Warrior from "./screens/Warrior/Warrior";

const App = () => {
  axios.defaults.baseURL = "https://projectone.proxolab.com";

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Warrior />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Warrior />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
export default App;
