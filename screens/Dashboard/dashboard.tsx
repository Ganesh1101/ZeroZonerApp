import { Text, View, StyleSheet,StatusBar, Image, TouchableOpacity, Pressable, Alert, FlatList, ScrollView} from "react-native"
const data = [
    {
        id: '101',
        Name: 'Elon Musk',
        image: require('../../assets/Users/Elon-Musk.jpg')
    },
    {
        id: '102',
        Name: 'Ratan Tata',
        image: require('../../assets/Users/ratan-tata.jpg')
    },
    {
        id: '103',
        Name: 'Steve jobs',
        image: require('../../assets/Users/stevejobs.jpg')
    },
    {
        id: '104',
        Name: 'Sunder Pichai',
        image: require('../../assets/Users/sundar_pichai.webp')
    },
    {
        id: '105',
        Name: 'Mark Zuckerberg',
        image: require('../../assets/Users/Mark-Zuckerberg.webp')
    },
    {
        id: '106',
        Name: 'Jeff Bezos',
        image: require('../../assets/Users/jeff-BeZos.jpeg')
    },
   
];
const renderItem = ({ item }) => (
<ScrollView horizontal={true} style={styles.List}>   

  <View style={styles.item}>
    <Image
      style={styles.image}
      source={item.image}
    />
    <View style={styles.textContainer}>
      <Text style={styles.Name}>{item.Name}</Text>

    </View>
  </View>
</ScrollView> 
);

export default function dashboard({navigation}){
    return(
        <View style={styles.container} >
            <View style={styles.container1}>
                <Image source={require('../../assets/logo.png')} style={styles.logo} />
                <Pressable style={{flexDirection:'row'}} onPress={()=>{Alert.alert('Edit','Investor')}}><Text style={{color:'#fff',fontSize:22,letterSpacing:1,position:'relative',top:75,left:125}}>
                    Investor <Image style={{height:25,width:25,}} source={require('../../assets/edit1.png')}/>
                </Text></Pressable>
                <View style={styles.container2}><Image source={require('../../assets/Elon-Musk.jpg')} style={styles.user}/></View>
                </View>
                <View>
                          <Text style={styles.Name}>Elon Musk</Text>
                          <Text style={styles.userId}>123456</Text>
                   
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.icon} onPress={()=>{Alert.alert('Message','Hello')}}>
                            <Image source={require('../../assets/message.png')} style={styles.iconImage} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('PostProject')}>
                           <Text style={styles.btnText}>Post a Project</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.icon} onPress={()=>{Alert.alert('Share','Test')}}>
                            <Image source={require('../../assets/share.png')} style={styles.iconImage}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.Details}>
                        <View style={{ borderRightWidth:2 ,borderColor:"#6D60F9",paddingTop:10,paddingRight:4,width:120}}><Text style={styles.DetailsTxt}>99</Text>
                        <Text  style={{fontSize:14}}>Projects Posted</Text></View>
                        <View style={{ borderRightWidth:2 ,borderColor:"#6D60F9", padding:10,width:140}}><Text style={styles.DetailsTxt}>50.5K</Text>
                        <Text  style={{fontSize:14, textAlign:'center'}}>Zero Zoner</Text></View>
                        <View style={{ padding:10,width:140}}><Text style={styles.DetailsTxt}>2.3M</Text>
                        <Text  style={{fontSize:14,  textAlign:'center'}}>Projects Aproved</Text></View>
                    </View>
                    <View style={styles.container3}>
                    <TouchableOpacity  style={{width:200,height:50}} onPress={()=>{Alert.alert('Selected',)}} >
                             <Text style={{padding:15}}>Zero Zoner's</Text>
                    </TouchableOpacity>
                        <TouchableOpacity style={{width:200,height:100}} onPress={()=>{Alert.alert('See All',)}}> 
                            <Text style={{padding:15, marginLeft:100}}>See All</Text>
                        </TouchableOpacity>
                        <FlatList style={{marginLeft:-400,marginTop:5}} horizontal={true} data={data} renderItem={renderItem} keyExtractor={item => item.id.toString()}/>
  
                    </View>
                    <View style={styles.container4}>
                    <TouchableOpacity style={{width:300,height:100}} onPress={()=>{Alert.alert('Selected',)}}>
                             <Text style={{padding:15}}>Selected Projects</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:100,height:50}} onPress={()=>{Alert.alert('See All',)}}> 
                            <Text style={{padding:15}}>See All</Text>
                    </TouchableOpacity>
                        </View>
                </View>
            
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        margin:0
    },
    item: {
        alignItems: 'center',
        height:100,
        width:100,
        marginRight:6,
        padding:10,
        backgroundColor:'white',
      },
      image: {
        width: '100%',
        height:  '100%',
        resizeMode:'cover',
        marginRight:0,
        borderRadius: 100,
      },
      textContainer: {
        flex: 1,
        justifyContent: 'center',
      },
    container1:{
        //marginTop:StatusBar.currentHeight,
        width:'100%',
        height:'20%',
        backgroundColor:'#6D60F9',
        flexDirection:'row'
    },
    container2:{
        //marginTop:StatusBar.currentHeight,
        width:55,
        marginLeft:'35%',
        height:125,
        top:"65%",
        position:'absolute',
        backgroundColor:'#fff',
        borderRadius:100
    },
    container3:{
        height:160,
        backgroundColor:'#fff',
        position:'relative',
        display:'flex',
        top:200,
        flexDirection:'row'
    },
    container4:{
        height:160,
        backgroundColor:'#fff',
        position:'relative',
        flexDirection:'row',
        top:240
    },
    List:{
        marginLeft:0,
        marginTop:40,
        padding:0,
    },
    Details:{
        flexDirection:'row',
        position:'absolute',
        top:230,
        justifyContent:'center',
        width:'85%',
        marginLeft:'10%'
    },
    DetailsTxt:{
        fontSize:24,
        color:'#6D60F9',
        fontWeight:'bold',
        textAlign:"center" 
    },
    logo:{
        marginTop:50,
        marginLeft:30,
        height:82,
        width:125,
        resizeMode:"cover"
    },
    user:{
        height:'100%',
        width:'100%',
        borderRadius:100
    },
    Name:{
        fontSize:22,
        color:'#000',
        flexDirection:'column',
        position:'relative',
        top:60,
        left:155
    },
    userId:{
        fontSize:18,
        color:'grey',
        position:'relative',
        top:60,
        left:175
    },
    icon:{
        backgroundColor:'#E5E4E2',
        borderRadius:100,
        height:65,
        width:65,
        padding:15,
        position:'relative',
    },
    btn:{
        height:45,
        width:150,
        backgroundColor:'#6D60F9',
        marginTop:7,
        marginLeft:25,
        marginRight:25,
        borderRadius:50,
         
    },
    btnText:{
        textAlign:'center',
        fontSize:18,
        color:'#fff',
        marginTop:10
    },
    iconImage:{
        backgroundColor:'#D3D3D3',
        borderRadius:100,
        height:35,
        width:35
    },
    row:{
        flexDirection:'row',
        position:'relative',
        top:'20%',
        left:'10%'
    }
})