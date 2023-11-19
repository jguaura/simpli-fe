"use server"

export async function fetchBikes(page: number) {
  const limit = 9;
  const apiUrl = `http://localhost:1337/bikes?page=${page}&limit=${limit}`;

  try {
    const response = await fetch(apiUrl)
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error', error);
    return null;
  }
}