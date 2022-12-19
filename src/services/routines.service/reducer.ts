import {
  addExercise,
  addWorkout,
  createRoutine,
  selectRoutine,
  selectWorkout,
  updateRoutine,
  updateWorkout,
} from './stateFunctions';
import { IState, IAction, ActionTypes } from './types';

export const reducer: React.Reducer<IState, IAction> = (
  state: IState,
  { type, payload }: IAction
): IState => {
  switch (type) {
    case ActionTypes.CREATE_ROUTINE:
      return createRoutine(state, { type, payload });

    case ActionTypes.UPDATE_ROUTINE:
      return updateRoutine(state, { type, payload });

    case 'delete-routine':
      return state;

    case ActionTypes.SELECT_ROUTINE:
      return selectRoutine(state, { type, payload });

    case ActionTypes.ADD_WORKOUT:
      return addWorkout(state, { type, payload });

    case ActionTypes.UPDATE_WORKOUT:
      return updateWorkout(state, { type, payload });

    case ActionTypes.SELECT_WORKOUT:
      return selectWorkout(state, { type, payload });

    case ActionTypes.ADD_EXERCISE:
      return addExercise(state, { type, payload });

    case 'delete-workout':
      return state;
    case 'delete-exercise':
      return state;

    default:
      return state;
  }
};
