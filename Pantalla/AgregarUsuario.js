import React, {useState} from 'react';
import { ScrollView, View, StyleSheet, TextInput, Button} from 'react-native';
import firebaseConfig from '../BaseDatos/firebaseConfig';

export default function App(props) {

    const [estado, setEstado] = useState({marca:"",subMarca:"",modelo:0, version:"",precio:0});

    const agregarAutomovil = () => { 
        if (estado.marca === '')
        {   alert('Faltan datos') }
        else{  
            firebaseConfig.db.collection('autos').add
            ({  marca: estado.marca, subMarca: estado.subMarca, modelo: estado.modelo,
                version: estado.version, precio: estado.precio  })
            .then((docRef) => {
                console.log("Documento agregado. ID: ", docRef.id);
                props.navigation.navigate('Lista');
            })
            .catch((error) => {
                console.error("Error al agregar el documento: ", error);
            });            
        }
    }    
    
    return (
      <ScrollView style={estilo.contenedorGeneral}>
        <View style={estilo.contenedorInput}>
            {/* onChangeText={(value) => console.log(value)} */}
            {/* onChangeText={(value) => setEstado({...estado, marca:value})} */}
            <TextInput placeholder='Marca del Auto' 
            onChangeText={(value) => setEstado({...estado, marca:value})}/>
        </View>
        <View style={estilo.contenedorInput}>
            <TextInput placeholder='SubMarca del Auto'
            onChangeText={(value) => setEstado({...estado, subMarca:value})}/>
        </View>
        <View style={estilo.contenedorInput}>
            <TextInput placeholder='Modelo del Auto'
            onChangeText={(value) => setEstado({...estado, modelo:value})}/>
        </View>
        <View style={estilo.contenedorInput}>
            <TextInput placeholder='Versión del Auto'
            onChangeText={(value) => setEstado({...estado, version:value})}/>
        </View>
        <View style={estilo.contenedorInput}>
            <TextInput placeholder='Precio del Auto'
            onChangeText={(value) => setEstado({...estado, precio:value})}/>
        </View>
        <View>
            <Button title='Guardar Datos' onPress={() => agregarAutomovil() } />
        </View>        
      </ScrollView>
    );
  }

const estilo = StyleSheet.create({
    contenedorGeneral: 
    {   flex: 1,    padding:35  },
    contenedorInput:
    {   flex:1, padding:0, marginBottom:15, borderBottomWidth:1, borderBottomColor:'#CCCCCC'   }
  });