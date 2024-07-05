import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert, StyleSheet } from 'react-native';

const Informacion = ({ item }) => (
  <View style={styles.item}>
    <Text>{item.nombre}</Text>
  </View>
);

export default function RegistroScreen() {
  const [id, setId] = useState('');
  const [registro, setRegistro] = useState(null);
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    // Simulando datos almacenados
    const datos = [
      { id: '1', nombre: 'Equipo A', categoria: 'Categoria 1', descripcion: 'Descripción A' },
      { id: '2', nombre: 'Equipo B', categoria: 'Categoria 2', descripcion: 'Descripción B' },
    ];
    setRegistros(datos);
  }, []);

  const handleBuscar = () => {
    const registroEncontrado = registros.find(reg => reg.id === id);
    if (registroEncontrado) {
      setRegistro(registroEncontrado);
    } else {
      Alert.alert('Error', 'Registro no encontrado');
    }
  };

  const handleSeleccionar = (item) => {
    Alert.alert('Información del Registro', `ID: ${item.id}\nNombre: ${item.nombre}\nCategoría: ${item.categoria}\nDescripción: ${item.descripcion}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Buscar Registro por ID</Text>
      <TextInput
        placeholder='Ingrese ID'
        style={styles.txt}
        keyboardType='numeric'
        onChangeText={setId}
        value={id}
      />
      <Button title='Buscar' onPress={handleBuscar} />
      {registro && (
        <View style={styles.registro}>
          <Text>ID: {registro.id}</Text>
          <Text>Nombre: {registro.nombre}</Text>
          <Text>Categoría: {registro.categoria}</Text>
          <Text>Descripción: {registro.descripcion}</Text>
        </View>
      )}
      <Text style={styles.header}>Lista de Registros</Text>
      <FlatList
        data={registros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Informacion item={item} onPress={() => handleSeleccionar(item)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e0f7fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  txt: {
    backgroundColor: '#fff',
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  registro: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: '#c1f0c1',
  },
  item: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#c1f0c1',
  },
});
