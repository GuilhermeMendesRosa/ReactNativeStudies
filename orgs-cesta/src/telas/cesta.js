import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

import logo from '../../assets/logo.png';
import topo from '../../assets/topo.png';

export default function Cesta() {
    return (
        <>
            <Image source={topo} style={estilos.topo} />
            <Text style={estilos.titulo}>Detalhe da Sexta</Text>

            <View style={estilos.cesta}>
                <View style={estilos.viewTitulo} >
                    <Image style={estilos.logo} source={logo} />
                    <Text style={estilos.nome}>Cesta de Verduras</Text>
                </View>
                <Text style={estilos.nomeFazenda} >Jenny Jack Farm</Text>
                <Text style={estilos.descricao}>Uma sexta com produtos selecionados
                    cuidadosamente da fazenda direto
                    para a cozinha
                </Text>
                <Text style={estilos.preco}>R$ 40,00</Text>
            </View>
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
        marginTop: 50,
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 16,
        color: 'white',
        fontWeight: 'bold',
        padding: 16
    },
    viewTitulo: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },
    logo: {
        height: 30,
        width: 30
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold"
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26
    },
    descricao: {
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
})