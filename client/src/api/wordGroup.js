const API_URL = "http://localhost:5000";

export async function getWordGroupFolder() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      console.log(response);
      return {};
    }
    return response.json();
  } catch (e) {
    console.log(e);
  }
}
