import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function WelcomeScreen({navigation}) {
    return (
        <ImageBackground
            source={{ uri: "https://salvemoslosbosques.com/wp-content/uploads/2023/10/hermoso-paisaje-bosque-montana-min-1024x683.jpg" }}
            style={styles.container}
        >
            <Text style={{ color: '#17698c', fontSize: 60, fontWeight: 'bold', marginBottom: 30, textAlign: 'center' }}>Francisco Sucuy</Text>
            <TouchableOpacity style={styles.btn}
                onPress={() => navigation.navigate('BottomTab')}
            >
                <View>
                    <Text style={{ textAlign: 'center', color: '#ffffff' }}>Ingresar</Text>
                </View>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: 'rgb(0, 216, 255)',
        borderRadius: 20,
        padding: 13,
        width: '50%',
        marginTop: 20
    },
});



