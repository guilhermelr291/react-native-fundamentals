import { StyleSheet } from 'react-native';

//o flex direction no react native vem como column, por padrão. e o flex já é ativado por padrão.
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,

    backgroundColor: 'gray',
  },
  input: {
    flex: 1,
    backgroundColor: '#1F1E25',
    height: 56,
    width: 200,
    borderRadius: 5,
    color: 'white',
    padding: 16,
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flexDirection: 'row',
    width: '100%',
    gap: '8',
    marginTop: 36,
    marginBottom: 42,
  },
});
