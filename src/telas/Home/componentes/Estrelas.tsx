import React, { useState } from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";

interface EstrelasProps {
  quantidade: number;
  editavel: boolean;
  grande: boolean;
}

import estrela from '../../../assets/estrela.png';
import estrelaCinza from '../../../assets/estrelaCinza.png';

function Estrelas({ quantidade: quantidadeAntiga, editavel = true, grande = true }: EstrelasProps): JSX.Element {
  const estilosFunction = StyleSheet.create({
    estrela: {
      width: grande ? 30 : 12,
      height: grande ? 30 : 12,
    },

    Estrelas: {
      flexDirection: 'row',
    },
  });

  const [quantidade, setQuantidade] = useState(quantidadeAntiga);

  const getImage = (i: number) => {
    return i < quantidade ? estrela : estrelaCinza;
  }

  const renderEstrelas = () => {
    const listaEstrelas = [];
    for (let i = 0; i < 5; i++) {
      listaEstrelas.push(
        <TouchableOpacity
          key={i}
          onPress={() => setQuantidade(i + 1)}
          disabled={!editavel}
        >
          <Image source={getImage(i)} style={estilosFunction.estrela} />
        </TouchableOpacity>
      );
    }
    return listaEstrelas;
  };

  return <View style={estilosFunction.Estrelas}>{renderEstrelas()}</View>;
}

export default Estrelas;
