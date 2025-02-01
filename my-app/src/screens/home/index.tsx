import { Text, TextInput, View } from 'react-native';
import { styles } from './style';

function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do evento"
        placeholderTextColor="#6b6b6b"
      />
    </View>
  );
}
export default Home;
