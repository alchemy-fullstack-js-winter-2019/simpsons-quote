export const getQuote = () => {
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => res.json())
    .then(quotes => quotes[0]);
};