import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

export const FormContainer = styled.View`
  width: 100%;
  background: red;
  /* padding: ${(props) => props.theme.sizes[2]}; */
`;

export const FormInputContainer = styled.View`
  background: green;
  flex-direction: row;
  width: 100%;
`;

export const WorkoutFormCardContainer = styled.View`
  width: 100%;
  padding: ${(props) => props.theme.sizes[0]};
  background-color: ${(props) => props.theme.colors.ui.blue1};
  border-radius: ${(props) => props.theme.sizes[1]};
  margin-top: ${(props) => props.theme.sizes[1]};
`;

export const ExerciseFormListContainer = styled.View`
  width: 100%;
  padding: ${(props) => props.theme.sizes[0]};
  align-self: stretch;
`;

export const WorkoutFormCardTitle = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body};
  margin-left: ${(props) => props.theme.sizes[1]};
  color: #ffffff;
`;

export const FormButton = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.theme.sizes[2]};
  width: ${(props) => props.theme.sizes[3]};
  background-color: ${(props) => props.theme.colors.brand.primary};
  color: ${(props) => props.theme.colors.text.primary};
  margin: auto 0;
  border-radius: ${(props) => props.theme.sizes[0]};
  align-self: center;
`;

export const FormButtonLabel = styled(Text)``;

export const WorkoutFormCardTitleContainer = styled.View``;
