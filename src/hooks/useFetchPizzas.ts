import { Pizza } from '@/types/pizza';

export async function useFetchPizzas() {
  const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_URL!, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query PizzasQuery {
          pizzas {
            title
            description
            slug
            minimumPrice
            mediumPrice
            maximumPrice
            image {
              url
            }
          }
        }
      `,
    }),
  });

  const { data } = await response.json();

  return data.pizzas as Pizza[];
}
