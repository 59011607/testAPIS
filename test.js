// test.js
import axios from "axios";

async function fetchData() {
  const options = {
    method: "GET",
    url: "https://football-prediction-api.p.rapidapi.com/api/v2/predictions",
    params: {
      market: "classic",
      iso_date: "2024-04-14",
      federation: "UEFA",
    },
    headers: {
      "X-RapidAPI-Key": "2e1807bcd2msh8e14489fe28bb09p15f061jsn4007914ee683",
      "X-RapidAPI-Host": "football-prediction-api.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
