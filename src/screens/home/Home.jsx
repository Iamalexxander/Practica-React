import {
  Text,
  Heading,
  Button,
  Center,
  Image,
  VStack,
  Box,
  Divider,
} from "native-base";
import { Contenedor } from "../../components/contenedor/Contenedor";
import { ScrollView } from "react-native";

export const Home = ({ navigation }) => {
  const MenuCard = ({ title, description, route, imageUrl }) => (
    <Box bg="white" rounded="xl" shadow={3} p="4" mb="4">
      <Center>
        <Image
          size={150}
          mt="5"
          my="5"
          alt={`${title} Image`}
          borderRadius={100}
          borderWidth={3}
          borderColor="cyan.500"
          shadow={5}
          source={{
            uri: imageUrl
          }}
        />
      </Center>
      <Text color="cyan.600" fontSize="lg" fontWeight="bold" mb="2">
        {title}
      </Text>
      <Text fontWeight="medium" textAlign="justify" mb="3" color="gray.600">
        {description}
      </Text>
      <Button
        bg="cyan.500"
        _pressed={{ bg: "cyan.600" }}
        rounded="lg"
        shadow={2}
        onPress={() => navigation.navigate(route)}
      >
        Ir a {title}
      </Button>
    </Box>
  );

  return (
    <Contenedor>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={4} p="4">
          <Center>
            <Image
              size={150}
              mt="5"
              my="5"
              alt="Profile Image"
              borderRadius={100}
              borderWidth={3}
              borderColor="cyan.500"
              shadow={5}
              source={{
                uri: "https://static.wikia.nocookie.net/the-daily-life-of-the-immortal-king/images/d/df/Demon_master.jpg/revision/latest?cb=20220914163338"
              }}
            />
          </Center>

          <Box bg="white" p="5" rounded="xl" shadow={3}>
            <Heading textAlign="center" fontSize="2xl">
              Aplicación de prueba con{" "}
              <Text color="cyan.500" bold>
                react-native
              </Text>
            </Heading>
            <Text mt="3" fontWeight="medium" textAlign="center" color="gray.600">
              Esta aplicación fue hecha de prueba por Foxy
            </Text>
          </Box>

          <Divider my="2" />

          <MenuCard 
            title="Calculadora-IMC"
            description="Esta es una aplicación para calcular tu índice de masa corporal (IMC) ingresando tu peso y altura. El IMC es una medida usada para determinar si tienes un peso saludable según tu altura. Ingresa tus datos para obtener el resultado."
            route="Calculadora IMC"
            imageUrl="https://www.revistadiabetes.org/wp-content/uploads/Como-evaluar-en-peso-saludable.-Que-anadir-al-IMC.1.jpg"
          />

          <MenuCard
            title="Futbol"
            description="Esta pantalla presenta información sobre el fútbol, con una imagen de fondo que refleja la temática del deporte. El título 'Futbol' se destaca en la parte superior para orientar al usuario sobre el contenido de la página."
            route="Futbol"
            imageUrl="https://s1.significados.com/foto/imagen-de-destaque-que-es-el-futbol.-jugadores-y-balon.jpg"
          />

          <MenuCard
            title="Carros"
            description="Esta pantalla presenta información sobre automóviles, con una imagen de fondo que refleja la temática de los carros. El título 'Carros' se destaca en la parte superior para indicar el contenido de la página."
            route="Carros"
            imageUrl="https://st1.uvnimg.com/d4/4a/006304a74db4902c0b4d8d8026c8/chevrolet-corvette-c8-stingray-2020-1280-08.jpg"
          />

          <MenuCard
            title="API"
            description="Esta pantalla consume datos de la API de Rick and Morty y presenta una lista de personajes. Cada ítem de la lista está compuesto por una tarjeta personalizada que muestra el nombre, la especie y la imagen de cada personaje."
            route="Consumo API"
            imageUrl="https://rickandmortyjd.netlify.app/img/rick.jpg"
          />

          <MenuCard
            title="SQLITE"
            description="Esta pantalla nos servira para probar el mysqlite en el programa."
            route="Sqlite"
            imageUrl="https://lh6.googleusercontent.com/proxy/Iw7S760QwEKoYRokvLPlTxw7c4_ZMgffPJEg6-Vn1x4UBRAnF7QfGFxVawnLkOcfTNTRQ2zLp-XDRvaVj0eUZkSY516hSwN18SXsEkfAZQs"
          />
        </VStack>
      </ScrollView>
    </Contenedor>
  );
};
