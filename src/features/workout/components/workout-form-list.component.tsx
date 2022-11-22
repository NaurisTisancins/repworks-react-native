import React, { useContext, useEffect, useMemo, useState } from 'react';
import { View, Text, ScrollView, Modal } from 'react-native';
import { RoutinesContext } from '../../../services/routines.service/routines.context';
import { IExercise } from '../../../services/routines.service/types';
import { InputModal } from '../../routine/components/input-modal.component';
import {
  SecondaryFormButton,
  ButtonTitle,
  UtilityContainer,
} from '../../routine/components/routine.styles';
import { WorkoutFormCard } from './workout-form-card.component';

export const WorkoutFormList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { selectedRoutine, getWorkoutPlan, selectedWorkout, addExercise } =
    useContext(RoutinesContext);

  const addExerciseToWorkoutPlan = (data: IExercise) => {
    const newExercise = {
      ...data,
    };
    addExercise(newExercise);
    setModalVisible(false);
  };

  useEffect(() => {
    console.log(selectedWorkout);
    console.log(selectedRoutine);
  }, []);

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      {selectedWorkout?.exercises && selectedWorkout?.exercises.length ? (
        selectedWorkout?.exercises.map((item: IExercise) => {
          return <WorkoutFormCard key={item.id} title={item.name} />;
        })
      ) : (
        <>
          <Modal
            animationType='slide'
            statusBarTranslucent={true}
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(false);
            }}
          >
            <InputModal
              closeModal={setModalVisible}
              title='Exercise Name'
              func={addExerciseToWorkoutPlan}
            />
          </Modal>
          <UtilityContainer>
            <Text>There are no Exercises in your routine.</Text>
          </UtilityContainer>
          <SecondaryFormButton onPress={() => setModalVisible(true)}>
            <ButtonTitle>Add Exercises</ButtonTitle>
          </SecondaryFormButton>
        </>
      )}
    </ScrollView>
  );
};
