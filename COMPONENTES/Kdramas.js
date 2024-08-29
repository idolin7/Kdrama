import {Image, Text, View, ScrollView, StyleSheet } from "react-native";

function Kdramas(props){
    return (
    <View>
        <Image style={styles.kdrama} source={props.imagen}/>
        <Text style={styles.titulo}>{props.nombre}</Text>
    </View>
    )
}

export default Kdramas;
const styles = StyleSheet.create({
    kdrama:{
        marginTop:10,
        borderRadius:8,
        width:300,
        height:300,
    },
    titulo:{
        fontsize:12,
        fontWeight:'bold',
        color:'blue',
    }
})