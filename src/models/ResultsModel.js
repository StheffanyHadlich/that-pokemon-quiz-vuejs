import * as ResultsService from '../service/ResultsService';

export const getAll = async () => {
  return await ResultsService.getResults();
}

export const save = async (name, score) => {
  const result = mountResult(name, score)
  await ResultsService.save(result);
  return await getAll();
}

export const mountResult = (name, score) => {
  return {
    name: name,
    score: score
  }
}