import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View,  } from "react-native";
import produtores from "../../../mocks/produtores"; // Altere o caminho conforme necessário
import Estrelas from "./Estrelas";
import { useState } from "react";

interface ProdutorProps {
  nome: string;
}

function Produtor({ nome }: ProdutorProps) {
  // Encontrar o produtor com base no nome
  const produtorEncontrado = produtores.lista.find((produtor) => produtor.nome === nome);

  // Verificar se o produtor foi encontrado
  if (!produtorEncontrado) {
    return null; // Ou algum comportamento padrão, caso o produtor não seja encontrado
  }

  const { imagem, distancia, estrelas } = produtorEncontrado;
  const [selecionado, setSelecionado] = useState(false);

  return (
    <TouchableOpacity 
    style={estilos.container}
    onPress={() => setSelecionado(!selecionado)}
    
    >
      <Image source={imagem} accessibilityLabel={nome} style={estilos.imagem} />

      <View style={estilos.informacoes}>
        <View>
          <Text style={estilos.nome}>{nome}</Text>
          <Estrelas 
          quantidade={estrelas} 
          editavel={selecionado} 
          grande={selecionado} />
        </View>
        
        <Text style={estilos.distancia}>{distancia}</Text>
      </View>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
    container:{
        backgroundColor: "#f6f6f6",
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        borderRadius: 6,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    
    imagem:{
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16
    },

    informacoes:{
        flex:1,
        flexDirection: "row",
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16

    },

    nome:{
        fontSize:14,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    distancia:{
        fontSize: 12,
        lineHeight: 19,
    }
});

export default Produtor;
