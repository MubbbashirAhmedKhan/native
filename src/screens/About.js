// import * as React from 'react';
// import {ScrollView, Text,View,TouchableOpacity, StyleSheet} from 'react-native'
// import { Avatar, Button, Card, Title, Paragraph,BottomNavigation } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/Ionicons';
// import brg from '../../assets/brg.jpg'
// import brg1 from '../../assets/brg1.jpg'
// import brg2 from '../../assets/brg2.jpg'


// const MusicRoute = () => <Text>Music</Text>;

// const AlbumsRoute = () => <Text>Albums</Text>;

// const RecentsRoute = () => <Text>Recents</Text>;


// const About = () => {
  
//   const LeftContent = props => <Avatar.Icon {...props} icon="hamburger" style={{backgroundColor:'red'}} />
//   return (
    

//     <ScrollView>
 
//    <View>
     
//    <View  style={styles.header}>
//      <Text style={{color:'white', fontSize:18}}> </Text>
  
//      <View>
//      <Icon name="notifications" size={30} color='white'  />
//                         </View>
//      </View>
//     <Card style={{marginTop:20,backgroundColor:'#e3e4e3' }}>
   


//       <Card.Title  left={LeftContent} />
//     <Card.Content>
//       <Title>Chicken Burger</Title>
//       <Paragraph>With one Drink</Paragraph>
//     </Card.Content>
//     <Card.Cover source={brg} style={{width:'100%', height:290}}  />
//     <Card.Actions>
//     <TouchableOpacity  style={{ justifyContent:'center',alignItems:'center', flex:1}} >
//                 <Text  style={{fontSize:18, color:'black', fontWeight:'bold'}}>Prize: Rs./ 300</Text>
//             </TouchableOpacity>
//     </Card.Actions>
//     </Card>
    
// <Card style={{marginTop:20, backgroundColor:'#e3e4e3'}}>
   


// <Card.Title  left={LeftContent} />
// <Card.Content>
// <Title>Spicy Burger</Title>
// <Paragraph>With 1ML Drink and fries</Paragraph>
// </Card.Content>
// <Card.Cover source={brg1} style={{width:'100%', height:290}} />
// <Card.Actions>
// <TouchableOpacity  style={{ justifyContent:'center',alignItems:'center', flex:1}} >
//                 <Text  style={{fontSize:18, fontWeight:'bold', color:'black'}}>Prize: Rs./ 300</Text>
//             </TouchableOpacity>
// </Card.Actions>
// </Card>
   
// <Card style={{marginTop:20, backgroundColor:'#e3e4e3'}}>
   


// <Card.Title  left={LeftContent} />
// <Card.Content>
// <Title>Cheese Burger</Title>
// <Paragraph>With Fries</Paragraph>
// </Card.Content>
// <Card.Cover source={brg2} style={{width:'100%', height:290}} />
// <Card.Actions>
// <TouchableOpacity  style={{ justifyContent:'center',alignItems:'center', flex:1}} >
//                 <Text  style={{fontSize:18, color:'black', fontWeight:'bold'}}>Prize: Rs./ 300</Text>
//             </TouchableOpacity>
// </Card.Actions>
// </Card>



// </View>
// </ScrollView>
//   );
// };



// const styles = StyleSheet.create({

//   header:{
    
//     width:'100%',
//     backgroundColor:'#48538a',
//     height:50,
//     flexDirection:'row',
//     justifyContent:'space-between',
//     alignItems:'center',
//     paddingHorizontal:10
// }
// })
// export default About; 


import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, Dimensions, } from 'react-native'




const windowWidth = Dimensions.get('window').width;
const About = () => {
  const [active_player, setActive_player] = useState('X')
  const [markers, setMarkers] = useState([
    null, null, null,
    null, null, null,
    null, null, null
  ])

  const markPosition = (position) => {
    if(!markers[position]){
      let temp = [...markers]
      temp[position] = active_player
      setMarkers(temp)
      if(active_player === 'X'){  //transfer chances to next player
        setActive_player('O')
      }else{
        setActive_player('X')
      }
    }
  }

  const resetMarkers = () => {
    setMarkers([
      null, null, null,
      null, null, null,
      null, null, null
    ])
  }

  const calculateWinner = (squares) => {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let i = 0; i < lines.length; i++){
      const [a,b,c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }
    return null;
  }

  useEffect(() => {
    const winner = calculateWinner(markers);
    if(winner === 'X'){
      alert(" Shaheer Win !")
      resetMarkers()
    }else if(winner === 'O'){
      alert("Mubbashir Win!")
      resetMarkers()
     
    }
  }, [markers])
  return (
    <SafeAreaView style={styles.body}>
      <View style={[styles.playerInfo, { backgroundColor: active_player === 'X' ? '#448c5c' : '#e9434a' }]}>
        <Text style={styles.playerTxt}>Player {active_player}'s turn</Text>
      </View>
      <View style={styles.mainContainer}>

        {/* Top Left Cell */}
        <Pressable style={styles.cell_top_left} onPress={()=>markPosition(0)}>
          {markers[0] === 'X' && <Image source={require('../../assets/log.jpg')} style={styles.icon} />}
          {markers[0] === 'O' && <Image source={require('../../assets/log1.jpg')} style={styles.icon} />}
        </Pressable>

        {/* Top Mid Cell */}
        <Pressable style={styles.cell_top_mid} onPress={()=>markPosition(1)}>
          {markers[1] === 'X' && <Image source={require('../../assets/log.jpg')} style={styles.icon} />}
          {markers[1] === 'O' && <Image source={require('../../assets/log1.jpg')} style={styles.icon} />}
        </Pressable>

        {/* Top Right Cell */}
        <Pressable style={styles.cell_top_right} onPress={()=>markPosition(2)}>
          {markers[2] === 'X' && <Image source={require('../../assets/log.jpg')} style={styles.icon} />}
          {markers[2] === 'O' && <Image source={require('../../assets/log1.jpg')} style={styles.icon} />}
        </Pressable>

        {/* Mid Left Cell */}
        <Pressable style={styles.cell_mid_left} onPress={()=>markPosition(3)}>
          {markers[3] === 'X' && <Image source={require('../../assets/log.jpg')} style={styles.icon} />}
          {markers[3] === 'O' && <Image source={require('../../assets/log1.jpg')} style={styles.icon} />}
        </Pressable>

        {/* Mid Mid Cell */}
        <Pressable style={styles.cell_mid_mid} onPress={()=>markPosition(4)}>
          {markers[4] === 'X' && <Image source={require('../../assets/log.jpg')} style={styles.icon} />}
          {markers[4] === 'O' && <Image source={require('../../assets/log1.jpg')} style={styles.icon} />}
        </Pressable>

        {/* Mid Right Cell */}
        <Pressable style={styles.cell_mid_right} onPress={()=>markPosition(5)}>
          {markers[5] === 'X' && <Image source={require('../../assets/log.jpg')} style={styles.icon} />}
          {markers[5] === 'O' && <Image source={require('../../assets/log1.jpg')} style={styles.icon} />}
        </Pressable>

        {/* Bottom Left Cell */}
        <Pressable style={styles.cell_bottom_left} onPress={()=>markPosition(6)}>
          {markers[6] === 'X' && <Image source={require('../../assets/log.jpg')} style={styles.icon} />}
          {markers[6] === 'O' && <Image source={require('../../assets/log1.jpg')} style={styles.icon} />}
        </Pressable>

        {/* Bottom Mid Cell */}
        <Pressable style={styles.cell_bottom_mid} onPress={()=>markPosition(7)}>
          {markers[7] === 'X' && <Image source={require('../../assets/log.jpg')} style={styles.icon} />}
          {markers[7] === 'O' && <Image source={require('../../assets/log1.jpg')} style={styles.icon} />}
        </Pressable>

        {/* Bottom Right Cell */}
        <Pressable style={styles.cell_bottom_right} onPress={()=>markPosition(8)}>
          {markers[8] === 'X' && <Image source={require('../../assets/log.jpg')} style={styles.icon} />}
          {markers[8] === 'O' && <Image source={require('../../assets/log1.jpg')} style={styles.icon} />}
        </Pressable>
      </View>
      <Pressable style={styles.cancleBTN} onPress={resetMarkers}>
        <Image source={require('../../assets/log3.jpg')} style={styles.cancelIcon}/>
      </Pressable>
    </SafeAreaView>
  )
}

export default About

const styles = StyleSheet.create({
  body: {
    flex: 1,
     backgroundColor: '#a5b4b4'
    //backgroundColor: 'black'
  },
  playerInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 20,
    marginTop: 30
    
  },
  playerTxt: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: '#fff',
 
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 60,
    
    
  },
  cell_top_left: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 6,
    borderBottomWidth: 6,
  },
  cell_top_mid: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 6
  },
  cell_top_right: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 6,
    borderLeftWidth: 6,
  },
  cell_mid_left: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 6,
  },
  cell_mid_mid: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell_mid_right: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 6,
  },
  cell_bottom_left: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 6,
    borderTopWidth: 6,
  },
  cell_bottom_mid: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 6,
   
  },
  cell_bottom_right: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 6,
    borderTopWidth: 6,
  
  },
  icon: {
    height: 62,
    width: 62
  },
  cancleBTN: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  
  
  },
  cancelIcon: {
    height: 80,
    width: 80
  },

})