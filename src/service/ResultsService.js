import axios from 'axios';

export const getResults = async () => {
  const result = await axios.get('http://localhost:3000/results')
  return result.data;
}
  

export const save = async (data) => {
  const result = await axios.post('http://localhost:3000/results', data)
  return result.data;
}
  