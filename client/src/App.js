import React, {Fragment} from 'react';
import './App.css';

import InputPartner from "./components/InputPartner";
import ListPartners from "./components/ListPartners";
import EditPartners from "./components/EditPartner";

function App() {
  return (
  <Fragment>
    <div className="container">
      <InputPartner />
      <ListPartners />
    </div>
  </Fragment>
  );
}

export default App;
