import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function SerialInput({ onSubmit, onScan }:{ onSubmit:(s:string)=>void; onScan:()=>void; }) {
  const [serial, setSerial] = useState('');
  return (
    <View style={{ gap: 12 }}>
      <Text style={{ fontWeight: '600', fontSize: 16 }}>Enter or Scan Serial Number</Text>
      <TextInput
        placeholder="e.g., 61147186"
        value={serial}
        onChangeText={setSerial}
        autoCapitalize="characters"
        style={{ borderWidth: 1, borderColor: '#999', padding: 12, borderRadius: 8 }}
      />
      <View style={{ flexDirection: 'row', gap: 12 }}>
        <TouchableOpacity onPress={() => onSubmit(serial.trim())} style={{ backgroundColor: '#111', padding: 12, borderRadius: 8 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onScan} style={{ borderColor: '#111', borderWidth: 1, padding: 12, borderRadius: 8 }}>
          <Text style={{ textAlign: 'center' }}>Scan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
