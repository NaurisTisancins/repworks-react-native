import produce from 'immer';
import { IState, IAction, ActionTypes } from './types';

export const createRoutine = (state: IState, { type, payload }: IAction) => {
  return produce(state, (draft) => {
    draft.routines?.push(payload);
  });
};

export const updateRoutine = (state: IState, { type, payload }: IAction) => {
  return produce(state, (draft) => {
    const index = state.routines?.findIndex((routine) => {
      return routine.id === draft.selectedRoutine?.id;
    });
    if (index && draft.selectedRoutine && draft.routines) {
      draft.routines[index] = draft.selectedRoutine;
    }
  });
};

export const selectRoutine = (state: IState, { type, payload }: IAction) => {
  return produce(state, (draft) => {
    const routine = draft.routines?.find((routine) => routine.id === payload);
    if (payload === null) {
      draft.selectedRoutine = undefined;
    }
    draft.selectedRoutine = routine;
  });
};

export const addWorkout = (state: IState, { type, payload }: IAction) => {
  return produce(state, (draft) => {
    draft.selectedRoutine?.workoutPlan.push(payload);
  });
};

export const addAndSelectWorkout = (
  state: IState,
  { type, payload }: IAction
) => {
  return produce(state, (draft) => {
    draft.selectedRoutine?.workoutPlan.push(payload);
    draft.selectedWorkout = payload;
  });
};

export const updateWorkout = (state: IState, { type, payload }: IAction) => {
  return produce(state, (draft) => {
    const index = state.selectedRoutine?.workoutPlan.findIndex((plan) => {
      return plan.id === draft.selectedWorkout?.id;
    });
    if (index && draft.selectedRoutine && draft.selectedWorkout) {
      draft.selectedRoutine.workoutPlan[index] = draft.selectedWorkout;
    }
  });
};

export const selectWorkout = (state: IState, { type, payload }: IAction) => {
  return produce(state, (draft) => {
    const workout = draft.selectedRoutine?.workoutPlan.find(
      (workout) => workout.id === payload
    );
    if (payload === null) {
      draft.selectedWorkout = undefined;
    }
    draft.selectedWorkout = workout;
  });
};

export const addExercise = (state: IState, { type, payload }: IAction) => {
  return produce(state, (draft) => {
    draft.selectedWorkout?.exercises.push(payload);
    console.log(draft.selectedWorkout);
  });
};
