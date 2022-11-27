import "./App.css";
import Navbar from "./layouts/Navbar/Navbar";
import Settings from "./screens/Settings/Settings";
import store, { persistor } from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import axios from "axios";

const App = () => {
  const warriors = [
    {
      id: 1,
      name: "Savaşçı 1",
      hp: 100,
      skills: [
        {
          id: 1,
          skill_type: 1,
          skill_type_option: 1,
          point: 10,
        },
        {
          id: 2,
          skill_type: 2,
          skill_type_option: 2,
          point: 20,
        },
      ],
    },
    {
      id: 2,
      name: "Savaşçı 2",
      hp: 100,
      skills: [
        {
          id: 1,
          skill_type: 1,
          skill_type_option: 1,
          point: 10,
        },
        {
          id: 2,
          skill_type: 2,
          skill_type_option: 2,
          point: 20,
        },
      ],
    },
  ];
  axios.defaults.baseURL = "https://projectone.proxolab.com";

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          {/* <ToastContainer /> */}
          <Navbar />
          <Routes>
            {/* <Route path="/warrior" element={<Warrior />} /> */}
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
export default App;
