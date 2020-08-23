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

export async function createWordGroupFolder(name) {
  try {
    const response = await fetch(`${API_URL}/folder/${name}`, {
      method: "POST",
    });
    if (!response.ok) {
      console.log(response);
      return {};
    }
    return response.json();
  } catch (e) {
    console.log(e);
  }
}

export async function moveNameToNewFolder(data) {
  try {
    const response = await fetch(`${API_URL}/move`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.log(response);
      return {};
    }
    return response.json();
  } catch (e) {
    console.log(e);
  }
}
