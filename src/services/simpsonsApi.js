export const getQuote = () => { 
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => res.json())
    .then(json => ({
      quote: json[0].quote, 
      characterImage: json[0].image, 
      characterName: json[0].character
    }));
};
