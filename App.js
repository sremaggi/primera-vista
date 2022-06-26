import React from "react";
import { ImageBackground,Image,StyleSheet, Text, View,Button,Alert } from "react-native";

const Separator = () => (
  <View style={styles.separator} />
);


const App = () => (
  <View style={styles.container}>
    <ImageBackground source={require('./casa.jpg')} resizeMode="cover" style={styles.imageBackground}>
      <View style={styles.topContainer} >

      </View>


      <View style={styles.middleContainer}>
      <Text style={styles.text}>Hospedaje Primera Vista</Text>
      </View>
      
      <Separator/>
      <View style={styles.bottonContainer}>
      <Image 
       source={{uri:'https://picsum.photos/100'}}
       style={styles.image}
      />
       <Image 
       source={{uri:'https://picsum.photos/200'}}
       style={styles.image}
      />
       <Image 
       source={{uri:'https://picsum.photos/300'}}
       style={styles.image}
      />
      </View>
  
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  button:{
    color:'green',
  },
  topContainer: {
    flex: 5,

    justifyContent:'center',
    alignItems:'center',
  },
  middleContainer: {
    justifyContent:'flex-start',  
    flex:1,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
 

  bottonContainer:{
    marginTop:20,
    justifyContent:'space-around',
    flexDirection:'row',
    padding:10,
    flex:10,
  },

  image: {height:150,width:280,borderColor:'white',borderRadius:10},
  imageBackground: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 48,
    lineHeight: 50,
    textAlign: "center",
    backgroundColor: "#01BB33",
    opacity:0.8
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: '#008B26',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;