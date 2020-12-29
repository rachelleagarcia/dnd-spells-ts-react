// const API_URL = 'https://www.dnd5eapi.co/api';

// export async function apiGet(query: string) {
//   const response = await fetch(`${API_URL}/${query}`).then((res) => res.json());
//   return response;
// }
//https://api.open5e.com/spells/?search=acid
// spells/?name=Acid+Arrow

const API_URL = 'https://api.open5e.com';

export async function apiGet(query: string) {
  const response = await fetch(`${API_URL}/${query}`).then((res) => res.json());
  return response;
}
