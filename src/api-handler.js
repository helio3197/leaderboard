const API_ENDPOINT = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/n9B80VeoxtTawkaIuSDA/scores/';

const sendData = async (name, score) => {
  const result = await fetch(API_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify({ user: name, score }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());

  return result;
};

const getData = async () => {
  const result = await fetch(API_ENDPOINT).then((res) => res.json());

  return result;
};

export { sendData, getData };