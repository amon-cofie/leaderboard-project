const retrieveScores = async (container) => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/aZja2skU085HY4RT7lXA/scores/',
  );

  const data = await response.json();

  const { result } = data;

  container.innerText = '';
  result.forEach((item) => {
    const newScoreListItem = document.createElement('li');
    newScoreListItem.innerText = `${item.user}: ${item.score}`;
    container.appendChild(newScoreListItem);
  });
};

export default retrieveScores;
