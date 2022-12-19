// import React, { FC } from 'react';
// import styled, { useTheme } from 'styled-components/native';
// import { Theme } from '../../infrastructure/theme/index';

// enum SizeVariant {
//   small = 1,
//   medium = 2,
//   large = 3,
// }

// export enum PositionVariant {
//   top = 'marginTop',
//   left = 'marginLeft',
//   right = 'marginRight',
//   bottom = 'marginBottom',
// }

// interface ISpacerProps {
//   position: PositionVariant;
//   size: SizeVariant;
//   children?: React.ReactNode;
// }

// const getVariant = (
//   theme: Theme,
//   position: PositionVariant = PositionVariant.top,
//   size: SizeVariant = SizeVariant.small
// ) => {
//   const sizeIndex = size;
//   const property = position;
//   const value = theme.space[sizeIndex];

//   return `${property}:${value}`;
// };

// const SpacerView = styled.View<{
//   variant: {
//     position: PositionVariant;
//     size: SizeVariant;
//     theme: Theme;
//   };
// }>`
//   ${({ variant }) => variant};
// `;

// export const Spacer: FC<ISpacerProps> = ({
//   position = 'top',
//   size = 'small',
//   children,
// }) => {
//   const theme = useTheme();
//   const variant = getVariant(theme, position, size);
//   return <SpacerView variant={variant}>{children}</SpacerView>;
// };
