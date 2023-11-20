"use server"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function fetchProducts(page: number) {
  const limit = 12;
  const apiUrl = `${baseUrl}?${page}&limit=${limit}`;

  try {
    const response = await fetch(apiUrl)
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error', error);
    return null;
  }
}

export async function fetchProduct(id: string) {
  const apiUrl = `${baseUrl}?id=${id}`;
  try {
    const response = await fetch(apiUrl)
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error', error);
    return null;
  }
}