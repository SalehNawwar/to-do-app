import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

interface Props{
    onPressAddHandler:(task:ITask)=>void
}

export default function AddBar({onPressAddHandler}:Props){

    const [newtask,setNewTask] = useState<ITask>({id:-1,title:'',content:''});
    
    return(
        <View style={styles.container}>
            <View style={styles.boxarea}>
                <View style={styles.titlebox}>
                    <TextInput
                        style={styles.textbox}
                        placeholder="Title"
                        onChangeText={(val)=>{setNewTask({id:-1,title:val,content:newtask.content})}}
                        />
                </View>
                <View style={styles.contentbox}>
                    <TextInput
                        style={styles.textbox}
                        placeholder="content"
                        onChangeText={(val)=>{setNewTask({id:-1,title:newtask.title,content:val})}}
                        multiline
                        />
                </View>
            </View>
            <View style={styles.button}>
                <Button
                    title="ADD"
                    onPress={()=>onPressAddHandler(newtask)}
                >

                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'coral',
        height:'100%',
    },
    titlebox:{
        backgroundColor:'#ddd',
        flex:1,
        margin:2,
    },
    contentbox:{
        backgroundColor:'#ddd',
        flex:2,
    },
    boxarea:{
        flex:2,
    },
    button:{
        flex:1,
        margin:2,
    },
    textbox:{
        height:'100%',
        justifyContent:'flex-start',
        textAlignVertical:'top',
    }
});