import React, { useMemo } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import PriceList from '@/components/PriceList';
import { computeQuote } from '@/utils/pricing';

export default function ResultsScreen({ route }: any) {
  const parts = [{ partNumber: '333-049', price: 129.95 }, { partNumber: 'HD-12345-L', price: 249.00 }];
  const partsSubtotal = parts.reduce((a,b)=>a+b.price,0);
  const quote = useMemo(()=>computeQuote(partsSubtotal),[partsSubtotal]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 16, gap: 14 }}>
        <Text style={{ fontSize: 18, fontWeight: '700' }}>Results</Text>
        <Text>Serial: {route.params.serial}</Text>
        <Text>Brand: {route.params.brand}</Text>
        {route.params.model ? <Text>Model: {route.params.model}</Text> : null}

        <View style={{ marginTop: 8 }}>
          <Text style={{ fontWeight: '700' }}>Parts & Prices (sample)</Text>
          <PriceList parts={parts} />
        </View>

        <View style={{ marginTop: 16 }}>
          <Text style={{ fontWeight: '700' }}>Estimate</Text>
          <Text>Labor (min 2 hrs @ $245): ${quote.labor.toFixed(2)}</Text>
          <Text>Parts (incl. 15% markup): ${quote.parts.toFixed(2)}</Text>
          <Text>Tax (MI 6% on parts): ${quote.tax.toFixed(2)}</Text>
          <Text style={{ fontSize: 16, fontWeight: '700', marginTop: 6 }}>Total: ${quote.total.toFixed(2)}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
