import React from 'react';
import { TextInputProps } from 'react-native';
import { theme } from '../../styles/theme';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => (
  <Container>
    <Icon name={icon} size={20} color={theme.colors.placeholder} />
    <TextInput
      keyboardAppearance="dark"
      placeholderTextColor={theme.colors.placeholder}
      {...rest}
    />
  </Container>
);

export default Input;
