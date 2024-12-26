import { FlatList, StyleSheet, Text, View, Keyboard } from 'react-native';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import TaskCard from './components/TaskCard';
import AddBar from './components/AddBar';

enum KeyboardStatus{
  visible,
  hidden
}

export default function App() {

  const [keyboardStatus,setKeyboardStatus] = useState<KeyboardStatus>(KeyboardStatus.hidden);

  const [tasks,setTasks] = useState<ITask[]>([
    {id:1,title:'Learn',content:'learn the basics of react native'},
    {id:2,title:'Implement',content:'implement some examples to become stronger'},
    {id:3,title:'Apply',content:'apply for a job'},
  ]);
  
  const chosenStyles = (keyboardStatus == KeyboardStatus.visible ? keyboardStyles : styles);
  
  Keyboard.addListener('keyboardDidShow',()=>{
    setKeyboardStatus(KeyboardStatus.visible);
  });

  Keyboard.addListener('keyboardDidHide',()=>{
    setKeyboardStatus(KeyboardStatus.hidden);
  });

  const OnPressTaskHandler:(selectedTaskId:number)=>void = (selectedTaskId)=>{
    setTasks(tasks.filter(task=>task.id!=selectedTaskId));
  };

  const OnPressAddHandler:(newtask:ITask)=>void = (newtask)=>{
    let newarr:ITask[] = [];
    newarr = newarr.concat(tasks);
    // alert(tasks==tasks);
    newarr.push({id:newarr.length+1,title:newtask.title,content:newtask.content});
    setTasks(newarr);
  };

  
  return (
    <View style={chosenStyles.container}>
      <View style={chosenStyles.header}>
        <Header/>
      </View>
      
      <View style={chosenStyles.body}>
        <FlatList
          data={tasks}
          renderItem={({item})=>(
            <TaskCard
              task={item}
              onPressHandler={()=>OnPressTaskHandler(item.id)}
            />
          )}
          keyExtractor={(item,index) => index.toString()}
        />
      </View>
      
      <View style={chosenStyles.footer}>
        <AddBar
          onPressAddHandler={OnPressAddHandler}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
  },
  header:{
    flex:1,
  },
  body:{
    flex:7,
  },
  footer:{
    flex:2,
  }
});

const keyboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
  },
  header:{
    flex:1,
  },
  body:{
    flex:4,
  },
  footer:{
    flex:2,
  }
});