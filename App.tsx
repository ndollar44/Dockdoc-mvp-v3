import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScanScreen from './src/screens/ScanScreen';
import CameraScreen from './src/screens/CameraScreen';
import LookupScreen from './src/screens/LookupScreen';
import DiagnoseScreen from './src/screens/DiagnoseScreen';
import ResultsScreen from './src/screens/ResultsScreen';

export type RootStackParamList = {
  Scan: undefined;
  Camera: undefined;
  Lookup: { serial?: string, brandGuess?: string } | undefined;
  Diagnose: { serial: string, brand: string, model?: string } ;
  Results: { serial: string, brand: string, model?: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Scan" component={ScanScreen} options={{ title: 'Scan Serial' }} />
        <Stack.Screen name="Camera" component={CameraScreen} options={{ title: 'Camera' }} />
        <Stack.Screen name="Lookup" component={LookupScreen} options={{ title: 'Lookup' }} />
        <Stack.Screen name="Diagnose" component={DiagnoseScreen} options={{ title: 'Diagnostics' }} />
        <Stack.Screen name="Results" component={ResultsScreen} options={{ title: 'Results' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
