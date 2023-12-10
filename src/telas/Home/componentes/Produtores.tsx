import { useEffect, useState } from "react";
import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import Topo from '../componentes/Topo';
import { carregaProdutores } from "../../../servicos/carregaDados";
import Produtor from "./Produtor";

interface Produtor {
  nome: string;
  imagem: any;
  distancia: number; 
  estrelas: number;
}

interface ProdutoresProps {
  topoProps: {}; // ajuste conforme as propriedades reais do componente Topo
}

class Produtores extends React.Component<ProdutoresProps> {
  state = {
    titulo: '',
    lista: [] as Produtor[],
  };

  componentDidMount(): void {
    const retorno = carregaProdutores();
    this.setState({ titulo: retorno.titulo, lista: retorno.lista });
  }

  topoLista = () => {
    const { topoProps } = this.props;
    return (
      <>
        <Topo {...topoProps} />
        <Text style={estilos.titulo}>{this.state.titulo}</Text>
      </>
    );
  };

  render() {
    return (
      <FlatList
        data={this.state.lista}
        renderItem={({ item }) => <Produtor {...item}/>}
        keyExtractor={(item) => item.nome}
        ListHeaderComponent={this.topoLista}
      />
    );
  }
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
  
});

export default Produtores;
