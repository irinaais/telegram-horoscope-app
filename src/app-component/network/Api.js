import { BASE_URL } from "../../utils/constants";

async function checkResponse(response) {
  if (response.ok) {
    return await response.json();
  }
  throw `Non-success response: ${response.status}`;
}

export async function getHoroscope(sign, language, period) {
  const horoscope = await fetch(`${BASE_URL}get_horoscope/`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({sign, language, period})
  })
  return await checkResponse(horoscope);
}
