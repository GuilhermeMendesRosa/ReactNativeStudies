import { Image, StyleSheet, View } from 'react-native';
import logo from '../../../../assets/logo.png';
import Texto from '../../../componentes/Texto';

export default function Detalhes() {
    return (
        <>
            <Texto style={estilos.nome}>Cesta de Verduras</Texto>
            <View style={estilos.viewTitulo} >
                <Image style={estilos.logo} source={logo} />
                <Texto style={estilos.nomeFazenda} >Jenny Jack Farm</Texto>
            </View>
            <Texto style={estilos.descricao}>Uma sexta com produtos selecionados
                cuidadosamente da fazenda direto
                para a cozinha
            </Texto>
            <Texto style={estilos.preco}>R$ 40,00</Texto>
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
    }
})