import React, { FC, useContext, useEffect, useState } from 'react';
import { Text, ScrollView, Modal } from 'react-native';
import {
  UtilityContainer,
  SecondaryButton,
  ButtonTitle,
} from './routine.styles';
import { WorkoutCard } from './workout-card.component';
import { RoutinesContext } from '../../../services/routines.service/routines.context';
import { IWorkout } from '../../../services/routines.service/types';
import { InputModal } from './input-modal.component';
import {
  SelectedRoutineStackScreens,
  SelectedRoutineStackNavigationProps,
} from '../../../infrastructure/navigation/types';
import { useNavigation } from '@react-navigation/native';

interface Props {
  startWorkout?: (workoutId: string) => void;
  navigate: () => void;
  edit: boolean;
  routineId?: string;
}

export const WorkoutList: FC<Props> = ({ navigate, edit, routineId }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {
    selectedRoutine,
    selectedWorkout,
    selectWorkout,
    selectRoutine,
    getWorkoutPlan,
    createWorkout,
  } = useContext(RoutinesContext);
  const navigation = useNavigation<SelectedRoutineStackNavigationProps>();

  useEffect(() => {
    if (!selectedWorkout) getWorkoutPlan();
  }, [selectedWorkout, selectedRoutine]);

  useEffect(() => {
    if (!selectedRoutine && routineId) selectRoutine(routineId);
  }, [selectedRoutine]);

  const createAndSelectWorkout = (data: IWorkout) => {
    const newWorkout: IWorkout = {
      ...data,
      done: false,
      exercises: [],
    };
    createWorkout(newWorkout);
    navigate();
    setModalVisible(false);
  };

  const selectWorkoutAndNavigate = (workoutId: string) => {
    selectWorkout(workoutId);
    if (selectedWorkout?.exercises.length === 0) {
      navigate();
      return;
    }
    navigation.navigate(SelectedRoutineStackScreens.WorkoutScreen);
  };

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
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
          title='Workout Name'
          func={createAndSelectWorkout}
        />
      </Modal>
      <UtilityContainer>
        {selectedRoutine &&
        selectedRoutine.workoutPlan &&
        selectedRoutine.workoutPlan.length ? (
          selectedRoutine.workoutPlan.map((workout: IWorkout) => {
            return (
              <UtilityContainer key={workout.id}>
                <WorkoutCard
                  workout={workout}
                  openWorkout={() => {
                    selectWorkoutAndNavigate(workout.id);
                  }}
                />
              </UtilityContainer>
            );
          })
        ) : (
          <>
            <UtilityContainer style={{ alignItems: 'center' }}>
              <Text>There are no workouts in this routine</Text>
            </UtilityContainer>

            <SecondaryButton
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <ButtonTitle>ADD A WORKOUT</ButtonTitle>
            </SecondaryButton>
          </>
        )}
      </UtilityContainer>

      {edit && (
        <SecondaryButton
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <ButtonTitle>ADD A WORKOUT</ButtonTitle>
        </SecondaryButton>
      )}
    </ScrollView>
  );
};
