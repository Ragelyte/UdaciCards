import { StyleSheet } from 'react-native';
import { white } from '../utils/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
    },
    numOfCards: {
        textAlign: 'center',
    },
    item: {
        backgroundColor: white,
        borderRadius: 2,
        padding: 70,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        justifyContent: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        alignSelf: 'stretch',
    },
});

export default styles;