import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import logo from '../../../assets/logo.png';

function Topo(): JSX.Element {
  return (
    <View style={estilos.topo}>
      <Image style={estilos.imagem} source={logo} />
      <Text style={estilos.boasVindas}>Ola Manoela</Text>
      <Text style={estilos.legenda}>Encontre os melhores produtores</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  topo:{
    backgroundColor: "#f6f6f6",
    padding: 16
  },
  imagem:{
    width: 70,
    height: 28
  },
  boasVindas:{
    marginTop:24,
    fontSize:26,
    lineHeight: 42,
    fontWeight:'bold'
  },
  legenda:{
    fontSize: 16,
    lineHeight: 26,
  }
})


export default Topo;
