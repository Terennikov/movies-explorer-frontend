import { makeRequest } from "./utils";
import { MOVIES_URL } from "./constants";

export async function getCards() {
  return await makeRequest(MOVIES_URL, "/beatfilm-movies", "GET");
}
