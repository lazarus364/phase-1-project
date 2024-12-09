import React from "react";
import BotProfile from "./BotProfile";

function MyBotArmy({ bots, releaseBot, dischargeBot }) {
  return (
    <div className="my-bot-army">
      <h2>Your Bot Army</h2>
      <div className="bot-grid">
        {bots.map((bot) => (
          <BotProfile
            key={bot.id}
            bot={bot}
            onEnlist={() => {}} 
            onRelease={releaseBot}  
            onDischarge={dischargeBot}  
          />
        ))}
      </div>
    </div>
  );
}

export default MyBotArmy;
