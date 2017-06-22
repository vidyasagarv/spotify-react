import axios from 'axios';
const searchSpotify = (searchItem) => new Promise((resolve, reject) => {
  const ACCESS_TOKEN = 'BQCReBG8kSUnxjflMnK1bBKvH-6JI5eJaRNVBLeLivJgsu7pF-Flhrtg25a8m3ahE7vBkgBNt2AkCWjDnD-q6iGCiLtg9xig7fTJ1KyUtkJfP1G7J83Z3xNPlRf8jUrqzwtwKivZV56zYPAU-w2ldQDNoZ7fcARAJZfIK1LSzXRxxSwq54yuioxp6CMMc4QX35QYFQ8NmFHO3dqdXJNp-jTBCI7QhaqBEr5Q4gBJ3GDHgPCjMUUCbVFwBR4SAM3BcI-XHx36DFHPLEgmK7RbyUaWD83FV9qy3yUO7LOAvNLacc71bh8ftsxRdQIDHafiRZftOZcqoyWNQTJyInBLcfL_Gg';
  const OAUTH_TOKEN = `Bearer ${ACCESS_TOKEN}`;
  axios.defaults.headers.common.Authorization = OAUTH_TOKEN;
  const response = axios.get(`https://api.spotify.com/v1/search?q=${searchItem}&type=track`);
  response
    .then(({ data }) => resolve(data))
    .catch((err) => reject(err));
});

export default searchSpotify;
