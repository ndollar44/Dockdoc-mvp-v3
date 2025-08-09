import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import SerialInput from "../components/SerialInput";

export default function HomeScreen({ navigation }) {
  const [serial, setSerial] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>DockDoc - Home</Text>
      <SerialInput value={serial} onChange={setSerial} />
      <Button
        title="View Details"
        onPress={() => navigation.navigate("Details", { serial })}
      />
    </View>
  );
}
