import React from "react"
import { TouchableOpacity, View, Text, StatusBar, SafeAreaView } from "react-native"
import EStyleSheet from "react-native-extended-stylesheet"
EStyleSheet.build()

class About extends React.Component {

    render() {
        return (
            <>
                <SafeAreaView style={{ flex: 1 }}>
                    <StatusBar backgroundColor="black" />
                    <View style={style.main}>
                        <View style={style.container}>
                            <Text style={style.text}>Developed By Jocelino Fernandes</Text>
                            <Text style={style.text}>Email jocelinofernandes@gmail.com</Text>
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

    container: {
        flex: 1,
        marginVertical: "2rem"

    },

    text: {
        textAlign: "center",
        color: "#FFF"

    }

})
export default About