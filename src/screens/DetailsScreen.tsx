import React from "react";
import { View, Text } from "react-native";

export default function DetailsScreen({ route }) {
  const { serial } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Details for Serial:</Text>
      <Text style={{ fontWeight: "bold" }}>{serial}</Text>
    </View>
  );
}
