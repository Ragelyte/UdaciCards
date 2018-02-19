import { StyleSheet } from 'react-native';
import { blue } from '../utils/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        height: 40,
        width: 300,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 2,
        textAlign: 'center',
    },
    text: {
        fontSize: 50,
        textAlign: 'center',
    },
    btn: {
        backgroundColor: blue,
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },
    btnText: {
        color: 'white',
    },
});

export default styles;