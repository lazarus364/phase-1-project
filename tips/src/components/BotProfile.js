import React from "react";

function BotProfile({ bot, onEnlist, onRelease, onDischarge }) {
  return (
    <div className="bot-profile">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <div className="button-group">
        <button onClick={() => onEnlist(bot)}>Enlist</button>
        <button onClick={() => onRelease(bot)}>Release</button>
        <button onClick={() => onDischarge(bot.id)}>X</button>
      </div>
    </div>
  );
}

export default BotProfile;
