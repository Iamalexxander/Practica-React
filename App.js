import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Asegúrate de instalar expo/vector-icons si no lo tienes.

import { Home } from './src/screens/home/Home';
import Calculadoraimc from './src/screens/calculadora-Imc/Calculadoraimc';
import Futbolito from './src/screens/Fútbol/Futbolito';
import Carrosd from './src/screens/carros/Carrosd';
import { Consumoapi } from './src/screens/consumoAPI/Consumoapi';

// Definimos el Tab Navigator
const Tab = createBottomTabNavigator();

function RootTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Inicio') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Calculadora IMC') {
            iconName = focused ? 'calculator' : 'calculator-outline';
          } else if (route.name === 'Futbol') {
            iconName = focused ? 'football' : 'football-outline';
          } else if (route.name === 'Carros') {
            iconName = focused ? 'car' : 'car-outline';
          } else if (route.name ==='Consumo API'){
            iconName = focused ? 'navigate-circle' : 'navigate-circle-outline';
          } else if (route.name ==='SQLite'){
            iconName = focused ? 'cloud' : 'cloud-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'white',
        },
      })}
    >
      <Tab.Screen name="Inicio" component={Home} />
      <Tab.Screen name="Calculadora IMC" component={Calculadoraimc} />
      <Tab.Screen name="Futbol" component={Futbolito} />
      <Tab.Screen name="Carros" component={Carrosd} />
      <Tab.Screen name='Consumo API' component={Consumoapi}/>
      <Tab.Screen name='SQLite' component={Consumoapi}/>

    </Tab.Navigator>
  );
}

// Componente principal de navegación
export default function App() {
  return (
    <NavigationContainer>
      <RootTabs />
    </NavigationContainer>
  );
}
