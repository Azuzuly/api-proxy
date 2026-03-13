export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  const hiddenBaseUrl = 'https://api.kiro.cheap'; // Replace with your hidden API URL
  const url = new URL(request.url);
  const newUrl = hiddenBaseUrl + url.pathname + url.search;

  const response = await fetch(newUrl, {
    method: request.method,
    headers: request.headers,
    body: request.body,
  });

  return response;
}
