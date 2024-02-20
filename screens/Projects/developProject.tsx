
import { useState } from "react"
import { Text, View, StyleSheet,  StatusBar, TextInput, KeyboardAvoidingView, Touchable, TouchableOpacity, ScrollView, Alert } from "react-native"
import RadioButtonComponent from "../molecules/radioComponent";
import DocumentPicker from 'expo-document-picker';

export default function developProject( {navigation}){
    const [projectName, setprojectName]=useState('')
    const [Technology, setTechnology]=useState('')
    const [budget, setbudget]=useState('')
    const[scope, setscope]=useState('')
    let [flowchart, setflowchart]=useState('')
    const[domain, setdomain]=useState('')
    const[contactName, setcontactName]=useState('') 
    const[contactNumber, setcontactNumber]=useState('') 
    const[email, setemail]=useState('')
    const[city, setcity]=useState('')


    const file=(value)=>{
        flowchart=value;
        setflowchart(flowchart);
    }
    const pickFile = async () => {
        try {
          const res = await DocumentPicker.pick({
            type: [DocumentPicker.type.allFiles]

          });
          file(res);
        } catch (err) {
          if (DocumentPicker.isCancel(err)) {
            console.log('Canceled');
          } else {
            console.log('Unknown Error: ' + JSON.stringify(err));
            throw err;
          }
        }
      };

    return(
        
        <ScrollView>
       <View style={styles.container}>
        <View style={styles.container2}>
            <Text style={styles.header}>Development form</Text>
        </View>
        <View style={styles.form}>
        <View style={styles.inputContainer}>
                <Text style={styles.label}>Project name</Text>
                <TextInput style={styles.input} onChangeText={(projectName)=>{setprojectName(projectName)}}></TextInput>
        </View>
        <RadioButtonComponent labelOne={'web application'} firstValue={'web application'} labelSecond={'mobile app'} secondValue={'mobile app'}/>
        <View style={{paddingTop:10}}>
                <Text style={{fontSize:20, marginBottom:5}}>Technology Required</Text>
                <TextInput style={{ marginLeft:-5,width:'100%',  backgroundColor:'#D3D3D3',  borderRadius:45, height:35, marginRight:0}} onChangeText={(Technology)=>{setTechnology(Technology)}}></TextInput>
        </View>
        <View style={{paddingTop:10}}>
                <Text style={{fontSize:20, marginBottom:5}}>Scope of work</Text>
                <TextInput style={{textAlignVertical: 'top', marginLeft:-5,width:'100%',  backgroundColor:'#D3D3D3',  borderRadius:25, height:100, marginRight:0}} multiline={true} onChangeText={(scope)=>{setscope(scope)}}></TextInput>
        </View>
        

        <View style={styles.inputContainer}>
                <Text style={{fontSize:20,marginRight:45}}>your budget</Text>
                <TextInput style={styles.input} onChangeText={(budget)=>{setbudget(budget)}}></TextInput>
        </View>
        <View style={styles.inputContainer}>
                <Text style={{fontSize:20,marginRight:60}}>flow chart</Text>
                <TouchableOpacity style={{backgroundColor:'#D3D3D3',borderRadius:45,width:210,height:35,paddingTop:5}} onPress={pickFile}><Text style={{textAlign:'center',fontSize:16,fontWeight:'bold'}}>upload file</Text></TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
                <Text style={ {fontSize:20,marginRight:20}}>domain details</Text>
                <TextInput style={styles.input} onChangeText={(domain)=>{setdomain(domain)}}></TextInput>
        </View>
        <View style={styles.inputContainer}>
                <Text style={ {fontSize:20,marginRight:30}}>contact name</Text>
                <TextInput style={styles.input} onChangeText={(contactName)=>{setcontactName(contactName)}}></TextInput>
        </View>
        <View style={styles.inputContainer}>
                <Text style={ {fontSize:20,marginRight:12}}>contact number</Text>
                <TextInput style={styles.input} onChangeText={(contactNumber)=>{setcontactNumber(contactNumber)}}></TextInput>
        </View>
        <View style={styles.inputContainer}>
                <Text style={ {fontSize:20,marginRight:100,marginLeft:2}}>email</Text>
                <TextInput style={styles.input} onChangeText={(email)=>{setemail(email)}}></TextInput>
        </View>
        <View style={styles.inputContainer}>
                <Text style={ {fontSize:20,marginRight:65}}>client city</Text>
                <TextInput style={styles.input} onChangeText={(city)=>{setcity(city)}}></TextInput>
        </View>
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('marketing') }>
            <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>


        </View>
       
       </View> 
       </ScrollView>
    )
}
const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        flex:1
    },
    container2:{
        width:'120%',
        height:'10%',
        flex:1,
        position:'absolute',
        backgroundColor:'#6D60F9',
    },
    header:{
        color:"#fff",
        paddingTop:StatusBar.currentHeight,
        paddingLeft:20,
        fontSize:28
    },
    input:{
        backgroundColor:'#D3D3D3',
        borderRadius:45,
        fontSize:16,
        width:210,
        height:35,
    },
    inputContainer:{
        flexDirection:'row',
        paddingTop:25
    },
    label:{
        fontSize:20,
        marginRight:35
    },
    form:{
        padding:25,
        paddingTop:100,
        display:'flex',
        position:'relative'
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