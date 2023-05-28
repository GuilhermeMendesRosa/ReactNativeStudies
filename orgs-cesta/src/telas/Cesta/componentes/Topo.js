import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

import Texto from '../../../componentes/Texto';

import topo from '../../../../assets/topo.png'

export default function Topo({ titulo }) {
    return (
        <>
            <Image style={estilos.topo} source={topo} />
            <Texto style={estilos.titulo}>{titulo}</Texto>
        </>
    )
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
        padding: 16,
        fontWeight: 'bold'
    },
})