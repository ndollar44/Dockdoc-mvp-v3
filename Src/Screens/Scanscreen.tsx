import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import SerialInput from '@/components/SerialInput';

export default function ScanScreen({ navigation }: any) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 16, gap: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: '700' }}>Scan or Enter Serial</Text>
        <SerialInput
          onSubmit={(serial) => navigation.navigate('Lookup', { serial })}
          onScan={() => navigation.navigate('Camera')}
        />
      </View>
    </SafeAreaView>
  );
}
