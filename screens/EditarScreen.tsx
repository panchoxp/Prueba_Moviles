import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function EditarScreen() {
  const [id, setId] = useState('');
  const [monto, setMonto] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    // Simulando datos almacenados
    const datos = [
      { id: '1', monto: '100', categoria: 'Categoría 1', descripcion: 'Descripción A' },
      { id: '2', monto: '200', categoria: 'Categoría 2', descripcion: 'Descripción B' },
    ];
    setRegistros(datos);
  }, []);

  const handleEditar = () => {
    const index = registros.findIndex(reg => reg.id === id);
    if (index !== -1) {
      const nuevosRegistros = [...registros];
      nuevosRegistros[index] = { id, monto, categoria, descripcion };
      setRegistros(nuevosRegistros);
      Alert.alert('Registro Editado', 'El equipo se ha editado exitosamente.');
    } else {
      Alert.alert('Error', 'Registro no encontrado');
    }
  };

  const handleEliminar = () => {
    Alert.alert(
      'Confirmación',
      '¿Estás seguro de que deseas eliminar este registro?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          onPress: () => {
            const nuevosRegistros = registros.filter(reg => reg.id !== id);
            setRegistros(nuevosRegistros);
            Alert.alert('Registro Eliminado', 'El equipo se ha eliminado exitosamente.');
            // Limpiar los campos del formulario
            setId('');
            setMonto('');
            setCategoria('');
            setDescripcion('');
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Editar</Text>
      <TextInput
        placeholder='Ingresar id'
        style={styles.txt}
        keyboardType='numeric'
        onChangeText={setId}
        value={id}
      />
      <TextInput
        placeholder='Monto'
        style={styles.txt}
        onChangeText={setMonto}
        value={monto}
      />
      <TextInput
        placeholder='Categoría'
        style={styles.txt}
        onChangeText={setCategoria}
        value={categoria}
      />
      <TextInput
        placeholder='Descripción'
        style={styles.textArea}
        multiline
        onChangeText={setDescripcion}
        value={descripcion}
      />
      <Button
        title='Editar'
        onPress={handleEditar}
      />
      <Text style={styles.eliminarHeader}>Eliminar</Text>
      <TextInput
        placeholder='Ingresar id'
        style={styles.txt}
        keyboardType='numeric'
        onChangeText={setId}
        value={id}
      />
      <Button
        title='Eliminar'
        color='red'
        onPress={handleEliminar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    color: '#17698c',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
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
  eliminarHeader: {
    color: '#17698c',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 20,
    textAlign: 'center',
  },
});

