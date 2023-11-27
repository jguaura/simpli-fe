'use server';
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function fetchProducts(page: number, route: string) {
  const limit = 12;
  const apiUrl = `${baseUrl}${route}?page=${page}&limit=${limit}`;

  try {
    const response = await fetch(apiUrl, { next: { tags: ['products'] } });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error', error);
    return null;
  }
}

export async function fetchProduct(id: string) {
  const idParams = id.split('-');
  const _id = idParams[1];
  const route = idParams[0];
  const apiUrl = `${baseUrl}/${route}?id=${_id}`;
  try {
    const response = await fetch(apiUrl, { next: { tags: ['product'] } });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error', error);
    return null;
  }
}
