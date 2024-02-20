import { View, StyleSheet} from "react-native"
import { RadioButton } from "react-native-paper"
import { useState } from "react";
type items={
    labelOne:String;
    firstValue:String;
    labelSecond:String;
    secondValue:String;
   
}

export default function RadioButtonComponent(item:items) {
    const [radio, setradio]=useState('web application');
    return (

    <View style={styles.inputContainer}>
        <RadioButton.Group onValueChange={(radio) => setradio(radio)} value={radio}>
        <View style={{flexDirection:'row'}}>  
            <RadioButton.Item value={item.firstValue} label={item.labelOne} labelStyle={{fontSize:20}} />
            <RadioButton.Item label={item.labelSecond} value={item.secondValue} labelStyle={{fontSize:20}}/>
        </View>
        </RadioButton.Group>
    </View>)
}
const styles=StyleSheet.create({
    inputContainer:{
        flexDirection:'row',
        paddingTop:10,
        marginLeft:-15,
    }
})