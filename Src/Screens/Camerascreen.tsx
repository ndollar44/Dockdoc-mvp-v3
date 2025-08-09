import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function CameraScreen({ navigation }: any) {
  const [permission, requestPermission] = useCameraPermissions();
  const [barcodeGuess, setBarcodeGuess] = useState<string | undefined>(undefined);

  useEffect(() => { if (!permission?.granted) requestPermission(); }, [permission]);

  if (!permission?.granted) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems:'center', justifyContent:'center' }}>
        <Text>Camera permission is required.</Text>
        <TouchableOpacity onPress={requestPermission} style={{ padding:10, borderWidth:1, borderRadius:8, marginTop:10 }}>
          <Text>Grant Permission</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CameraView
        style={{ flex: 1 }}
        facing="back"
        barcodeScannerSettings={{ barcodeTypes: [BarCodeScanner.Constants.BarCodeType.qr, BarCodeScanner.Constants.BarCodeType.code128] }}
        onBarcodeScanned={(res)=>{ if (res?.data) setBarcodeGuess(res.data.toString()); }}
      />
      <View style={{ padding: 12 }}>
        <Text style={{ fontWeight:'700' }}>Detected</Text>
        <Text>Barcode: {barcodeGuess || '(none yet)'}</Text>
        <TouchableOpacity
          onPress={()=>{ if (barcodeGuess) navigation.replace('Lookup', { serial: barcodeGuess }); }}
          style={{ backgroundColor:'#111', padding:12, borderRadius:8, marginTop:8 }}
        >
          <Text style={{ color:'white', textAlign:'center' }}>Use This</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
