import { StyleSheet } from 'react-native';

const mainColor = 'green';
const correctColor = 'green';
const wrongColor = 'red';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        alignItems: 'center',
    },
    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
        width: 350,
    },
    mainImage: {
        borderRadius: 65,
        marginTop: 65,
        padding: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        height: 406,
        width: 224,
    },
    navButton: {
        borderRadius: 65,
        marginTop: 15,
        height: 65,
        width: 450,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    navButtonText: {
        padding: 10,
        fontSize: 35,
        color: 'white',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    rowContainer: {
        flexDirection: 'row',
        margin: 5,
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    text: {
        padding: 10,
        fontSize: 18,
    },
    wrappedList: {
        marginTop: 5,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    input: {
        width: 250,
        height: 50,
        padding: 4,
        fontSize: 23,
        borderWidth: 1,
        borderColor: mainColor,
        borderRadius: 8,
        color: 'black',
        justifyContent: 'center',
        textAlign: 'center',
    },
    gameButton: {
        height: 90,
        width: 90,
        flexWrap: 'wrap',
        margin: 2,
    },
    activeGameButton: {
        margin: 2,
        borderRadius: 10,
        height: 90,
        width: 90,
        flexWrap: 'wrap',
        borderColor: mainColor,
        borderWidth: 5,
    },
    gameImage: {
        borderRadius: 10,
        height: 90,
        width: 90,
    },
    activeGameImage: {
        borderRadius: 8,
        height: 80,
        width: 80,
    },
    modalButton: {
        borderRadius: 45,
        marginTop: 15,
        height: 44,
        width: 250,
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: mainColor,
    },
    modalButtonText: {
        padding: 10,
        fontSize: 35,
        color: 'white',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    modalInput: {
        width: 150,
        height: 50,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 8,
        color: 'black',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        alignSelf: 'center',
    },
    correctImage: {
        height: 200,
        width: 200,
        borderColor: correctColor,
        borderWidth: 2,
        borderRadius: 45,
    },
    wrongImage: {
        margin: 15,
        height: 100,
        width: 100,
        borderColor: wrongColor,
        borderWidth: 2,
        borderRadius: 25,
    },
});
