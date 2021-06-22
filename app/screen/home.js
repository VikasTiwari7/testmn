import React,{useEffect,useState} from 'react';
import {View,Text} from 'react-native';
// import { useEffect } from 'react/cjs/react.production.min';
import * as utility from '../utility/index';
const Home=()=>{
    const [Name, setName] = useState('');
    const [lastName, setlastName] = useState('');
    const [Email, setEmail] = useState('');
    const [Pass, setPass] = useState('');
    const [confPass, setconfPass] = useState('')
    useEffect(()=>{
        retriveddat1();
    },[])
    const retriveddat1= async()=>{
        let name =await utility.getFromLocalStorge("name");
        setName(name);
        let lastName =await utility.getFromLocalStorge("lastName");
        setlastName(lastName);
        let Email =await utility.getFromLocalStorge("Email");
        setEmail(Email)
        let Pass =await utility.getFromLocalStorge("Pass");
        setPass(Pass);
        let confPass =await utility.getFromLocalStorge("confPass");
        setconfPass(confPass);

    }

    return(
        <View style={{alignSelf:'center',margin:10}}>
            <Text>Show all Data</Text>
            <View style={{alignSelf:'center'}}>
                <Text>{Name}</Text>
                <Text>{lastName}</Text>
                <Text>{Email}</Text>
                <Text>{Pass}</Text>
                <Text>{confPass}</Text>
                <View style={{borderRadius:10,backgroundColor:'#ff1a1a',alignItems:'center',marginRight:'35%',marginLeft:'35%',marginBottom:'30%',padding:10,margin:'5%'}}>
                     <Text style={{color:'white',fontWeight:'bold',fontSize:20,alignItems:'center'}}>Sign Up</Text>
                 </View>
            </View>
        </View>
    )
}
export default Home