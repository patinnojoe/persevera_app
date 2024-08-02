import styled from 'styled-components/native';
import { Colors } from '../assets/GlobalStyles';
import { LinearGradient } from 'expo-linear-gradient';

const primary200 = Colors.primary200;
const primary100 = Colors.primary100;

export const AuthView = styled(LinearGradient).attrs({
  colors: [primary100, primary200],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  flex: 1;

  /* align-items: center; */
  padding: 0 25px;
`;
export const TextHeader = styled.Text`
  color: ${Colors.primary800};
  font-size: 30px;
  font-weight: 600;
  margin-top: 15%;
  margin-bottom: 0;
  padding: 0;
  text-align: center;
`;
export const SubText = styled.Text`
  color: ${Colors.grey};
  font-size: 16px;
  text-align: center;
`;
