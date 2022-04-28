import styled from 'styled-components/native';
import { TextInput as Input } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { theme } from '../../styles/theme';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: ${theme.colors.secondary};
  border-radius: 10px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
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
