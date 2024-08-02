import { Pressable, StyleSheet, Text } from 'react-native';
import { Colors } from '../assets/GlobalStyles';

const PrimaryButton = () => {
  return (
    // style={(pressed) => [styles.button, pressed ? styles.pressed : '']}
    <Pressable style={(pressed) => [styles.button, pressed ? styles.opacity : '']}>
      <Text style={styles.buttonText}>click button</Text>
    </Pressable>
  );
};
export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary800,
    borderRadius: 30,
    paddingHorizontal: 25,
    paddingVertical: 14,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
  opacity: {
    opacity: 0.6,
  },
});
