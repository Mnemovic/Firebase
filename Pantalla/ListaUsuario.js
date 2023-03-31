import React, {useState, useEffect} from 'react';
import { ScrollView, View, StyleSheet, TextInput, Button} from 'react-native';
import { ListItem, Avatar } from '@rneui/themed';
import firebaseConfig from '../BaseDatos/firebaseConfig';
import { ListItemContent } from '@rneui/base/dist/ListItem/ListItem.Content';
import { ListItemTitle } from '@rneui/base/dist/ListItem/ListItem.Title';
import { ListItemSubtitle } from '@rneui/base/dist/ListItem/ListItem.Subtitle';

export default function App(props) {

    const [autos, setAutos] = useState([]);

    useEffect(() => { 
        firebaseConfig.db.collection('autos').get()
        .then((querySnapshot) => {
            const autos = [];
            querySnapshot.forEach((doc) => { 
                const {marca, subMarca, modelo, version, precio} = doc.data(); 
                autos.push({id:doc.id, marca, subMarca, modelo, version, precio});
            });
            setAutos(autos);
            console.log({autos});
    })},[])   
    {/*A QuerySnapshot contains zero or more QueryDocumentSnapshot objects representing 
      the results of a query. The documents can be accessed as an array via the docs 
      property or enumerated using the forEach method. The number of documents can be 
      determined via the empty and size properties. */}

    return (
      <ScrollView style={estilo.contenedorGeneral}>
        <View>
            <Button title='Agregar Auto' onPress={() => props.navigation.navigate('Agregar') } />
        </View>
        {
          autos.map(auto => { return(
              <ListItem key={auto.id} bottomDivider onPress={() => props.navigation.navigate('Eliminar',{autoId:autos.id})}>
                  <ListItem.Chevron/>
                  <Avatar source={{uri:'https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629_960_720.png'}} rounded/>
                  <ListItemContent>
                      <ListItemTitle>{auto.marca} - {auto.subMarca} - {auto.modelo}</ListItemTitle>
                      <ListItemSubtitle>{auto.version} - ${auto.precio}</ListItemSubtitle>
                  </ListItemContent>
              </ListItem>)})
        }
                
      </ScrollView>
    );
  }

const estilo = StyleSheet.create({
    contenedorGeneral: 
    {   flex: 1,    padding:35  },
    contenedorInput:
    {   flex:1, padding:0, marginBottom:15, borderBottomWidth:1, borderBottomColor:'#CCCCCC'   }
  });