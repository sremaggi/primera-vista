import React from "react";

import Ionicons from '@expo/vector-icons/Ionicons';

import {SocialIcon} from "react-native-elements";
import { ImageBackground,Image,StyleSheet, Text, View,Button,Alert,TouchableOpacity } from "react-native";
import { color } from "react-native-elements/dist/helpers";

const Separator = () => (
  <View style={styles.separator} />
);

const ButtonName = (props,navigation) => (
  <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('CaracteristicasPage')}>
  <Ionicons style={styles.homeIcon} name={props.name} size={40} color='white'  />
  <Text  style={{textAlign:'center', color:'white',fontWeight:'bold',fontSize:9}}>{props.text}</Text>
  </TouchableOpacity>
);

const Login = () => (
  <TouchableOpacity style={styles.loginButton}>
  <Ionicons style={styles.homeIcon} name="md-arrow-up-circle-sharp" size={32} color='black'  />
  <Text  style={{textAlign:'center', color:'black',fontWeight:'bold',fontSize:8}}>INGRESAR</Text>
  </TouchableOpacity>
);

const Register = () => (
  <TouchableOpacity style={styles.loginButton}>
  <Ionicons style={styles.homeIcon} name="md-arrow-down-circle-sharp" size={32} color='black'  />
  <Text  style={{textAlign:'center', color:'black',fontWeight:'bold',fontSize:8}}>REGISTRAR</Text>
  </TouchableOpacity>
);

const DisponibilidadVista = ()=>{

};

class CaracteristicasPage extends React.Component {  
  render() {  
      return (  
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
              <Text>Profile Screen</Text>  
          </View>  
  );  
  }  
}  


const App = () => (
  <View style={styles.container}>
    <ImageBackground source={require('./casa.jpg')} resizeMode="cover" style={styles.imageBackground}>
     
      <View style={styles.topContainer} >
      <Button title="Go to Home" onPress={() => navigation.navigate(CaracteristicasPage)} />
      <Login></Login>
      <Register></Register>
      </View>

      <View style={styles.middleContainer}>
      <Text style={styles.text}>Hospedaje Primera Vista</Text>
      </View>

      <View style={styles.lineImages}>

      <ButtonName name="home" text='CARACTERÍSTICAS'></ButtonName>
      <ButtonName name="calendar" text='DISPONIBILIDAD'></ButtonName>
      <ButtonName name="location" text='UBICACIÓN'></ButtonName>
     
      </View>
      <View style={styles.lineImages}>

      <ButtonName name="book" text='RESERVA'></ButtonName>
      <ButtonName name="star" text='EXPERIENCIAS'></ButtonName>
      <ButtonName name="call" text='CONTACTO'></ButtonName>
     
      </View>

      
      <View style={styles.bottonContainer}>

      </View>
  
      
  
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({

  container: {
    flex: 1,
    
  },
  loginButton:{
    borderWidth:0.3,
    borderColor:'white',
    borderRadius:20,
    height:'40%',
    width:'20%',
    margin:5
  },
  button:{
    width:'30%',
    height:'90%',
    borderWidth:0.3,
    flexDirection:'column',
    color:'white',
    justifyContent:'center',
    borderColor:'white',
    borderRadius:10,
   padding:10,

},
  topContainer: {
    flex: 1,
  
    flexDirection:'row-reverse',
    alignItems:'flex-end',
    direction:'RTL',
    padding:10,

  },
  middleContainer: {
    opacity:0.9,
    backgroundColor:'#00BD33',
   marginBottom:20,
  justifyContent:'center',
  textAlign:'center',  
    flex:0.6,
  },

  lineImages:{
    flex:0.8,
    flexDirection:'row',
    justifyContent:'space-around',
  },

  bottonContainer:{
    marginTop:20,
    flexDirection:'row',
    padding:10,
    flex:2,
  },

  image: {
    height:'80%',
    width:'25%',
    borderColor:'white',
    borderRadius:10,
    borderWidth:0.3,
    color:'white'
  },

  login: {
    height:'40%',
    width:'20%',
    borderColor:'white',
    borderRadius:10,
    fontSize:10
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center"
  },
  homeIcon:{
    textAlign:'center',
    margin:2
    
  },
  text: {
  fontFamily:"Georgia",
    fontWeight:'bold',
    opacity:1,
    justifyContent:'center',

    color:'white',
    fontSize:30,
    textAlign:'center'
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: '#008B26',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;