import React, { FC } from 'react';
import { Icon } from '@rneui/themed';

import {
  FormContainer,
  WorkoutFormCardContainer as CardContainer,
  WorkoutFormCardTitle as CardTitle,
  WorkoutFormCardTitleContainer as TitleContainer,
} from './workout.styles';
import { WorkoutForm } from './workout-form.component';

interface IWorkoutFormCardProps {
  title: string;
}

export const WorkoutFormCard: FC<IWorkoutFormCardProps> = ({ title }) => {
  const onClick = () => {
    console.log('Hello from workout form card');
  };
  return (
    <CardContainer>
      <TitleContainer>
        <CardTitle>{title}</CardTitle>
      </TitleContainer>
      <FormContainer>
        <WorkoutForm />
      </FormContainer>
    </CardContainer>
  );
};
