import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function CrearCrud() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Crear CRUD</Text>

      <TextInput 
        style={styles.input}
        placeholder="Ingresa tu nombre" 
        placeholderTextColor="#555"
      />

      <TextInput 
        style={styles.input}
        keyboardType="number-pad"
        placeholder="Ingresa tu DNI" 
        placeholderTextColor="#555"
      />

      <TextInput 
        style={styles.input}
        keyboardType="email-address"
        placeholder="Ingresa tu Email" 
        placeholderTextColor="#555"
      />

      <TextInput 
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ingresa tu celular" 
        placeholderTextColor="#555"
      />

      {/* Contenedor único para alinear los 4 botones horizontalmente */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>CREATE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>READ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>UPDATE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>DELETE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000080',
    padding: 20,
  },
  titulo: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 30,
    fontSize: 16,
    marginVertical: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#1fb42b',
    paddingVertical: 12,
    borderRadius: 30,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 11,
  },
});