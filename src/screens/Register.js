import { StyleSheet, View } from 'react-native';
import { AuthView } from '../Wrappers';
import { SubText, TextHeader } from '../Wrappers/Auth';

const Register = () => {
  return (
    <AuthView>
      <View style={styles.headerContainer}>
        <TextHeader>Start Your Journey</TextHeader>
        <SubText>Create your free account</SubText>
      </View>
    </AuthView>
  );
};
export default Register;

const styles = StyleSheet.create({
  headerContainer: {
    gap: 1,
  },
});
