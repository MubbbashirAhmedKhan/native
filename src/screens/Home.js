



import React from 'react'
import { StatusBar, StyleSheet, SafeAreaView, ScrollView, View,TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-paper';

export default function Home(props) {
    
  const recipes = [
     {
        name: "Pasta",
        infor : "45 min | 2 servivings ",
        image: require('../../assets/pic3.png')
     },
     {
      name: "Pad thai",
      infor : "45 min | 2 servivings ",
      image: require('../../assets/pic3.png')
   },
   {
    name: "Grilled chicken broast",
    infor : "45 min | 2 servivings ",
    image: require('../../assets/pic2.png')
 },
  ];


  return (
   
     <ScrollView>
    <Container>
      <StatusBar barStyle="light-content" />
      <RecipeBackground source={require('../../assets/pic11.jpg')}>
        <SafeAreaView>
          <MenuBar>

            <Icon name="heart" size={30} color='white' />
            <Text style={{ color: 'white', fontSize: 30 }}>SpIcY PiZza!</Text>
            < Icon name="heart" size={30} color='red' />
          </MenuBar>

          < MainRecipe>
           <Text>Spicy Shrimp</Text>
           <Divider />
           <Text style={{fontSize:20}}>80 calories per 100gm</Text>
           <Text style={{fontSize:20}}>3g fat | 10g protien |  8g carbs</Text>
          </MainRecipe>
        
            <Text style={{fontSize:20, color:'black'}}> LEARN MORE</Text>
           
        </SafeAreaView>
      </RecipeBackground>

      <RecipesContainer >
       
        <Text  style={{color:'black' }}>
          Recipes 
        </Text>
        <Text  style={{color:'black' }}>
          18 recipies availaible
        </Text>
       <Recipes>{recipes.map((recipe,index)=>{
         return(
           <Recipe key={index}>
          <RecipeImage source={recipe.image} />
            <RecipeInfor>
              <Text dark bold>{recipe.name}</Text>
              <Text style={{fontSize:17}}>{recipe.infor}</Text>
            </RecipeInfor>
            < Icon name="fast-food" size={30} color='black' />
           </Recipe>
         )
         }) }

       </Recipes>
      </RecipesContainer>
    </Container>
    <Button style={{width:'80%',marginTop:2 , height: 40,marginBottom:4,justifyContent:'center', alignItems:'center', marginLeft:35,backgroundColor:'#065dff', borderRadius:30}} icon="camera" mode="contained" onPress={()=>props.navigation.navigate('About')}>
    <Text style={{color:'white', fontSize:20}}>Go to About</Text>
  </Button>
    </ScrollView>
  );
}


const Container = styled.View`
flex:1;
background-color:#fff
`

const Text = styled.Text`

margin:5px;
color: white;
font-size: 25px;

`


const RecipeBackground = styled.ImageBackground`
width: 100%;


`

const MenuBar = styled.View`
flex-direction: row;
justify-content: space-between;
padding: 16px`

const MainRecipe = styled.View`
padding: 0 25px
margin:50px 0 32px 0;
`

const Divider = styled.View`
border-bottom-color: #fff;
border-bottom-width: 2px;
width: 150px;
margin:8px 0
`


// const Button = styled.TouchableOpacity`
// margin: 0 0 48px 32px;
// background-color: rgba(280, 280, 255, 0.6);
// align-self:flex-start;
// padding: 6px 18px;
// border-radius: 100px
// `

 const RecipesContainer = styled.View`

 padding: 30px;
 background-color:#b3b3b3;
 border-top-left-radius:24px  ;
 border-top-right-radius:20px ;
 
 `

 
 const Recipes = styled.View`
   margin-top: 16px;
 `

 const Recipe = styled.View`
 flex-direction: row;
 align-items: center;
 margin-bottom: 10px

`

const RecipeImage = styled.View`
width: 60px;
height:60px;
border-radius: 8px
`

const RecipeInfor = styled.View`
   flex:1
   margin-left: 10px
`