import React, { FC, useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

import { NumberInput } from './number-input.component';
import { SetsPerResistance } from './sets-per-resistance.component';
import { FormInputContainer } from './workout.styles';
import { ISetCollection } from './types';


export const WorkoutForm: FC = () => {
  const [setCollection, setSetCollection] = useState<ISetCollection[]>([]);

  const createSetCollection = (newSetCollection: ISetCollection) => {
    setSetCollection((prev) => {
      return {
        ...prev,
        ...newSetCollection,
      };
    });
  };

  return (
    <FormInputContainer>
      <SetsPerResistance createSetCollection={createSetCollection} />
    </FormInputContainer>
  );
};
