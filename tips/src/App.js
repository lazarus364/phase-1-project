import React, { useState, useEffect } from "react";
import AllBots from "./components/AllBots";
import MyBotArmy from "./components/MyBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const enlistBot = (bot) => {
    
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id)); 
  };

  const dischargeBot = (id) => {
    fetch(`http://localhost:8001/bots/${id}`, {
      method: "DELETE",
    }).then(() => {
      setBots(bots.filter((bot) => bot.id !== id));
      setArmy(army.filter((bot) => bot.id !== id));
    });
  };

  return (
    <div className="app">
      <MyBotArmy
        bots={army}
        releaseBot={releaseBot}
        dischargeBot={dischargeBot}
      />
      <AllBots
        bots={bots}
        enlistBot={enlistBot}
        dischargeBot={dischargeBot}
      />
    </div>
  );
}

export default App;
