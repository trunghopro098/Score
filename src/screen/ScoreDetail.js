import { View, Text, StatusBar, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function ScoreDetail({route,navgation}) {
  const {number} = route.params;
  const [count, setcount] = useState(0)
  const [name, setname] = useState('')
  const [showEnterInput, setshowEnterInput] = useState(true)
  const [showAddScore, setshowAddScore] = useState(false)
  const [listScore, setListScore] = useState([])
  const [listName, setlistName] = useState([])
  const [rowCount, setrowCount] = useState(1)
  const [score, setscore] = useState()

  useEffect(() => {
    if(count === number){
      setTimeout(() => {
        setshowEnterInput(false)
      }, 500);
    }
  }, [count])
  
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
      if(listScore.length > 0){
        listScore.map((e)=>{
          if(Number.isInteger(e)){
            console.log(e)
          }else{
           return alert('value')
          }
        })
      }
      console.log('darqa', listScore)
      setListScore([])
    }
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar 
            backgroundColor="white"
            barStyle="dark-content"
        />
      <View style={styles.header}>
        <Text>header</Text>
        <Text onPress={()=>{handleshowAdd()}}>header</Text>
      </View>
      <View style={{
            width:windowW,
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center',
            borderBottomWidth:1
            }}>
              <Text style={{width:`${100/(1+number)}%`,textAlign:"center", fontWeight:'bold', color:'black', fontSize: 18}}>NO</Text>
          {listName?.map((value,index)=>{
            return(
              <Text key={value.name} style={{width:`${100/number}%`,textAlign:"center", fontWeight:'bold', color:'black', fontSize: 18}}>{value.name}</Text>
            )
          })}

      </View>


     {showAddScore ?
     <View style={styles.addScore}>
      <Text style={{textAlign:'center', fontWeight:'bold', fontSize: 16,marginTop: 10}}>Add Score</Text>
      <View style={{flexDirection:'row', justifyContent:'space-around', width:'100%'}}>
        {listName.map((value,index)=>{
          return(
            <View key={value.name} style={{flexDirection:'column', alignItems:'center'}}>
              <Text  style={{textAlign:'center', fontWeight:'bold', fontSize: 16,marginTop: 10}}>{value.name}</Text>
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
                  placeholder="Enter"
                  onChangeText={(e)=>{
                    // setscore(e)
                    setListScore([listScore[index] = e])
                  }}
                  value={listScore[index]}
                />
            </View>
          )
        })}
      </View>
      <TouchableOpacity 
      style={{marginTop : 20, borderWidth: 1, borderColor:'red', width: 60, height: 35, borderRadius:5, alignItems:'center', justifyContent:'center'}}
      onPress={()=>{
        handelAdd()
      }}
      >
        <Text>ADD</Text>
      </TouchableOpacity>
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
    backgroundColor:'pink',
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