import axios from 'axios';
import { ActionType } from '../action-types';
import { Action } from '../actions';

const searchRepositories = (term: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionType.SEARCH_RESPOSITORIES,
    });

    try {
      const { data } = await axios.get('https://registry.npmjs.org/-/v1/search',{
        params: {
          text: term
        }
      });

      const names = data.object.map((result) => { return result.package.name});

      dispatch({
        type: ActionType.SEARCH_RESPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (error) {
      dispatch({
        type: ActionType.SEARCH_RESPOSITORIES_ERROR,
        payload: error.message,
      });
    }
  }
};
