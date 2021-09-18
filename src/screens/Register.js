
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';




import pic5 from '../../assets/pic5.jpg'

function Register(props) {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const  [email, setEmail] = useState("");
    const [password, setPassword] = useState("")   
   
    
    const register = ()=>{
        auth()
        .createUserWithEmailAndPassword(email,password)
        .then(() => {
          console.log('User account created & signed in!');
        })
        
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }
      
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
      
          console.error(error);
        });
        // console.log(email)
        // console.log(password)
    }
    
    return (
        <ScrollView>
        <View style={styles.myContainer}>
                <View style={styles.header}>
                    <View>

                    </View>
                    <View>
                        <Text style={{color:'white', fontSize:18}}>Registered Now!</Text>
                        </View>
                        <View>
                        <Icon name="notifications" size={30} color='white' />
                        </View>

                </View>

               


            <View style={{ width: "100%", justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
                <Image source={pic5} style={styles.logo} />
            </View>
            <View style={{ width: "100%", alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20 }}>Register Now</Text>
            </View>
            <View style={{ width: '100%', alignItems: 'center', marginTop: 20 }}>
                <TextInput style={{ width: '80%', borderWidth: 1, borderRadius: 100, borderColor: 'blue', paddingLeft: 25, fontSize: 17}} placeholder="UserName" />
            </View>
            <View style={{ width: '100%', alignItems: 'center', marginTop: 20 }}>
                <TextInput onChangeText={(text)=>setEmail(text)} keyboardType={'email-address'} style={{ width: '80%', borderWidth: 1, borderRadius: 100, borderColor: 'blue', paddingLeft: 25, fontSize: 17 }} placeholder="User Email" />
            </View>
            <View style={{ width: '100%', alignItems: 'center', marginTop: 20 }}>
                {/* <View style={{ width: '80%', borderWidth: 1, borderRadius: 100, borderColor: 'blue', paddingLeft: 5, fontSize: 17, backgroundColor:'#f5f5f5'}}>
                <Picker
                itemStyle={{borderWidth:1, borderColor:'grey'}}
                  mode ="dropdown"
            
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                </View> */}
            </View>

            <View style={{ width: '100%', alignItems: 'center', marginTop: 7 }}>
                <TextInput onChangeText={(text)=>setPassword(text)} secureTextEntry={true} style={{ width: '80%', borderWidth: 1, borderRadius: 100, borderColor: 'blue', paddingLeft: 25, fontSize: 17 }} placeholder="Password" />
            </View>
            <View style={{ width: '100%', alignItems: 'center', marginTop: 20 }}>
                <TouchableOpacity onPress={register}  style={[styles.btn, { alignItems: 'center', justifyContent: 'center', backgroundColor: '#426787', width: '80%', padding: 10, borderRadius: 100 }]}>
                    <Text style={{ fontSize: 20 }}>Register</Text>
                </TouchableOpacity>
            </View>
            
            <View style={{ width: '100%', alignItems: 'center', marginTop: 25 }}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Login')} style={{backgroundColor:'#065dff', width:'50%',alignItems:'center', justifyContent:'center', padding:10}}>
                    <Text style={{color:'white'}}>Login Now</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    myContainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    logo: {
        width: 150,
        height: 120
    },
    btn: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.27,
        shadowRadius: 5.49,

        elevation: 10,
    },
    header:{
        width:'100%',
        backgroundColor:'#426787',
        height:50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10
    }
})

export default Register;