// api.js
export async function fetchWHOData() {
    try {
      const response = await fetch('https://www.who.int/api/hubs');
      const data = await response.json();
      return processData(data);
    } catch (error) {
      showError(error);
    }
  }