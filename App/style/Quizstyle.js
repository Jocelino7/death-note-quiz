import EStyleSheet from "react-native-extended-stylesheet"

EStyleSheet.build()

  const style = EStyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        alignItems: 'center',
        backgroundColor: "black",
        width: "100%"


    },
    questionSection: {
        flex: 1,
        marginTop: 10,
        flexDirection: "row",
        padding: 4,
        borderRadius: 2,
        height: "50%",
        width: '95%',
        alignItems: "center",
        backgroundColor: "#FFF"
    },
    mainQuestionText: {

        color: "black",
        textAlign: "center",
        width: "100%"

    },

    optionContainer: {
        width: "100%",
        padding: 4,
        borderRadius: 4,
        marginVertical: 4,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    whiteText: {
        color: "#FFF",
        textAlign: "center"

    },
    blackText: {
        color: "black",
        textAlign: "center"


    },
    optionButton: {
        marginTop: 5,
        marginBottom: 2,
        backgroundColor: "#fff",
        color: "black",
        padding: 4,
        width: "98%",
        borderRadius: 5,
        marginVertical: "1rem",
        marginLeft: 2,
        flexDirection: "row",


    },
    optionLetterText: {
        color: "#FFF",
        backgroundColor: "black",
        marginRight: "0.5rem",
        padding: "0.2rem",
        borderRadius: "0.2rem",
        alignItems: "center"
    },

    congratulation: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        backgroundColor: "black"

    },

    genericButton: {
        backgroundColor: "#fff",
        color: "black",
        padding: 4,
        width: "98%",
        borderRadius: 5,
        marginBottom: 2,
        textAlign: "center",
        marginVertical: "1rem"

    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 5,
    },
    helpContainer: {
        flex: 1,
        backgroundColor: "black"

    },
    helpersButton: {
        alignItems: "center",
        marginVertical: "1rem"


    },

    helpModal: {
        width: "100%",
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
    },
    helpModalText: {
        color: "white",
        marginVertical: "1rem"

    },
    helpModalImage: {
        width: "80%",
        height: "30%",
        borderRadius: 5,

    }


})
export default style
