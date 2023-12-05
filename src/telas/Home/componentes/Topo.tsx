import React from "react";
import { View, Image, Text } from "react-native";

import logo from '../../../../assets/logo.png';

function Topo(): JSX.Element {
  return (
    <View>
      <Image source={logo} />
    </View>
  );
}

export default Topo;
