import { NativeBaseProvider, View } from "native-base";
import { StyleSheet } from "react-native";

export const Contenedor = ({children})=>{
    return <NativeBaseProvider>
        <View>
            {children}
        </View>
    </NativeBaseProvider>
}

const estilos = StyleSheet.create ({
    View: {

    }
})