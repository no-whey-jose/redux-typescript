import { ActionType } from '../action-types';

interface SearchRepositoriesAction {
  type: ActionType.SEARCH_RESPOSITORIES,
};

interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_RESPOSITORIES_SUCCESS,
  payload: string[],
};

interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_RESPOSITORIES_ERROR,
  payload: string,
};

export type Action = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction