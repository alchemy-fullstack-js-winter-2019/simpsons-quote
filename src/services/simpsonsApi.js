export const getQuote = () => {
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => {
      return res.json() 
        .then(res => {
          return {
            quote: res[0].quote,
            character: res[0].character,
            image: res[0].image
          };
        });
    });
};
