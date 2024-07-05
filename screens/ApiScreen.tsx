import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function ApiScreen() {
  const API_LIBROS = 'https://jritsqmet.github.io/web-api/libros.json';
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API_LIBROS)
      .then(response => response.json())
      .then(datos => setData(datos))
      .catch(error => console.log(error));
  }, []);

  type libros = {    
    titulo: string,
    genero: string,
    autor: { nombre: string, nacionalidad: string },
    descripcion: string,
    detalles: { imagen_portada: string }
  };

  return (
    <View>
      <Text style={styles.header}>Lista</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }: { item: libros }) => (
          <View style={styles.item}>
            <View>
              <Text style={styles.text}>Título: {item.titulo}</Text>
              <Text style={styles.text}>Género: {item.genero}</Text>
              <Text style={styles.text}>Autor: {item.autor.nombre}</Text>
              <Text style={styles.text}>Nacionalidad: {item.autor.nacionalidad}</Text>
              <Text style={styles.text}>Descripción: {item.descripcion}</Text>
            </View>
            <Image
              source={{ uri: item.detalles.imagen_portada }}
              style={styles.img}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    textAlign: 'center',
    marginVertical: 20,
  },
  item: {
    backgroundColor: '#666',
    margin: 5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    marginBottom: 5,
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  }
});
