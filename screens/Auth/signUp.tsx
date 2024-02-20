import { View, StyleSheet, StatusBar, Text, Image, TextInput, TouchableOpacity, Alert, Pressable, KeyboardAvoidingView} from "react-native";
import { useState } from "react";
export default function signUp({navigation}){
const [phone, setphone]=useState('');

    return(
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1,position:'absolute' }}>
    <View style={styles.container}>
        <View style={styles.container1}>
                <Image style={styles.logo} source={require('../../assets/logo2.png')}/>
        </View>
        <View>
        <Text style={styles.heading}>Signup Here</Text>
        <TextInput style={styles.input} placeholder='Enter Mobile Number' placeholderTextColor={'#A9A9A9'} onChangeText={(phone)=>{setphone(phone)}}></TextInput>
        <TouchableOpacity style={styles.btn} onPress={()=> { if (!phone) {Alert.alert('Invalid', 'Enter Mobile Number:');return;} navigation.navigate('verification')}}>
            <Text style={styles.btnText}>Send OTP</Text>
        </TouchableOpacity>
        <Pressable onPress={()=>{navigation.navigate('Login');}}><Text style={{fontSize:18, fontWeight:'bold',marginTop:'10%',marginLeft:'11%'}}>Already have an account ? SIGNIN HERE</Text></Pressable>
        </View>
    </View>
    </KeyboardAvoidingView>
    )
}
const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
    },
    container1:{
        //marginTop:StatusBar.currentHeight,
        width:'110%',
        height:'35%',
        backgroundColor:'#6D60F9',
    },
    logo:{
        height:150,
        width:200,
        resizeMode:'cover',
        margin:'25%',
        marginTop:'15%'    
    },
    heading:{
        fontSize:24,
        marginLeft:'35%',
        marginTop:'14%',
        marginBottom:'0%',
        color:'#708090'
    },
    input:{
        height:80,
        fontSize:24,
        borderWidth:1.5,
        borderColor:'#6D60F9',
        borderStyle:'solid',
        marginTop:50,
        marginBottom:8,
        margin:25,
        borderRadius:45,
        paddingLeft:20
    },
    btn:{
        height:50,
        width:210,
        backgroundColor:'#6D60F9',
        marginTop:'07%',
        marginLeft:'25%',
        marginRight:25,
        borderRadius:50,
         
    },
    btnText:{
        textAlign:'center',
        fontSize:20,
        textShadowColor:'yellow',
        letterSpacing:1,
        color:'#fff',
        marginTop:10
    },
})