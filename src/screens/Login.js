
import React from 'react';
import { Text, View, StyleSheet,Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import pic3 from '../../assets/pic3.png'

function Login(props) {
    return (
        <ScrollView>
        <View style={styles.myContainer}>
           <View style={{width:"100%", justifyContent:'center', alignItems:'center',paddingTop:20 }}>
           <Image source={pic3} style={styles.logo} /> 
           </View>
           <View style={{width:"100%", alignItems:'center'}}>
               <Text style={{fontSize:24, fontWeight:'bold', marginTop:20}}>Login</Text>
           </View>
           <View style={{width:'100%', alignItems:'center', marginTop:20}}> 
               <TextInput keyboardType={'email-address'} style={{width:'80%', borderWidth:1, borderRadius:100,borderColor:'blue', paddingLeft:25, fontSize:17}} placeholder="User Email" />
           </View>

           <View style={{width:'100%', alignItems:'center', marginTop:20}}> 
               <TextInput secureTextEntry={true} style={{width:'80%', borderWidth:1, borderRadius:100,borderColor:'blue', paddingLeft:25, fontSize:17}} placeholder="Password" />
           </View>
           <View style={{width:'100%', alignItems:'center', marginTop:20}}> 
            <TouchableOpacity  onPress={()=>props.navigation.navigate('Home')} style={[styles.btn,{alignItems:'center', justifyContent:'center', backgroundColor: '#c9f7fe', width:'80%',padding:10, borderRadius:100}]}>
                <Text  style={{fontSize:20}}>LOGIN</Text>
            </TouchableOpacity>
           </View>
           <View style={{width:'100%', alignItems:'center', marginTop:25}}>
               <TouchableOpacity onPress={()=>props.navigation.navigate('Register')} style={{backgroundColor:'#065dff', width:'50%',alignItems:'center', justifyContent:'center', padding:10}} >
                   <Text style={{fontSize:15, color:'white'}}>Register Now</Text>
                   </TouchableOpacity> 
              </View> 
        </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
     myContainer:{
         flex:1,
         backgroundColor:'#fff'
     },
     logo:{
         width:150,
         height:150
     },
     btn:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.27,
        shadowRadius: 5.49,
        
        elevation: 10,
     }      
})

export default Login;