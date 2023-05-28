import React from 'react';
import { Image, StyleSheet, Dimensions, Text } from 'react-native';
import topo from '../../assets/topo.png';

export default function Cesta() {
    return (
        <>
            <Image source={topo} style={estilos.topo} />
            <Text style={estilos.titulo}>Detalhe da Sexta</Text>
        </>)
}

const width = Dimensions.get('screen').width;

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width
    },
    titulo: {
        width: '100%',
        position: 'absolute',
        marginTop: 200,
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 16,
        color: 'white',
        fontWeight: 'bold',
        padding: 16
    }
})