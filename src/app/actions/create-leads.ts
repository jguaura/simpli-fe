import { Lead } from "@/core/models/lead.model";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function createLead({ name, email }: Lead) {
  const apiUrl = `${baseUrl}/create-lead`;

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email })
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.error('Error creating lead:', error);
  }
}
