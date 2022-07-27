import React, { Component } from 'react';
import { 
    
    Text,
     View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image,
    } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}   >
                <SafeAreaView style={styles.AndroidSafeArea}/>
                <ImageBackground source={require("../assets/bg_image.png")}style={styles.backgroundImage}>

                <View style={styles.TitleBar}>
                    <Text style={styles.TitleText}>  ISS Tracker App  </Text> 
                    </View>  

                    <TouchableOpactiy style={styles.routeCard}onPress={() =>{
                        this.props.navigation.navigate("ISS Location")
                    }}>
                    <Text style={styles.routeText}>   ISS Loction </Text>
                    <Text style={styles.knowMore}> { "knowMore" }</Text>
                    <Text style={styles.bgDigit}> 1</Text>
                    <Image source={require("../assets/iss_icon.png")} style={styles.iconImage}></Image>
                    </TouchableOpactiy>

                    
                   <TouchableOpacity style={styles.routeCard}onPress={() =>{
                       this.props.navigation.navigate("IMeteor Tracker") 
                   }}    >
                    <Text style={styles.routeText}> Meteor Tracker </Text>
                    <Text style={styles.knowMore}> {"knowMore"} </Text>
                    <Text style={styles.bgDigit}> 2 </Text>
                    <Image source={require("../assets/meteor_icon.png")} style={styles.iconImage}></Image>
                   </TouchableOpacity>
                </ImageBackground>
               
            </View>
        )
    }
}

    const style =styleSheet.create({
        container:{
            flex:1
        },
        backgroundImage:{
            flex:1,
            resizeMode:'cover',
        },
        routeCard:{
            flex:0.25,
            marginLeft:50,
            marginRight:50,
            marginTop:50,
            borderRadius:30,
            backgroundColor:'white'
        },
            titleBar:{
                flex:0.15,
                justifyContent:"center",
                alignItem:"center",
            },
            titleText:{
                fontSize:40,
                fontWeight:"bold",
                color:'white'
            },

        routeText:{
            fontSize:35,
            fontweight:"bold",
            color:'black',
            marginTop:75,
            paddingLeft:30
        } ,
           knowMore:{
            paddingLeft:30,
            color:"red",
            fontSize:15
           },
           bgDigit:{
            position:"absolute",
            fontSize:150,
            right:20,
            bottom:-15,
            zindex:-1
           },
        iconImage:{
            position:"absolute",
            height:200,
            resizeMode:contain
            width:200,
            
        }           
    })