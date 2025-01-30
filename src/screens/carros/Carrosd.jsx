import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from 'react-native';
import { NativeBaseProvider, Box, Center, Icon, VStack } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';

const image = require('../../../assets/carro.png');

export default function Carrosd () {
 
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.overlay}>
            <Text style={styles.title}>Futbol</Text>
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
});
