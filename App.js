import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaUsuario from './Pantalla/ListaUsuario';
import AgregarUsuario from './Pantalla/AgregarUsuario';
import EliminarUsuario from './Pantalla/EliminarUsuario';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>        
        <Stack.Screen name="Lista" component={ListaUsuario } />
        <Stack.Screen name="Agregar" component={AgregarUsuario } />
        <Stack.Screen name="Eliminar" component={EliminarUsuario } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});