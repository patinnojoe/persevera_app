import { StyleSheet, Text, View } from 'react-native';
import { AuthView } from '../Wrappers';
import { SubText, TextHeader } from '../Wrappers/Auth';
import { FormTextInput, PrimaryButton } from '../components';
import { useState } from 'react';
import { Colors } from '../assets/GlobalStyles';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    userName: '',
  });

  // input change handler
  const handleInput = (value, inputName) => {
    setFormData((prevState) => ({
      ...prevState,
      [inputName]: value,
    }));
  };
  return (
    <AuthView>
      <View style={styles.headerContainer}>
        <TextHeader>Start Your Journey</TextHeader>
        <SubText>Create your free account</SubText>
      </View>
      <View style={styles.inputContainer}>
        <FormTextInput
          value={formData.email}
          iconName="mail"
          placeholder="Email"
          inputName="email"
          onChange={(value) => handleInput(value, 'email')}
        />
        <FormTextInput
          value={formData.userName}
          iconName="person"
          placeholder="userName"
          inputName="userName"
          onChange={(value) => handleInput(value, 'userName')}
        />
        <FormTextInput
          iconName="lock-closed"
          value={FormData.password}
          inputName="password"
          placeholder="Password"
          onChange={(value) => handleInput(value, 'password')}
        />
        <FormTextInput
          iconName="lock-closed"
          value={FormData.password}
          inputName="confirmPassword"
          placeholder="Confirm Password"
          onChange={(value) => handleInput(value, 'confirmPassword')}
        />
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.alreadyHaveText}>Already have an account?</Text>
        <PrimaryButton />
      </View>
    </AuthView>
  );
};
export default Register;

const styles = StyleSheet.create({
  headerContainer: {
    gap: 1,
  },
  inputContainer: {
    paddingTop: 45,
    gap: 30,
  },
  registerContainer: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  alreadyHaveText: {
    color: Colors.grey,
  },
});
