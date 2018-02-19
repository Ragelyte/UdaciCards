import {blue, gray, white} from '../utils/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        width: 300,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 2,
    },
    text: {
        fontSize: 25,
        textAlign: 'center',
    },
    correctBtn: {
        backgroundColor: 'green',
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },
    incorrectBtn: {
        backgroundColor: 'red',
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 2,
    },
    btnText: {
        color: 'white',
    },
    itemTitle: {
        backgroundColor: gray,
        borderRadius: 2,
        padding: 70,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        justifyContent: 'center',
    },
    itemBtn: {
        backgroundColor: gray,
        borderRadius: 2,
        padding: 70,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        justifyContent: 'center',
    },
    answer: {
        textAlign: 'center',
        color: 'red',
        fontWeight: 'bold',
    },
    answerText: {
        fontSize: 25,
        textAlign: 'center',
    },
    numOfCards: {
        fontSize: 20,
    },
    restartBtn: {
        backgroundColor: blue,
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 2,
    },
});

export default styles;