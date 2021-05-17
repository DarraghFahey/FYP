import React from 'react';
import { Button } from 'react-native';
import { Text, View } from 'react-native';


  const ListNoLogin = ({navigation}) => {

    const [name, setName] = React.useState(' ');
    const [platform, setPlatform] = React.useState(' ');
    const [rating , setRating] = React.useState(' ');
    const [name1, setName1] = React.useState(' ');
    const [platform1, setPlatform1] = React.useState(' ');
    const [rating1 , setRating1] = React.useState(' ');
    const [name2, setName2] = React.useState(' ');
    const [platform2, setPlatform2] = React.useState(' ');
    const [rating2 , setRating2] = React.useState(' ');
    const [name3, setName3] = React.useState(' ');
    const [platform3, setPlatform3] = React.useState(' ');
    const [rating3 , setRating3] = React.useState(' ');
    const [name4, setName4] = React.useState(' ');
    const [platform4, setPlatform4] = React.useState(' ');
    const [rating4 , setRating4] = React.useState(' ');
    const [name5, setName5] = React.useState(' ');
    const [platform5, setPlatform5] = React.useState(' ');
    const [rating5 , setRating5] = React.useState(' ');
    const [name6, setName6] = React.useState(' ');
    const [platform6, setPlatform6] = React.useState(' ');
    const [rating6 , setRating6] = React.useState(' ');
    const [name7, setName7] = React.useState(' ');
    const [platform7, setPlatform7] = React.useState(' ');
    const [rating7 , setRating7] = React.useState(' ');
    const [name8, setName8] = React.useState(' ');
    const [platform8, setPlatform8] = React.useState(' ');
    const [rating8 , setRating8] = React.useState(' ');
    const [name9, setName9] = React.useState(' ');
    const [platform9, setPlatform9] = React.useState(' ');
    const [rating9 , setRating9] = React.useState(' ');
    const [number , setNumber] = React.useState(0);

        

    
        fetch("http://127.0.0.1:5000/")
          .then(function (response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        response.json().then(function (data) {
          console.log(data.length);
          if(data.length !== 0){
            setName(data[number]['title']);
            setPlatform(data[number]['platform']);
            setRating(data[number]['metascore']);
            setName1(data[number + 1]['title']);
            setPlatform1(data[number + 1]['platform']);
            setRating1(data[number + 1]['metascore']);            
            setName2(data[number + 2]['title']);
            setPlatform2(data[number + 2]['platform']);
            setRating2(data[number + 2]['metascore']);
            setName3(data[number + 3]['title']);
            setPlatform3(data[number + 3]['platform']);
            setRating3(data[number + 3]['metascore']);
            setName4(data[number + 4]['title']);
            setPlatform4(data[number + 4]['platform']);
            setRating4(data[number + 4]['metascore']);
            setName5(data[number + 5]['title']);
            setPlatform5(data[number + 5]['platform']);
            setRating5(data[number + 5]['metascore']);
            setName6(data[number + 6]['title']);
            setPlatform6(data[number + 6]['platform']);
            setRating6(data[number + 6]['metascore']);
            setName7(data[number + 7]['title']);
            setPlatform7(data[number + 7]['platform']);
            setRating7(data[number + 7]['metascore']);
            setName8(data[number + 8]['title']);
            setPlatform8(data[number +8]['platform']);
            setRating8(data[number + 8]['metascore']);
            setName9(data[number + 9]['title']);
            setPlatform9(data[number + 9]['platform']);
            setRating9(data[number + 9]['metascore']);
        }
        else {
          alert('No game');
        }
      });
      }
      )
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
      

    function increase(number) {
      setNumber(number+10);
    }
    function decrease(number) {
      if(number > 0)
        setNumber(number-10);
      else 
        alert("Already at 0")
    }

    return (
      <View> 
        <Text style={{textAlign: "center", padding: 20, fontSize: 20,fontWeight: "bold" }}>Top rated Games from Metacritic, please sign in or register for personalised recommendations </Text> 

        <View style={{flexDirection: "row"}}>
        <br></br>

        <View style={{flexDirection: "column", padding: 20}}>
          <Text >Title : {name} </Text> 
          <Text>Platform : {platform}</Text>    
          <Text>Metascore : {rating}</Text>  
        </View>
        <br></br> 
        
        <View style={{flexDirection: "column", padding: 20}}>
          <Text>Title : {name1}</Text> 
          <Text>Platform : {platform1}</Text>    
          <Text>Metascore : {rating1}</Text>  
        </View>
        <br></br>
        
        <View style={{flexDirection: "column", padding: 20}}>
          <Text>Title : {name2}</Text> 
          <Text>Platform : {platform2}</Text>    
          <Text>Metascore : {rating2}</Text>  
        </View> 
        <br></br>

        <View style={{flexDirection: "column", padding: 20}}>
          <Text>Title : {name3}</Text> 
          <Text>Platform : {platform3}</Text>    
          <Text>Metascore : {rating3}</Text>  
        </View> 
        <br></br>

        <View style={{flexDirection: "column",  padding: 20}}>
          <Text>Title : {name4}</Text> 
          <Text>Platform : {platform4}</Text>    
          <Text>Metascore : {rating4}</Text>  
        </View> 
        <br></br>
        </View>

        <br></br>
        <br></br>
        <View style={{flexDirection: "row"}}>
        <View style={{flexDirection: "column", padding: 20}}>
          <Text>Title : {name5}</Text> 
          <Text>Platform : {platform5}</Text>    
          <Text>Metascore : {rating5}</Text>  
        </View> 
        <br></br>
        <View style={{flexDirection: "column", padding: 20}}>
          <Text>Title : {name6}</Text> 
          <Text>Platform : {platform6}</Text>    
          <Text>Metascore : {rating6}</Text>  
        </View>
        <br></br>
        <View style={{flexDirection: "column", padding: 20}}>
          <Text>Title : {name7}</Text> 
          <Text>Platform : {platform7}</Text>    
          <Text>Metascore : {rating7}</Text>  
        </View> 
        <br></br>
        <View style={{flexDirection: "column", padding: 20}}>
          <Text>Title : {name8}</Text> 
          <Text>Platform : {platform8}</Text>    
          <Text>Metascore : {rating8}</Text>  
        </View> 
        <br></br>
        <View style={{flexDirection: "column", padding: 20}}>
          <Text>Title : {name9}</Text> 
          <Text>Platform : {platform9}</Text>    
          <Text>Metascore : {rating9}</Text>  
        </View> 
        <br></br> 
        </View> 
        <View style={{flexDirection: "row", padding: 20, alignItems: "center"}}>
          <Button style={{alignItems: "left"} }
            onPress={() => decrease(number)}
            title="back 10"
            color="#B1624EFF"
          />
          <Button style={{alignItems: "center"} }
            onPress={() => increase(number)}
            title="next 10"
            color="#B1624EFF"
          />
        </View>
      </View>
    );
}

export default ListNoLogin;


