import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../assets/GlobalStyles';
import { StyleSheet, View, TextInput } from 'react-native';

const FormTextInput = ({ onChange, value, placeholder, iconName, inputName }) => {
  return (
    <View style={styles.texInputContainer}>
      <Ionicons name={iconName} color={Colors.primary500} size={15} />
      <TextInput
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        style={styles.textInput}
        name={inputName}
      />
    </View>
  );
};

export default FormTextInput;

const styles = StyleSheet.create({
  headerContainer: {
    gap: 1,
  },
  texInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary500,
  },
  textInput: {
    paddingVertical: 5,
    flex: 1,
    paddingHorizontal: 3,
    color: Colors.grey,
  },
});
