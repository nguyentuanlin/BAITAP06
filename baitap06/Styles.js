// styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  navigateButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  inputContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    width: '80%',
    marginBottom: 20,
  },
  phoneNumberInput: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  icon: {
    marginBottom: 20,
  },
  quote: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#555',
    marginHorizontal: 20,
  },
});
