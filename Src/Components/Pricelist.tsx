
import React from 'react';
import { View, Text } from 'react-native';

export default function PriceList({ parts }:{ parts:{partNumber:string, price:number}[] }) {
  return (
    <View style={{ gap: 8 }}>
      {parts.map((p,i)=>(
        <View key={i} style={{ borderWidth:1, borderColor:'#ddd', borderRadius:8, padding:10 }}>
          <Text style={{ fontWeight:'700' }}>{p.partNumber}</Text>
          <Text>${p.price.toFixed(2)}</Text>
        </View>
      ))}
    </View>
  );
}
