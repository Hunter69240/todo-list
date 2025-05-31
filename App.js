import React ,{useState} from 'react';

import { StyleSheet, 
  Text, 
  View,
  Platform,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import Task from './components/Task';
import { KeyboardAvoidingView, TextInput } from 'react-native';
export default function App() {
  const [task,setTask]=useState()
  const [taskitems,settaskitems]=useState([])
  const handleaddtask =()=>{
    Keyboard.dismiss()
    settaskitems([...taskitems,task])
    setTask(null)
  }

  const completetask=(index)=>{
    let itemsCopy=[...taskitems]
    itemsCopy.splice(index,1)
    settaskitems(itemsCopy)
  }
  return (
    <View style={styles.container}>
        <View style={styles.listwrapper}>
          <Text style={styles.task}>Todays Task</Text>
        </View>

        <View style={styles.items}>
          {
            taskitems.map((item,index)=>{
              return (
                <TouchableOpacity  key={index} onPress={()=>completetask(index)}>
                   <Task text={item}></Task>
                </TouchableOpacity>
              ) 
             
            })
          }
          {/* <Task text={'Task 1'}/>
          <Task text={'Task 2'}/>
          <Task text={'Task 3'}/> */}
        </View>

        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" :"height"}
        style={styles.writetaskwrapper}
        >
          <TextInput
          style={styles.input}
          placeholder='Write Task here'
          onChangeText={(text)=>setTask(text)}
          value={task}/>
          <TouchableOpacity
          onPress={()=>handleaddtask()}>
          <View style={styles.addwrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
        </KeyboardAvoidingView>

        {/* <TouchableOpacity>
          <View style={styles.addwrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  listwrapper:{
    paddingTop:80,  
    paddingHorizontal:20
  },
  task:{
    fontSize:24,
    fontWeight:'bold'
  },
  items:{
    marginTop:30
  },
  writetaskwrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  input:{
    padding:15,
    width:250,
    paddingHorizontal:15,
    backgroundColor:'#fff',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1
  },
  addwrapper:{
    width:60,
    height:60,
    backgroundColor:'#fff',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1
  },
  addText:{},
});
