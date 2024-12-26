import {Text,StyleSheet, View} from "react-native";

export default function Header(){
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>TO DO LIST</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'coral',
        alignItems:'center',
        justifyContent:'center',
        height:'100%',
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
    }
});