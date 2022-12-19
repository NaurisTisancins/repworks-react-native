import React, { FC } from 'react';
import { View, TextInput, Text } from 'react-native';
import styled from 'styled-components/native';

interface INumberInputProps {
  title?: string;
  placeholder?: string;
}

export const NumberInput: FC<INumberInputProps> = ({ title, placeholder }) => {
  return (
    <View>
      {title && <Text>{title}</Text>}

      <ResistanceInputField
        keyboardType='number-pad'
        placeholder={placeholder ? placeholder : ''}
      />
    </View>
  );
};

const ResistanceInputField = styled(TextInput)`
  width: 100%;
  background: white;
  height: ${(props) => props.theme.sizes[2]};
  border-radius: ${({ theme }) => theme.sizes[0]};
  padding: ${({ theme }) => theme.sizes[0]};
`;
