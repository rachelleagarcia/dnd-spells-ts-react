const API_URL = 'https://www.dnd5eapi.co/api';

export async function apiGet(query: string) {
  const response = await fetch(`${API_URL}/${query}`).then((res) => res.json());
  return response;
}
