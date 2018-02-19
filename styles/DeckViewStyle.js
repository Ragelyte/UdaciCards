import { StyleSheet } from 'react-native';
import { white, blue, black, gray } from '../utils/colors';

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
        fontSize: 50,
        textAlign: 'center',
    },
    addCardBtn: {
        backgroundColor: white,
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: black,
        borderRadius: 2,
        borderWidth: 1,
    },
    startQuizBtn: {
        backgroundColor: blue,
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 10,
    },
    btnText: {
        color: white,
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
    numOfCards: {
        textAlign: 'center',
    },
    btnContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default styles;