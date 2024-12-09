export const fetchBots = async () => {
    const response = await fetch("http://localhost:8001/bots");
    return response.json();
  };
  
  export const deleteBot = async (id) => {
    await fetch(`http://localhost:8001/bots/${id}`, { method: "DELETE" });
  };
  