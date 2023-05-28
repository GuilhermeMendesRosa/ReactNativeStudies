import { Text, StyleSheet } from 'react-native';

export default function Texto({ children, style }) {
    let estilo = estilos.texto;

    if (style?.fontWeight === 'bold') {
        estilo = estilos.textNegrito
    }

    return <Text style={[style, estilo]} >{children}</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular"
    },
    textNegrito: {
        fontFamily: 'MontserratBold',
        fontWeight: 'normal'
    }
});