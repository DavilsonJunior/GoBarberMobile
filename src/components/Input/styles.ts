import styled, { css } from 'styled-components/native';
import { TextInput as Input } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { theme } from '../../styles/theme';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: ${theme.colors.secondary};
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: ${theme.colors.secondary};

  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${theme.colors.error};
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${theme.colors.primary};
    `}
`;

export const TextInput = styled(Input)`
  flex: 1;
  color: ${theme.colors.text};
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

export const TextError = styled.Text`
  flex: 1;
  color: ${theme.colors.error};
  font-size: 14px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;
