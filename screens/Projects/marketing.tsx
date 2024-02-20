
import { useState } from "react"
import { Text, View, StyleSheet,FlatList  ,StatusBar, TextInput, KeyboardAvoidingView, Touchable, TouchableOpacity, ScrollView, Alert, Image } from "react-native"
import RadioButtonComponent from "../molecules/radioComponent";
import DocumentPicker from 'expo-document-picker';
const data = [
    {
        id: '101',
        image: require('../../assets/Users/Elon-Musk.jpg')
    },
    {
        id: '102',
        image: require('../../assets/Users/ratan-tata.jpg')
    },
    {
        id: '103',
        image: require('../../assets/Users/stevejobs.jpg')
    },
];
const renderItem = ({ item }) => (
    <ScrollView horizontal={true} style={styles.List}>   
    
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={item.image}
        />
      </View>
    </ScrollView> 
    );

export default function marketing(){
    const [projectName, setprojectName]=useState('')
    const [companyName, setcompanyName]=useState('')
    const [url, seturl]=useState('')
    const[aboutProject, setaboutProject]=useState('')
    let [flowchart, setflowchart]=useState('')
    const[projectWorth, setprojectWorth]=useState('')
    const[budget, setbudget]=useState('')
    const[pitchDeck, setpitchDeck]=useState('') 
    const[presentation, setcpresentation]=useState('') 
    const[email, setemail]=useState('')
    const[projectReport, setReport]=useState('')


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
            <Text style={styles.header}>Post for marketing </Text>
        </View>
        <View style={styles.form}>
        <View style={styles.inputContainer}>
                <Text style={ {fontSize:20,marginRight:12}}>Company name</Text>
                <TextInput style={styles.input} onChangeText={(companyName)=>{setcompanyName(companyName)}}></TextInput>
        </View>
        <View style={styles.inputContainer}>
                <Text style={styles.label}>Project name</Text>
                <TextInput style={styles.input} onChangeText={(projectName)=>{setprojectName(projectName)}}></TextInput>
        </View>
        <View style={styles.inputContainer}>
                <Text style={{fontSize:20,marginRight:128}}>Url</Text>
                <TextInput style={styles.input} onChangeText={(url)=>{seturl(url)}}></TextInput>
        </View>
    
        <View style={{paddingTop:10}}>
                <Text style={{fontSize:20, marginBottom:5}}>About Project
                </Text>
                <TextInput style={{ textAlignVertical: 'top', marginLeft:-5,width:'100%',  backgroundColor:'#D3D3D3',  borderRadius:25, height:150, marginRight:0,padding:15}} numberOfLines={4}  multiline onChangeText={(aboutProject)=>{setaboutProject(aboutProject)}}></TextInput>
        </View>
        

        <View style={styles.inputContainer}>
                <Text style={{fontSize:20,marginRight:30}}>Project worth</Text>
                <TextInput style={styles.input} onChangeText={(projectWorth)=>{setprojectWorth(projectWorth)}}></TextInput>
        </View>
        <View style={styles.inputContainer}>
                <Text style={{fontSize:20,marginRight:60}}>Pitch Deck</Text>
                <TouchableOpacity style={{backgroundColor:'#D3D3D3',borderRadius:45,width:210,height:35,paddingTop:5}} onPress={pickFile}><Text style={{textAlign:'center',fontSize:16,fontWeight:'bold'}}>upload file</Text></TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
                <Text style={{fontSize:20,marginRight:40}}>Presentation</Text>
                <TouchableOpacity style={{backgroundColor:'#D3D3D3',borderRadius:45,width:210,height:35,paddingTop:5}} onPress={pickFile}><Text style={{textAlign:'center',fontSize:16,fontWeight:'bold'}}>upload file</Text></TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
                <Text style={{fontSize:20,marginRight:25}}>Project Report</Text>
                <TouchableOpacity style={{backgroundColor:'#D3D3D3',borderRadius:45,width:210,height:35,paddingTop:5}} onPress={pickFile}><Text style={{textAlign:'center',fontSize:16,fontWeight:'bold'}}>upload file</Text></TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
                <Text style={{fontSize:18,marginRight:10,letterSpacing:-1}}>Approximate budget</Text>
                <TextInput style={styles.input} onChangeText={(budget)=>{setbudget(budget)}}></TextInput>
        </View>
        
        <View style={styles.inputContainer}>
                <Text style={ {fontSize:20,marginRight:100,marginLeft:2}}>email</Text>
                <TextInput style={styles.input} onChangeText={(email)=>{setemail(email)}}></TextInput>
        </View>
        <View style={[styles.inputContainer,{flexDirection:'row'}]}>
                <Text style={{fontSize:20,marginRight:85}}>Images</Text>
                <FlatList style={{marginLeft:-180,marginTop:5}} horizontal={true} data={data} renderItem={renderItem} keyExtractor={item => item.id.toString()}/>
        </View>
        
        <TouchableOpacity style={styles.btn} onPress={()=>Alert.alert('Submit') }>
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
    List:{
        marginLeft:0,
        marginTop:40,
        padding:0,
    },
    image: {
        width: '100%',
        height:  '100%',
        resizeMode:'cover',
        marginRight:0,
    },
      item: {
        alignItems: 'center',
        height:100,
        width:100,
        marginRight:6,
        padding:10,
        backgroundColor:'white',
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