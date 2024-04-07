import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    '*,*:before, *:after': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        content: 'none',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 24
    },
    page_title_element: {
        borderBottomWidth: 1,
        borderColor: 'black',
        paddingBottom: 12,
        width: '100%'
    },
    cta_account: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    text_input_group: {
        flex: 0,
        flexDirection: 'column',
        width: '100%',
        gap: 20
    },
    text_input_element: {
        borderBottomWidth: 1,
        borderColor: '#1683A2'
    },
    text_input_label: {
        flex: 0,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'start',
        alignItems: 'left',
        gap: 5
    },
    mandatory_input_sign: {
        color: '#1683A2'
    },
    page_title: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center'
    },
    future_link: {
        textDecorationLine: 'underline',
        color: '#1683A2'
    },
    main_button: {
        width: '100%',
        backgroundColor: '#37B4A4',
        alignItems: 'center',
        borderRadius: 15,
        padding: 20
    },
    button_text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    }
});
export default styles;