import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import React, { useState } from 'react';

export default function EquipoScreen() {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleGuardar = () => {    
    Alert.alert('Registro Agregado', 'El equipo se ha registrado exitosamente.');    
    setId('');
    setNombre('');
    setCategoria('');
    setDescripcion('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Agregar Equipo</Text>
      <TextInput
        placeholder='Ingrese ID'
        style={styles.txt}
        keyboardType='numeric'
        onChangeText={setId}
        value={id}
      />
      <TextInput
        placeholder='Ingrese Nombre'
        style={styles.txt}
        onChangeText={setNombre}
        value={nombre}
      />
      <TextInput
        placeholder='Ingrese Categoría'
        style={styles.txt}
        onChangeText={setCategoria}
        value={categoria}
      />
      <TextInput
        placeholder='Ingrese Descripción'
        style={styles.textArea}
        multiline
        onChangeText={setDescripcion}
        value={descripcion}
      />
      <Button
        title='Guardar'
        onPress={handleGuardar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bfdab4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 40,
  },
  header: {
    color: '#17698c',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  txt: {
    backgroundColor: '#fff',
    height: 40,
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  textArea: {
    backgroundColor: '#fff',
    height: 80,
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});
