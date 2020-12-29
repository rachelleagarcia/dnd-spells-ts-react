// ------------------------------------
// API for DND spell application
// ------------------------------------
const API_URL = 'https://api.open5e.com';

export async function apiGet(query: string) {
  const response = await fetch(`${API_URL}/${query}`).then((res) => res.json());
  return response;
}
