import React from "react";
import BotProfile from "./BotProfile";

function AllBots({ bots, enlistBot, dischargeBot }) {
  return (
    <div className="all-bots">
      <h2>Bot Collection</h2>
      <div className="bot-grid">
        {bots.map((bot) => (
          <BotProfile
            key={bot.id}
            bot={bot}
            onEnlist={enlistBot}  
            onRelease={() => {}}  
            onDischarge={dischargeBot}  
          />
        ))}
      </div>
    </div>
  );
}

export default AllBots;
