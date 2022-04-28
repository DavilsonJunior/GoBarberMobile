import styled from 'styled-components/native';
import { theme } from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${theme.colors.textSecondary};
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;