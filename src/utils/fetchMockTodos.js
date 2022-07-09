import axios from 'axios';

const fetchMockTodos = async () => {
  await axios(`https://dummyjson.com/todos?limit=8&skip=${Math.floor(Math.random() * 100)}`)
    .then(res => res)
    .catch(err => err);
};

export default fetchMockTodos;
