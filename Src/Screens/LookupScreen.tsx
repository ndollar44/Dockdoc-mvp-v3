import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import brands from '@/data/brands.json';

export default function LookupScreen({ route, navigation }: any) {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const serial = route.params?.serial || '';

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 16, gap: 14 }}>
        <Text style={{ fontSize: 18, fontWeight: '700' }}>Confirm Details</Text>
        <Text>Serial</Text>
        <TextInput editable={false} value={serial} style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 8 }} />

        <Text>Brand</Text>
        <TextInput
          placeholder="Select or type brand"
          value={brand}
          onChangeText={setBrand}
          style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 8 }}
        />
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
          {(brands as any).brands.map((b: string) => (
            <TouchableOpacity key={b} onPress={() => setBrand(b)}>
              <Text style={{ padding: 6, borderWidth: 1, borderRadius: 8 }}>{b}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text>Model (optional)</Text>
        <TextInput
          placeholder="e.g., SHR50"
          value={model}
          onChangeText={setModel}
          style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 8 }}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate('Diagnose', { serial, brand, model: model || undefined })}
          style={{ backgroundColor: '#111', padding: 12, borderRadius: 8, marginTop: 10 }}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
