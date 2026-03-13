export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  const hiddenBaseUrl = 'https://api.kiro.cheap'; // Your hidden API URL
  const url = new URL(request.url);
  const path = url.pathname.replace('/', ''); // Remove leading slash
  const newUrl = `${hiddenBaseUrl}/${path}${url.search}`;

  const response = await fetch(newUrl, {
    method: request.method,
    headers: request.headers,
    body: request.body,
  });

  // Clone the response to modify headers
  const modifiedResponse = new Response(response.body, response);
  modifiedResponse.headers.set('X-Proxy', 'true'); // Optional: Add a custom header

  return modifiedResponse;
}
