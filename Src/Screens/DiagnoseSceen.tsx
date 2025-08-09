import React, { useState } from 'react';
import { View, Text, SafeAreaView, Switch, TouchableOpacity } from 'react-native';

export default function DiagnoseScreen({ route, navigation }: any) {
  const [symptoms, setSymptoms] = useState({
    hydraulicLeak: false, slowRise: false, wontHold: false, unevenLift: false, noisy: false,
  });
  const toggle = (k: keyof typeof symptoms) => setSymptoms(s => ({...s, [k]: !s[k]}));
  const likely = Object.entries(symptoms).filter(([_, v]) => v).map(([k]) => k.replace(/([A-Z])/g, ' $1'));

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 16, gap: 14 }}>
        <Text style={{ fontSize: 18, fontWeight: '700' }}>Basic Diagnostics</Text>
        {Object.keys(symptoms).map(k => (
          <View key={k} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text>{k.replace(/([A-Z])/g, ' $1')}</Text>
            <Switch value={(symptoms as any)[k]} onValueChange={() => toggle(k as any)} />
          </View>
        ))}
        <TouchableOpacity
          onPress={() => navigation.navigate('Results', { serial: route.params.serial, brand: route.params.brand, model: route.params.model })}
          style={{ backgroundColor: '#111', padding: 12, borderRadius: 8, marginTop: 12 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>See Results</Text>
        </TouchableOpacity>
        {likely.length ? (<View style={{ marginTop: 16 }}><Text style={{ fontWeight: '700' }}>Likely Issues:</Text>{likely.map((l,i)=><Text key={i}>• {l}</Text>)}</View>) : null}
      </View>
    </SafeAreaView>
  );
      }
