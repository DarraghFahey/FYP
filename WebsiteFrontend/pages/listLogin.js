import React from 'react';
import { Text, View ,  Button } from 'react-native';


export const ListLogin = ({navigation}) => {
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
    const [ugid , setUGID] = React.useState(' ');
    const [ugid1 , setUGID1] = React.useState(' ');
    const [ugid2 , setUGID2] = React.useState(' ');
    const [ugid3 , setUGID3] = React.useState(' ');
    const [ugid4 , setUGID4] = React.useState(' ');
    const [ugid5 , setUGID5] = React.useState(' ');
    const [ugid6 , setUGID6] = React.useState(' ');
    const [ugid7 , setUGID7] = React.useState(' ');
    const [ugid8 , setUGID8] = React.useState(' ');
    const [ugid9 , setUGID9] = React.useState(' ');
    const [number , setNumber] = React.useState(0);
    

    function getRatingData(index) {
        fetch("http://127.0.0.1:5000/predictions/" + global.userToken)
        .then(function (response) {
        if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
            response.status);
        return;
        }
        response.json().then(function (data) {
        console.log(data.length);
        if(data.length !== 0){
            setUGID(data[index]['ugid'])
            setRating(data[index]['rating']);
            getGameData(ugid);
              
            setUGID1(data[index+1]['ugid'])
            setRating1(data[index + 1]['rating']); 
            getGameData1(ugid1);

            setUGID2(data[index+2]['ugid'])
            setRating2(data[index + 2]['rating']);
            getGameData2(ugid2);

            setUGID3(data[index+3]['ugid'])
            setRating3(data[index + 3]['rating']);
            getGameData3(ugid3);

            setUGID4(data[index+4]['ugid'])
            setRating4(data[index + 4]['rating']);
            getGameData4(ugid4);

            setUGID5(data[index+5]['ugid'])
            setRating5(data[index + 5]['rating']);
            getGameData5(ugid5);

            setUGID6(data[index+6]['ugid'])
            setRating6(data[index + 6]['rating']);
            getGameData6(ugid6);

            setUGID7(data[index+7]['ugid'])
            setRating7(data[index + 7]['rating']);
            getGameData7(ugid7);

            setUGID8(data[index+8]['ugid'])
            setRating8(data[index + 8]['rating']);
            getGameData8(ugid8);

            setUGID9(data[index+9]['ugid'])
            setRating9(data[index + 9]['rating']);
            getGameData9(ugid9);
        }
        else {
            alert('User has no predictions yet. Please rate games you enjoyed, and the algorithm will update within 24 hours.');
        }
        });
    }
    )
    .catch(function (err) {
        console.log('Fetch Error :-S', err);
    });

    function getGameData(input) {
      fetch("http://127.0.0.1:5000/gameId/" + input )
        .then(function (response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
          response.json().then(function (data) {
            console.log(data.length);
            if(data.length !== 0){
              setName(data['0']['title']);
              setPlatform(data['0']['platform']);
            }
            else {
              //alert('No game');
            }
          });
      }
        )
        .catch(function (err) {
          console.log('Fetch Error :-S', err);
        });
    }

    function getGameData1(input) {
      fetch("http://127.0.0.1:5000/gameId/" + input )
        .then(function (response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
          response.json().then(function (data) {
            console.log(data.length);
            if(data.length !== 0){
              setName1(data['0']['title']);
              setPlatform1(data['0']['platform']);
            }
            else {
              //alert('No game');
            }
          });
      }
        )
        .catch(function (err) {
          console.log('Fetch Error :-S', err);
        });
    }

    function getGameData2(input) {
      fetch("http://127.0.0.1:5000/gameId/" + input )
        .then(function (response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
          response.json().then(function (data) {
            console.log(data.length);
            if(data.length !== 0){
              setName2(data['0']['title']);
              setPlatform2(data['0']['platform']);
            }
            else {
              //alert('No game');
            }
          });
      }
        )
        .catch(function (err) {
          console.log('Fetch Error :-S', err);
        });
    }

    function getGameData3(input) {
      fetch("http://127.0.0.1:5000/gameId/" + input )
        .then(function (response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
          response.json().then(function (data) {
            console.log(data.length);
            if(data.length !== 0){
              setName3(data['0']['title']);
              setPlatform3(data['0']['platform']);
            }
            else {
              //alert('No game');
            }
          });
      }
        )
        .catch(function (err) {
          console.log('Fetch Error :-S', err);
        });
    }

    function getGameData4(input) {
      fetch("http://127.0.0.1:5000/gameId/" + input )
        .then(function (response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
          response.json().then(function (data) {
            console.log(data.length);
            if(data.length !== 0){
              setName4(data['0']['title']);
              setPlatform4(data['0']['platform']);
            }
            else {
              //alert('No game');
            }
          });
      }
        )
        .catch(function (err) {
          console.log('Fetch Error :-S', err);
        });
    }

    function getGameData5(input) {
      fetch("http://127.0.0.1:5000/gameId/" + input )
        .then(function (response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
          response.json().then(function (data) {
            console.log(data.length);
            if(data.length !== 0){
              setName5(data['0']['title']);
              setPlatform5(data['0']['platform']);
            }
            else {
              //alert('No game');
            }
          });
      }
        )
        .catch(function (err) {
          console.log('Fetch Error :-S', err);
        });
    }

    function getGameData6(input) {
      fetch("http://127.0.0.1:5000/gameId/" + input )
        .then(function (response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
          response.json().then(function (data) {
            console.log(data.length);
            if(data.length !== 0){
              setName6(data['0']['title']);
              setPlatform6(data['0']['platform']);
            }
            else {
              //alert('No game');
            }
          });
      }
        )
        .catch(function (err) {
          console.log('Fetch Error :-S', err);
        });
    }

    function getGameData7(input) {
      fetch("http://127.0.0.1:5000/gameId/" + input )
        .then(function (response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
          response.json().then(function (data) {
            console.log(data.length);
            if(data.length !== 0){
              setName7(data['0']['title']);
              setPlatform7(data['0']['platform']);
            }
            else {
              //alert('No game');
            }
          });
      }
        )
        .catch(function (err) {
          console.log('Fetch Error :-S', err);
        });
    }

    function getGameData8(input) {
      fetch("http://127.0.0.1:5000/gameId/" + input )
        .then(function (response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
          response.json().then(function (data) {
            console.log(data.length);
            if(data.length !== 0){
              setName8(data['0']['title']);
              setPlatform8(data['0']['platform']);
            }
            else {
             // alert('No game');
            }
          });
      }
        )
        .catch(function (err) {
          console.log('Fetch Error :-S', err);
        });
    }

    function getGameData9(input) {
      fetch("http://127.0.0.1:5000/gameId/" + input )
        .then(function (response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
          response.json().then(function (data) {
            console.log(data.length);
            if(data.length !== 0){
              setName9(data['0']['title']);
              setPlatform9(data['0']['platform']);
            }
            else {
              //alert('No game');
            }
          });
      }
        )
        .catch(function (err) {
          console.log('Fetch Error :-S', err);
        });
    }
    }

    


      function increase(number) {
        setNumber(number+10);
      }
      function decrease(number) {
        if(number > 0)
          setNumber(number-10);
        else 
          alert("Already at 0")
      }
      
    getRatingData(number);

    return (

      <View> 
        <View style={{flexDirection: "row"}}>
        <br></br>

        <View style={{flexDirection: "column", padding: 20}}>
        <Text>Title : {name} </Text> 
        <Text>Platform : {platform}</Text>    
        <Text>Predicted Rating : {rating}</Text> 
        </View>
        <br></br> 
        
        <View style={{flexDirection: "column", padding: 20}}>
        <Text>Title : {name1}</Text>        
        <Text>Platform : {platform1}</Text>    
        <Text>Predicted Rating : {rating1}</Text>  
        </View>
        <br></br>
        
        <View style={{flexDirection: "column", padding: 20}}>
        <Text>Title : {name2}</Text>         
        <Text>Platform : {platform2}</Text>    
        <Text>Predicted Rating : {rating2}</Text>
        </View> 
        <br></br>

        <View style={{flexDirection: "column", padding: 20}}>
        <Text>Title : {name3}</Text>         
        <Text>Platform : {platform3}</Text>    
        <Text>Predicted Rating : {rating3}</Text> 
        </View> 
        <br></br>

        <View style={{flexDirection: "column",  padding: 20}}>
        <Text>Title : {name4}</Text>         
        <Text>Platform : {platform4}</Text>    
        <Text>Predicted Rating : {rating4}</Text>
        </View> 
        <br></br>
        </View>

        <br></br>
        <br></br>
        <View style={{flexDirection: "row"}}>
        <View style={{flexDirection: "column", padding: 20}}>
        <Text>Title : {name5}</Text>         
        <Text>Platform : {platform5}</Text>    
        <Text>Predicted Rating : {rating5}</Text>
        </View> 
        <br></br>
        <View style={{flexDirection: "column", padding: 20}}>
        <Text>Title : {name6}</Text>         
        <Text>Platform : {platform6}</Text>    
        <Text>Predicted Rating : {rating6}</Text> 
        </View>
        <br></br>
        <View style={{flexDirection: "column", padding: 20}}>
        <Text>Title : {name7}</Text>         
        <Text>Platform : {platform7}</Text>    
        <Text>Predicted Rating : {rating7}</Text> 
        </View> 
        <br></br>
        <View style={{flexDirection: "column", padding: 20}}>
        <Text>Title : {name8}</Text>         
        <Text>Platform : {platform8}</Text>    
        <Text>Predicted Rating : {rating8}</Text>  
        </View> 
        <br></br>
        <View style={{flexDirection: "column", padding: 20}}>
        <Text>Title : {name9}</Text>         
        <Text>Platform : {platform9}</Text>    
        <Text>Predicted Rating : {rating9}</Text> 
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
export default ListLogin