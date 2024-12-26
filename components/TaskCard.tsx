import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props{
    task:ITask
    onPressHandler:()=>void
}

export default function TaskCard({task,onPressHandler}:Props){
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={onPressHandler}
            >
                <Text style={styles.title}>{task.id + '. ' + task.title}</Text>
                <Text style={styles.content}>{task.content}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:'coral',
        margin:1,
        padding:1,
    },
    title:{
        textAlign:'left',
        fontSize:30,
        color:'#fff',
        fontWeight:'bold',
        backgroundColor:'#555',
        padding:5,
    },
    content:{
        textAlign:'left',
        fontSize:14,
        backgroundColor:'#aaa',
        padding:5,
    }
});