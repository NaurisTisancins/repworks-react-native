import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RoutinesContext } from '../../../services/routines.service/routines.context';
import { IExercise } from '../../../services/routines.service/types';

import { WorkoutFormCard } from './workout-form-card.component';

export const WorkoutFormList = () => {
  const { selectedWorkout } = useContext(RoutinesContext);
  return (
    <>
      {selectedWorkout?.exercises.length ? (
        selectedWorkout?.exercises.map((item: IExercise) => {
          return <WorkoutFormCard key={item.id} title={item.name} />;
        })
      ) : (
        <Text>There are no Exercises in your routine.</Text>
      )}
    </>
  );
};
