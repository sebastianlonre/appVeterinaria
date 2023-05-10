import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
  Modal,
} from 'react-native';

import Formulario from './src/formulario';

function App() {
  const [sede, setSede] = useState('');
  const [fecha, setFecha] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Administración de citas</Text>
        <Text style={styles.subtitle}>
          Ingrese los datos de las citas veterinarias
        </Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nombre:</Text>
          <TextInput
            style={[styles.input, { color: '#ccc' }]}
            placeholder="Sede"
            placeholderTextColor="#ccc"
            value={sede}
            onChangeText={(text) => setSede(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Fecha:</Text>
          <TextInput
            style={[styles.input, { color: '#ccc' }]}
            placeholder="Fecha en que se solicita la cita"
            placeholderTextColor="#ccc"
            value={fecha}
            onChangeText={(text) => setFecha(text)}
          />
        </View>
        <Pressable style={styles.button} onPress={()=>setModalVisible(true)}>
          <Text style={styles.buttonText}>Consultar disponibilidad</Text>
        </Pressable>
      </View>
      <Modal animationType="slide" visible={modalVisible}>
      {modalVisible ? <Formulario modalVisible={modalVisible} setModalVisible={setModalVisible} /> : null}

      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    backgroundColor: '#f8a5c2',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
  },
  formContainer: {
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#f8a5c2',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
