export const getQuote = () => {
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => {
      return res.json()
        .then(res => ({
          quote: res.quote,
          character: res.character,
          image: res.image
        }));
    });
};
