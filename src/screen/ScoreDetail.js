import { View, Text, StatusBar, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function ScoreDetail({route,navigation}) {
  const number = 4;
  const [count, setcount] = useState(0)
  const [name, setname] = useState('')
  const [showEnterInput, setshowEnterInput] = useState(true)
  const [showAddScore, setshowAddScore] = useState(false)
  const [listScore, setListScore] = useState([])
  const [listName, setlistName] = useState([])

  const [rowCount, setrowCount] = useState(1)
  const [score1, setscore1] = useState(0)
  const [score2, setscore2] = useState(0)
  const [score3, setscore3] = useState(0)
  const [score4, setscore4] = useState(0)

  const [total1, settotal1] = useState(0)
  const [total2, settotal2] = useState(0)
  const [total3, settotal3] = useState(0)
  const [total4, settotal4] = useState(0)
  const [dataLocal, setDatalocal] = useState([])
  
  const [list, setlist] = useState({})

  useEffect(() => {
    let t1 = 0;
    let t2 = 0;
    let t3 = 0;
    let t4 = 0;
    if(listScore.length > 0){
      listScore.map((value)=>{
        t1 = t1 + Number(value.score1);
        t2 = t2 + Number(value.score2);
        t3 = t3 +Number( value.score3);
        t4 = t4 + Number(value.score4);
      })
    }
    settotal1(t1)
    settotal2(t2)
    settotal3(t3)
    settotal4(t4)

  }, [listScore])
  
  useEffect(() => {
    if(count === number){
      setTimeout(() => {
        setshowEnterInput(false)
      }, 500);
    }
  }, [count])

  useEffect(() => {
    getData()

  }, [])
  const getData = async()=>{
    let arr = [];
    // await AsyncStorage.removeItem("DATA")
    const getData = await AsyncStorage.getItem('DATA');
    console.log("databe", getData)
    if(getData !== null){ 
      console.log(getData, "cfsdds")
        arr = JSON.parse(getData);
        setDatalocal(arr)
    }else{
      setDatalocal([])
    }
  }
  useEffect(()=>{
    navigation.setOptions({
      headerLeft: () => (
        <Button
          onPress={() => {
            navigation.goBack();
          }}
          title="Back"
        />
      ),
      headerRight:() => (<>
       {listName.length > 0 &&  <Button
        onPress={() => {
          setshowAddScore(true)
        }}
        title="AddScores"
      />}
      </>
      )
    });
  })
  
    const handleAddName = () =>{
      const valiName = [];
      listName.length > 0 && listName.map((v)=>{
        valiName.push(v.name)
      })
      if(name !==''){
        if(valiName.includes(name)){
          alert('Namesake !!!')
        }else{
          setcount(count+1)
          setlistName([...listName,{name: name}])
          setname('')
        }
      }else{
        alert('Enter name column !!!')
      }
    }
    const handleshowAdd = ()=>{
      setshowAddScore(true)
    }
    const addScore = () =>{
      
    }

    const handelAdd = ()=>{
        setListScore([...listScore, {score1,score2,score3,score4}])
        setscore1(0)
        setscore2(0)
        setscore3(0)
        setscore4(0)
        // setListScore([])
        console.log(listScore)
        setshowAddScore(false)
    }

    const handelFinish = async()=>{
      let dataSet = [];
      let date = new Date();
      const datetime = date.toLocaleString('en-US', {
        weekday: 'short', // long, short, narrow
        day: 'numeric', // numeric, 2-digit
        year: 'numeric', // numeric, 2-digit
        month: 'long', // numeric, 2-digit, long, short, narrow
        hour: 'numeric', // numeric, 2-digit
        minute: 'numeric', // numeric, 2-digit
        second: 'numeric', // numeric, 2-digit
    })
    const name1 = listName[0].name;
    const name2 = listName[1].name;
    const name3 = listName[2].name;
    const name4 = listName[3].name;
    const s1 = total1;
    const s2 = total2;
    const s3 = total3;
    const s4 = total4;

    const obj = {
         date : datetime,
         name1: name1,
         name2: name2,
         name3: name3,
         name4: name4,
         s1: s1,
         s2: s2,
         s3: s3,
         s4: s4,
         }
        if(dataLocal.length > 0){
          dataSet = dataLocal.concat([obj]);
          console.log(dataSet)
        }else{
          dataSet = [obj];
        }
        console.log("ssss", dataSet)
       await AsyncStorage.setItem("DATA", JSON.stringify(dataSet)) 
       const win = (s1 > s2 > s3 > s4)? {"tt": s1,"name":name1}: (s2 > s3 > s4)?{"tt": s2,"name":name2}: (s3 > s4)?{"tt": s3,"name":name3}: {"tt": s4,"name":name4}
       alert(`Congratulations ${win.name} on your win witch scores ${win.tt}`)
       navigation.goBack()
    }
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar 
            backgroundColor="white"
            barStyle="dark-content"
        />
      <View style={{
            width:windowW,
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center',
            borderBottomWidth:1,
            marginTop: 5
            
            }}>
            {listName.length > 0 && <Text style={{width:`${100/number}%`,textAlign:"center", fontWeight:'bold', color:'black', fontSize: 18}}>No</Text>}
          {listName?.map((value,index)=>{
            return(
              <Text key={value.name} style={{width:`${100/number}%`,textAlign:"center", fontWeight:'bold', color:'black', fontSize: 18}}>{value.name}</Text>
            )
          })}
      </View>
      <ScrollView style={{marginBottom: 10}}>
      {listScore.length > 0 && listScore.map((value,index)=>{
            return(
              <View key={index}
              style={{
                width:windowW,
                flexDirection:'row',
                justifyContent:'space-around',
                alignItems:'center',
                borderBottomWidth: 0.5,
                borderColor:'blue'
                
                }}>
                <Text style={{color: "red", fontSize: 18}}>{index+1}</Text>
                <Text style={{color: "black", fontSize: 18}}>{value.score1}</Text>
                <Text style={{color: "blue", fontSize: 18}}>{value.score2}</Text>
                <Text style={{color: "black", fontSize: 18}}>{value.score3}</Text>
                <Text style={{color: "blue", fontSize: 18}}>{value.score4}</Text>
              </View>
             
              
            )
          })}
        </ScrollView>
        <View style={{height: 45, width: windowW, backgroundColor:'#e6eaf0', bottom:0, flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
            <Text style={{color: "red", fontWeight: 'bold', fontSize: 18}}>Total : </Text>
            <Text style={{color: "red", fontWeight: 'bold', fontSize: 18}}>{total1} </Text>
            <Text style={{color: "red", fontWeight: 'bold', fontSize: 18}}>{total2} </Text>
            <Text style={{color: "red", fontWeight: 'bold', fontSize: 18}}>{total3} </Text>
            <Text style={{color: "red", fontWeight: 'bold', fontSize: 18}}>{total4} </Text>
        </View>
     {showAddScore ?
     <View style={styles.addScore}>
      <Text style={{textAlign:'center', fontWeight:'bold', fontSize: 16,marginTop: 10}}>Add Score</Text>
      <View style={{flexDirection:'row', justifyContent:'space-around', width:'100%'}}>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <Text  style={{textAlign:'center', fontWeight:'bold', fontSize: 16,marginTop: 10}}>{listName[1].name}</Text>
              <TextInput
                style={{
                  width: "100%",
                  marginTop: 10,
                  height: 40,
                  borderRadius: 10,
                  borderWidth:1,
                  borderColor:'red',
                  textAlign:'center',
                }}
                keyboardType="numeric"
                  placeholder="Enter"
                  onChangeText={setscore1}
                  value={score1}
                />
            </View>
            {/*  */}
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <Text  style={{textAlign:'center', fontWeight:'bold', fontSize: 16,marginTop: 10}}>{listName[2].name}</Text>
              <TextInput
                style={{
                  width: "100%",
                  marginTop: 10,
                  height: 40,
                  borderRadius: 10,
                  borderWidth:1,
                  borderColor:'red',
                  textAlign:'center',
                }}
                keyboardType="numeric"
                  placeholder="Enter"
                  onChangeText={setscore2}
                  value={score2}
                />
            </View>
            {/* 3 */}
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize: 16,marginTop: 10}}>{listName[2].name}</Text>
              <TextInput
                style={{
                  width: "100%",
                  marginTop: 10,
                  height: 40,
                  borderRadius: 10,
                  borderWidth:1,
                  borderColor:'red',
                  textAlign:'center',
                }}
                keyboardType="numeric"
                  placeholder="Enter"
                  onChangeText={setscore3}
                  value={score3}
                />
            </View>
            {/* 4 */}
            <View style={{flexDirection:'column', alignItems:'center'}}>
              <Text  style={{textAlign:'center', fontWeight:'bold', fontSize: 16,marginTop: 10}}>{listName[3].name}</Text>
              <TextInput
                style={{
                  width: "100%",
                  marginTop: 10,
                  height: 40,
                  borderRadius: 10,
                  borderWidth:1,
                  borderColor:'red',
                  textAlign:'center',
                }}
                keyboardType="numeric"
                  placeholder="Enter"
                  onChangeText={setscore4}
                  value={score4}
                />
            </View>
      </View>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', width:'100%'}}>
      <TouchableOpacity 
      style={{
        marginTop : 20,
        borderWidth: 1, 
        borderColor:'red',
         width: 60, 
         height: 35, 
         borderRadius:5, 
         alignItems:'center', 
         justifyContent:'center'}}
      onPress={()=>{
        handelAdd()
      }}
      >
        <Text>ADD</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={{
        marginTop : 20,
        borderWidth: 1, 
        borderColor:'red',
         width: 60, 
         height: 35, 
         borderRadius:5, 
         alignItems:'center', 
         justifyContent:'center'}}
      onPress={()=>{
        handelFinish()
      }}
      >
        <Text>FINISH</Text>
      </TouchableOpacity>
      </View>
    </View>:null
     }

     {showEnterInput &&
      <View style={styles.container1}>
      <ScrollView>
      <View style={{
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        padding: 5
      }}>
        <Text style={{fontSize: 16, color:'black', fontWeight: 'bold'}}>ENTER NAME COLUMN</Text>
        <View style={{marginTop: 15, flexDirection:'row', justifyContent:'space-between', marginBottom: 20}}>
          <TextInput
          style={{
            width: '50%',
            height: 40,
            borderRadius: 10,
            borderWidth:1,
            borderColor:'red'
          }}
            placeholder="Enter name column"
            onChangeText={setname}
            value={name}
          />
          <TouchableOpacity style={{
            width: '40%',
            justifyContent:'center',
            alignItems:'center',
            marginLeft: 10,
            height: 40,
            borderRadius: 10,
            borderWidth:1,
            borderColor:'red'}}
            onPress={()=>{
              handleAddName()
            }}>
              <Text style={{textAlign:'center',color: 'red'}}>Add Name</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </View> 
     }   
    </SafeAreaView>
  )
}
const windowW = Dimensions.get('window').width;
const windowH= Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor:'white',
    position:'relative'
  },
  addScore:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width: "90%",
    height: "auto",
    maxHeight: windowH*0.4,
    borderRadius: 5,
    backgroundColor:'white',
    position:'absolute',
    zIndex: 1,
    top: windowH*0.2,
    backgroundColor:'white',
    shadowColor:'#000',
    shadowOffset:{
        width: 1,
        height: 2
    },
    shadowOpacity:.5,
    shadowRadius: 3,
    elevation: 5,
    paddingBottom: 20
  },
  container1:{
    width: "80%",
    height: "auto",
    maxHeight: windowH*0.4,
    borderRadius: 5,
    backgroundColor:'white',
    position:'absolute',
    zIndex: 1,
    top: windowH*0.2,
    backgroundColor:'white',
    shadowColor:'#000',
    shadowOffset:{
        width: 1,
        height: 2
    },
    shadowOpacity:.5,
    shadowRadius: 3,
    elevation: 5,

  },
  header:{
      flexDirection:'row',
      justifyContent:'space-between',
      paddingHorizontal:15,
      alignItems:'center',
      height: 50,
      width:'100%',
      backgroundColor:'white',
      shadowColor:'#000',
      shadowOffset:{
          width: 1,
          height: 2
      },
      shadowOpacity:.5,
      shadowRadius: 3,
      elevation: 5,
      padding: 4
  }
})