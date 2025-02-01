import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { styles } from './style';

function Home() {
  function handleParticipantAdd() {
    console.log('Botão clicado');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        {/* essa região abaixo é clicável. é como se fosse um botão */}
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Home;
