import React from "react"
import {
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    Modal,
    Animated,
    Image,
    Alert,
} from "react-native"
import style from "../style/Quizstyle"
export default class Quiz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nextQuestion: 0,
            file: require("../File/questionFile.json")[0],
            correctAnswer: "",
            modalVisible: false,
            slideAnimation: new Animated.Value(0),
            gameOverMdalVisible: false,
            helpModalVisible: false,
            helpersTextModal: false,
            helperImage: "",
            helperText: "hello",
            helperName: "",
            helpersAnswerModal: false,
            helpCounter: 0


        }
        this.limit = require("../File/questionFile.json").length - 1

        this.helpers = [
            {
                id: 1,
                name: "Light Yagami",
                imagePath: require("../assets/Light.jpg"),
                answer: "I'm One Of The Best Studends Of All Japan, Then Believe me When I Say The Answer Is "
            },
            {
                id: 2,
                name: "Riuzaky",
                imagePath: require("../assets/L.jpg"),
                answer: "I'm Never Mistaken, I'm Pretty Sure The Answer Is "
            },
            {
                id: 3,
                name: "Nier",
                imagePath: require("../assets/Nier.jpg"),
                answer: "I'm Pretty Sure The Right Answer is "
            },
        ]

    }

    verifyAnswer = (args) => {

        if (args === this.state.file.correctAnswer) {
            return true
        }
        return false
    }
    pullNexQuestion = () => {
        this.setState((state) => {
            return { nextQuestion: state.nextQuestion + 1 };
        });

        this.setState((state) => {
            return ({ file: require("../File/questionFile.json")[state.nextQuestion] })
        })



    }

    componentDidMount() {
        this.props.navigation.setOptions({
            headerRight: () => (
                <TouchableHighlight
                    onPress={
                        this.handleHelp
                    }

                    style={{

                        backgroundColor: "black",
                        padding: 5,
                        borderRadius: 5,
                    }}
                >
                    <Text style={{ color: "#FFFF" }}>?</Text>
                </TouchableHighlight>
            )
        })
    }

    askforHelp = () => {
        this.setState(state => {
            return ({ helpModalVisible: !state.helpModalVisible })
        })

    }
    help = (object) => {
        const filterHelper = this.helpers.filter(helper => helper.id === object.id)
        this.setState(state => {
            return ({
                helpModalVisible: !state.helpModalVisible,
                helpersText: filterHelper[0].helperText,
                helpersAnswerModal: !state.helpersAnswerModal,
                helperImage: filterHelper[0].imagePath,
                helperText: filterHelper[0].answer,
                helperName: filterHelper[0].name

            })
        })


    }
    countHelp = () => {
        this.setState(state => {
            return ({ helpCounter: state.helpCounter + 1 })
        })

    }
    limitHelp = () => {
        if (this.state.helpCounter >= 3)
            return true
        return false
    }
    handleHelp = () => {
        if (this.limitHelp()) {
            return Alert.alert("You can only get help 3 times!")
        }
        this.dismissAllModals()
        return this.askforHelp()


    }
    dismissAllModals = () => {
        this.setState(state => {
            return ({
                modalVisible: false,
                gameOverMdalVisible: false,
                helpModalVisible: false,
                helpersAnswerModal: false
            })
        })
    }


    congratulate = () => {
        this.setState((state) => {
            return ({ modalVisible: !state.modalVisible })
        })
    }

    gameOver = () => {
        this.setState(state => {
            return ({ gameOverMdalVisible: !state.gameOverMdalVisible })
        })

    }
    resetGame = () => {
        this.dismissAllModals()
        this.setState(state => {
            return ({ nextQuestion: 0, file: require("../File/questionFile.json")[0], helpCounter: 0 })
        })

    }
    slideAnimate = () => {
        Animated.timing(this.state.slideAnimation, {
            toValue: 1000,
            duration: 500,
            useNativeDriver: true
        }).start(({ finished }) => {
            this.slideAnimateBack()
        })
    }

    slideAnimateBack = () => {
        Animated.timing(this.state.slideAnimation, {
            toValue: 0,
            duration: 1,
            useNativeDriver: true
        }).start()
    }
    handleQuestion = (args) => {
        if (this.verifyAnswer(args)) {
            if (this.state.nextQuestion === this.limit)
                return this.congratulate()
            this.slideAnimate()
            return this.pullNexQuestion()
        }
        this.gameOver()


    }

    render() {
        const modalVisible = this.state
        return (
            <View style={style.container} >

                {/*================== Animated Question Conatiner =========================*/}

                <Animated.View style={[style.questionSection, {
                    transform: [{ translateX: this.state.slideAnimation }]
                }]}>
                    <View style={style.mainQuestionText}>
                        <Text style={style.blackText}>
                            {this.state.file.question}
                        </Text>

                    </View>


                </Animated.View>

                {/*================== Animated Answers Conatiner =========================*/}

                <Animated.View style={[style.optionContainer, {
                    transform: [{ translateX: this.state.slideAnimation }]
                }]}>
                    {
                        this.state.file.options.map(option => {
                            return (
                                <TouchableOpacity key={option.letter} style={style.optionButton} onPress={() => this.handleQuestion(option.answer)}>
                                    <Text style={style.optionLetterText}>{option.letter}</Text>
                                    <Text style={style.blackText}>
                                        {option.answer}
                                    </Text>
                                </TouchableOpacity>

                            )



                        })

                    }


                </Animated.View>
                {/*================== Congratulate Modal =========================*/}
                <Modal animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                >
                    <View style={style.congratulation}>
                        <Text style={style.whiteText}>
                            Congratulations You won the quiz, you know almost everything about Death Note
                            we pay respect for you death note knowledge
                        </Text>
                        <TouchableOpacity style={style.genericButton} onPress={() => this.props.navigation.navigate("Home")}>
                            <Text style={style.blackText}>
                                Go To Main Menu

                            </Text>

                        </TouchableOpacity>
                    </View>

                </Modal>

                {/*================== Game Over Modal =========================*/}

                <Modal animationType="slide"
                    transparent={true}
                    visible={this.state.gameOverMdalVisible}
                >
                    <View style={style.congratulation}>
                        <Text style={style.whiteText}>
                            Game Over
                        </Text>
                        <TouchableOpacity style={style.genericButton} onPress={() => this.resetGame()}>
                            <Text style={style.blackText}>
                                Try Again

                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={style.genericButton} onPress={() => this.props.navigation.navigate("Home")}>
                            <Text style={style.blackText}>
                                Go to Main Menu

                            </Text>

                        </TouchableOpacity>
                    </View>

                </Modal>

                <Modal animationType="slide"
                    transparent={true}
                    visible={this.state.helpModalVisible}
                >
                    {/*==================Help Modal =========================*/}
                    <View style={style.helpContainer} >
                        <Text style={{ color: "white", textAlign: "center" }}>Choose One To Help You</Text>
                        {
                            this.helpers.map(helper => {
                                return (
                                    <TouchableOpacity key={helper.id} style={style.helpersButton}
                                        onPress={() => this.help({ id: helper.id, helperText: helper.helperText })

                                        }
                                    >
                                        <Image style={style.image} source={helper.imagePath} />
                                        <Text style={style.whiteText}>
                                            {helper.name}

                                        </Text>
                                    </TouchableOpacity>


                                )

                            })
                        }

                    </View>


                </Modal>
                {/*==================Answer Modal =========================*/}

                <Modal
                    animationType="slide"
                    visible={this.state.helpersAnswerModal}
                >
                    <View style={style.helpModal}>
                        <Text style={style.whiteText}>{this.state.helperName}</Text>
                        <Image source={this.state.helperImage} style={style.helpModalImage} />
                        <Text style={style.whiteText}>
                            {this.state.helperText}
                            "{this.state.file.correctAnswer}"
                        </Text>
                        <TouchableHighlight style={style.genericButton} onPress={() => {
                            this.countHelp()
                            this.dismissAllModals()
                        }}>
                            <Text style={style.blackText}>Ok</Text>
                        </TouchableHighlight>

                    </View>


                </Modal>




            </View>
        );

    }

}

