import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";

const Formulario = ({ modalVisible, setModalVisible }) => {
  const [nombrePropietario, setNombrePropietario] = useState("");
  const [emailPropietario, setEmailPropietario] = useState("");
  const [telPropietario, setTelPropietario] = useState("");
  const [sintomas, setSintomas] = useState("");

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Agendar cita</Text>
          <Text style={styles.subtitle}>Ingrese los datos de la citas</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nombre del propietario:</Text>
            <TextInput
              style={[styles.input, { color: "#ccc" }]}
              placeholder="Nombre completo"
              placeholderTextColor="#ccc"
              value={nombrePropietario}
              onChangeText={(text) => setNombrePropietario(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={[styles.input, { color: "#ccc" }]}
              placeholder="example@mail.com"
              placeholderTextColor="#ccc"
              value={emailPropietario}
              onChangeText={(text) => setEmailPropietario(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Teléfono:</Text>
            <TextInput
              style={[styles.input, { color: "#ccc" }]}
              placeholder="Número de teléfono"
              placeholderTextColor="#ccc"
              keyboardType="numeric"
              value={telPropietario}
              onChangeText={(text) => setTelPropietario(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Síntomas:</Text>
            <TextInput
              style={[styles.input, { color: "#ccc" }]}
              placeholder="Síntomas del animal"
              placeholderTextColor="#ccc"
              value={sintomas}
              onChangeText={(text) => setSintomas(text)}
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <Pressable style={styles.button} onPress={() => setModalVisible(false)}>
            <Text style={styles.buttonText}>Cerrar</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
  
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

export default Formulario;