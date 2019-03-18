export const getQuotes = () => {
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => res.json());
};
