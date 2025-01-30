import React, { useEffect, useState } from "react";
import { Text, Box, HStack, Avatar, VStack } from "native-base"; // Eliminé el import de 'Card' de native-base
import { ActivityIndicator, FlatList } from "react-native";
import { Contenedor } from "../../components/contenedor/Contenedor";
import { StyleSheet } from "react-native";
import { ImageBackground, View } from "react-native";
import { Card } from "../../components/card/Card"; // Usando solo tu Card personalizado

const api = require("../../../assets/api.png");

export const Consumoapi = () => {
  const [data, setData] = useState([]);
  const [isloading, setLoading] = useState(true);

  const getPersonajes = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPersonajes();
  }, []);

  return (
    <Contenedor>
      <ImageBackground  resizeMode="repeat" source={api} style={styles.image}>
        <Box style={styles.container}>
          {isloading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={data}
              keyExtractor={({ id }) => id.toString()} 
              renderItem={({ item }) => (
                <Card url={item.image} nombre={item.name} especie={item.species} />
              )}
            />
          )}
        </Box>
      </ImageBackground>
    </Contenedor>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "#00000080",
    padding: 20,
    borderRadius: 10,
    width: "85%",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  textinput: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
    marginBottom: 10,
    width: "100%",
    padding: 10,
    borderRadius: 8,
  },
});
