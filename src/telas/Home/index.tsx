import React from "react";
import Topo from "./componentes/Topo";
import Produtores from "./componentes/Produtores";
import { SafeAreaView, StyleSheet } from "react-native";


 function Home(): JSX.Element {
    return (
        <SafeAreaView style={estilos.tela}>
            <Produtores topoProps= {Topo}/>
        </SafeAreaView>
    );

}

const estilos = StyleSheet.create({
    tela:{
        flex: 1
    }
})

export default Home;