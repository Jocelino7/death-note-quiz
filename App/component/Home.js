import React from "react"
import { TouchableOpacity, View, Text, StatusBar, SafeAreaView } from "react-native"
import EStyleSheet from "react-native-extended-stylesheet"
EStyleSheet.build()

class Home extends React.Component {

    render() {
        return (
            <>
                <SafeAreaView style={{flex:1}}>
                    <StatusBar backgroundColor="black" />
                    <View style={style.main}>
                        <Text style={style.title}>Death Note Quiz</Text>
                        <View style={style.container}>

                            <TouchableOpacity style={style.optionButton} onPress={() => this.props.navigation.navigate("Quiz")}>
                                <Text style={style.text}>Play</Text>
                            </TouchableOpacity>
                        
                            <TouchableOpacity style={style.optionButton} onPress={() => this.props.navigation.navigate("About")}>
                                <Text style={style.text}>About</Text>
                            </TouchableOpacity>



                        </View>

                    </View>


                </SafeAreaView>

            </>

        )

    }

}

const style = EStyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "black",

    },
    title: {
        textAlign: "center",
        fontStyle: 'italic',
        fontSize: 20,
        color: "#FFF"


    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

    },
    optionButton: {
        backgroundColor: "#fff",
        color: "black",
        padding: 4,
        width: "98%",
        borderRadius: 5,
        marginBottom: 2,
        marginLeft: 2,
        flexDirection: "row",
        marginVertical: "1rem"

    },
    text: {
        textAlign: "center",
        color:"black"

    }



})
export default Home