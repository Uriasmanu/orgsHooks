import React from 'react';
import { TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from 'react-native';

import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

interface EstrelaProps {
    onPress: () => void;
    desabilitada?: boolean;
    preenchida: boolean;
    grande?: boolean;
}

export default function Estrela({
    onPress,
    desabilitada = true,
    preenchida,
    grande = false,
}: EstrelaProps) {
    const estilos = estilosFuncao(grande);

    const getImagem = () => {
        return preenchida ? estrela : estrelaCinza;
    };

    return (
        <TouchableOpacity onPress={onPress} disabled={desabilitada}>
            <Image source={getImagem()} style={estilos.estrela} />
        </TouchableOpacity>
    );
}

const estilosFuncao = (grande: boolean) => StyleSheet.create({
    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12,
        marginRight: 2,
    },
});
