import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Kdrama from './COMPONENTES/Kdramas';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloText}>Galeria de Kdramas</Text>
      <ScrollView>
      <Kdrama
        nombre = 'Propuesta laboral'
        imagen={require('./IMAGENES/uno.jpg')}
      ></Kdrama>

      <Kdrama
        nombre= 'Un amor verdadero'
        imagen={require('./IMAGENES/dos.jpg')}
      ></Kdrama>

      <Kdrama
      nombre= '25 21'
      imagen={require('./IMAGENES/tres.jpg')}
      ></Kdrama>

      <Kdrama
      nombre= 'Goblin'
      imagen={require('./IMAGENES/cuatro.jpg')}
      ></Kdrama>

      <Kdrama
      nombre= 'Desendientes del sol'
      imagen={require('./IMAGENES/sincoo.jpg')}
      ></Kdrama>

      <Kdrama
      nombre= 'La gloria'
      imagen={require('./IMAGENES/seis.jpg')}
      ></Kdrama>

      <Kdrama
      nombre= 'El zorro de las 9 colas'
      imagen={require('./IMAGENES/siete.jpg')}
      ></Kdrama>
      
      </ScrollView>
     
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingTop:30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
