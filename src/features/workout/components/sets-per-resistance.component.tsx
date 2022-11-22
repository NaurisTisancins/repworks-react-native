import React, { FC, useState } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { NumberInput } from './number-input.component';
import { ISetCollection } from './types';
import uuid from 'react-native-uuid';
import { FormButtonLabel, FormButton } from './workout.styles';

interface ISetsPerResistanceProps {
  createSetCollection: (data: ISetCollection) => void;
}

export const SetsPerResistance: FC<ISetsPerResistanceProps> = ({
  createSetCollection,
}) => {
  const [resistance, setResistance] = useState<number | undefined>();

  const saveResistance = () => {};

  return (
    <SetContainer>
      {resistance ? (
        <Text>Rest of the inputs</Text>
      ) : (
        <ResistanceInputContainer>
          <NumberInput placeholder='Weight' />

          <FormButton>
            <FormButtonLabel>Save</FormButtonLabel>
          </FormButton>
        </ResistanceInputContainer>
      )}
    </SetContainer>
  );
};

const SetContainer = styled(View)``;

const ResistanceInputContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
