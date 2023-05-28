import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Texto from '../../../componentes/Texto';

export default function Detalhes({ nome, logo, nomeFazenda, descricao, preco, botao }) {
    return (
        <>
            <Texto style={estilos.nome}> {nome} </Texto>
            <View style={estilos.viewTitulo} >
                <Image style={estilos.logo} source={logo} />
                <Texto style={estilos.nomeFazenda} > {nomeFazenda} </Texto>
            </View>
            <Texto style={estilos.descricao}> {descricao} </Texto>
            <Texto style={estilos.preco}> {preco} </Texto>
            <TouchableOpacity style={estilos.botao} >
                <Texto style={estilos.textoBotao} > {botao} </Texto>
            </TouchableOpacity>
        </>
    )
}

const estilos = StyleSheet.create({
    viewTitulo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
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
        lineHeight: 26,
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
    },
    botao: {
        marginTop: 16,
        backgroundColor: '#2A9F85',
        paddingVertical: 16,
        borderRadius: 6
    },
    textoBotao: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 26
    }
})