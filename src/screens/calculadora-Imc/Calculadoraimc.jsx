import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from 'react-native';
import { NativeBaseProvider, Box, Center, Icon, VStack } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';

const image = require('../../../assets/IMC.png');

export default function Calculadoraimc () {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setIMC] = useState(null);
  const [error, setError] = useState('');

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso.replace(',', '.'));
    const alturaNum = parseFloat(altura.replace(',', '.'));

    if (isNaN(pesoNum) || isNaN(alturaNum) || pesoNum <= 0 || alturaNum <= 0) {
      setError('Por favor, ingrese valores válidos para peso y altura.');
      setIMC(null);
      return;
    }

    const resultado = pesoNum / (alturaNum * alturaNum);
    setIMC(resultado.toFixed(2));
    setError('');
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.overlay}>
            <Text style={styles.title}>Calculadora de IMC</Text>

            <VStack space={4} alignItems="center" style={{ width: '100%' }}>
              <TextInput
                style={styles.textinput}
                placeholder="Ingrese su peso (Kg)"
                keyboardType="numeric"
                value={peso}
                onChangeText={setPeso}
                placeholderTextColor="#ddd"
              />
              <TextInput
                style={styles.textinput}
                placeholder="Ingrese su altura (m)"
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
                placeholderTextColor="#ddd"
              />

              <Button
                title="Calcular IMC"
                color="#28a745"
                onPress={calcularIMC}
              />
            </VStack>

            {error ? (
              <Text style={styles.error}>{error}</Text>
            ) : (
              imc && (
                <Box alignItems="center" mt={4}>
                  <Text style={styles.resultado}>
                    Tu IMC es: {imc}
                  </Text>
                </Box>
              )
            )}
          </View>
        </ImageBackground>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: '#00000080',
    padding: 20,
    borderRadius: 10,
    width: '85%',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  textinput: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
    marginBottom: 10,
    width: '100%',
    padding: 10,
    borderRadius: 8,
  },
  error: {
    color: '#f00',
    fontSize: 16,
    marginTop: 10,
  },
  resultado: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
