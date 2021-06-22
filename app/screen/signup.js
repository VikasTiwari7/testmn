import React,{useState} from 'react';
import { View,Text,TextInput,TouchableOpacity, ScrollView,KeyboardAvoidingView, Alert} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import * as utility from '../utility/index';
const Signup=({navigation})=>{
    const [Name, setName] = useState('');
    const [lastName, setlastName] = useState('');
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [Email, setEmail] = useState('');
    const [Pass, setPass] = useState('');
    const [confPass, setconfPass] = useState('')
    let data={};
    const Checkfields= async()=>{
        if(toggleCheckBox) {
        if (Name==''||lastName==''||Email==''||Pass==''||confPass=="" ) {
            
        return Alert.alert('Please fill all field')
        }


    
        else {
            await utility.setInLocalStorge("name",Name);
            await utility.setInLocalStorge("lastName",lastName);
            await utility.setInLocalStorge("Email",Email);
            await utility.setInLocalStorge("Pass",Pass);
            await utility.setInLocalStorge("confPass",confPass);
        
            navigation.navigate('Home')
        }
    }

        else{
            Alert.alert("Please select the checkbox ");
        }
            }
 
    return(
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{flex:1}}
      >
            <ScrollView>
             <View style={{backgroundColor:"#ff1a1a",height:'25%'}}> 
            <Text style={{fontSize:30,color:'white',alignSelf:'center',paddingBottom:40,paddingTop:40,fontWeight:'bold'}}>Sign Up</Text>
            </View>
            <View style={{marginTop:'-15%',borderTopLeftRadius:20,backgroundColor:'#ffe6e6',borderTopRightRadius:20,marginBottom:'5%'}}>
            
                
            <TextInput placeholder={"First name"} 
            style={{borderRadius:8,marginLeft:"17%",backgroundColor:'white', marginEnd:"10%",marginTop:'10%',marginStart:30,borderWidth:.3}}
            onChangeText={text => setName(text)} ></TextInput>
                
                
                <TextInput placeholder={"Last name"} 
            style={{borderRadius:8,marginLeft:"17%",backgroundColor:'white', marginEnd:"10%",marginTop:'10%',marginStart:30,borderWidth:.3}}
            onChangeText={text => setlastName(text)} ></TextInput>
               
               <TextInput placeholder={"Email"} 
            style={{borderRadius:8,marginLeft:"17%",backgroundColor:'white', marginEnd:"10%",marginTop:'10%',marginStart:30,borderWidth:.3}}
            onChangeText={text => setEmail(text)} ></TextInput>
                 
                 <TextInput placeholder={"Password"} 
            style={{borderRadius:8,marginLeft:"17%",backgroundColor:'white', marginEnd:"10%",marginTop:'10%',marginStart:30,borderWidth:.3}} 
            onChangeText={text => setPass(text)}></TextInput>
               
               <TextInput placeholder={"Confirm Password"} 
            style={{borderRadius:8,marginLeft:"17%",backgroundColor:'white', marginEnd:"10%",marginTop:'10%',marginStart:30,borderWidth:.3}} 
            onChangeText={text => setconfPass(text)}></TextInput>
                
                 <View style={{alignItems:'center',marginLeft:"17%", marginEnd:"10%",margin:'10%',flexDirection:'row'}}>
                 <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
                     <Text>I have read and agree to the terms of
                          services and privacy policy</Text>
                 </View>
                 <TouchableOpacity onPress={()=>Checkfields()}>
                 <View style={{borderRadius:10,backgroundColor:'#ff1a1a',alignItems:'center',marginRight:'35%',marginLeft:'35%',marginBottom:'30%',padding:10,margin:'5%'}}>
                     <Text style={{color:'white',fontWeight:'bold',fontSize:20,alignItems:'center'}}>Sign Up</Text>
                 </View>
                 </TouchableOpacity>
            </View>
            </ScrollView>
            </KeyboardAvoidingView>
    )
}
export default Signup;