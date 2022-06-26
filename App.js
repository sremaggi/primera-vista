import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {SocialIcon,Icon,Fo} from "react-native-elements";
import { ImageBackground,Image,StyleSheet, Text, View,Button,Alert,TouchableOpacity } from "react-native";

const Separator = () => (
  <View style={styles.separator} />
);


const App = () => (
  <View style={styles.container}>
    <ImageBackground source={require('./casa.jpg')} resizeMode="cover" style={styles.imageBackground}>
     
      <View style={styles.topContainer} >
      <SocialIcon  iconColor="#00BD33" style={styles.login} button type="user" title="Login" onPress={()=> Alert.alert("Login")}/>
      </View>

      <View style={styles.middleContainer}>
      <Text style={styles.text}>Hospedaje Primera Vista</Text>
      </View>

      <View style={styles.lineImages}>

      <TouchableOpacity style={styles.button}>
      <FontAwesomeIcon icon="0" />
      <Text  style={{textAlign:'center'}}>CARCTERÍSTICAS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
      <SocialIcon  button type="address-card"/>
      <Text  style={{textAlign:'center'}}>DISPONIBILIDAD</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
      <SocialIcon  button type="camera"/>
      <Text  style={{textAlign:'center'}}>UBICACIÓN</Text>
      </TouchableOpacity>
     
      </View>
      <View style={styles.lineImages}>

      <TouchableOpacity style={styles.button}>
      <SocialIcon  button type="camera"/>
      <Text  style={{textAlign:'center'}}>TÚ RESERVA</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
      <SocialIcon  button type="camera"/>
      <Text  style={{textAlign:'center'}}>EXPERIENCIAS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
      <SocialIcon  button type="address-card"/>
      <Text  style={{textAlign:'center'}}>CONTACTO</Text>
      </TouchableOpacity>
     
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
  button:{
  width:'30%',
  height:'90%',
  borderWidth:0.3,
  color:'white',
  borderColor:'white',
  borderRadius:10,
  padding:10,

},
  topContainer: {
    flex: 1,
    flexDirection:'column-reverse',
    alignItems:'flex-end',
    direction:'RTL',

  },
  middleContainer: {
   marginTop:20,
   marginBottom:20,
    justifyContent:'center',
    textAlign:'center',  
    flex:0.3,
  },

  lineImages:{
    flex:0.8,
    flexDirection:'row',
    justifyContent:'space-around',
  },
  buttonsContainer: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
 

  bottonContainer:{
    marginTop:20,
    flexDirection:'row',
    padding:10,
    flex:2,
  },

  image: {height:'80%',width:'25%',
  borderColor:'white',borderRadius:10,borderWidth:0.3,color:'white'},
  login: {height:'40%',width:'20%',borderColor:'white',borderRadius:10, fontSize:10,},
  imageBackground: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    opacity:0.8,
    color:'white',
    backgroundColor:'#00BD33',
    lineHeight:50,
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