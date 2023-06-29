export const fetchHygraphQuery = async (query: string) => {
  const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`
    },
    next: {
      revalidate: 60 * 30
    },
    body: JSON.stringify({
      query
    })
  });

  const { data } = await response.json();

  return data;
};
