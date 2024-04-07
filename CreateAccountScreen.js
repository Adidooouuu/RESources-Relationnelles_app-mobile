import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";
/* TODO : 
- use link when navigation is working
*/

export default function CreateAccountScreen() {
    const [alias, setAlias] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const handleAliasChange = (newAlias) => setAlias(newAlias);
    const handleEmailChange = (newEmail) => setEmail(newEmail);
    const handlePasswordChange = (newPassword) => setPassword(newPassword);
    const handleConfirmedPasswordChange = (newConfirmedPassword) => setConfirmedPassword(newConfirmedPassword);
    const logoReSources = require('./assets/LogoReSources.png');
    return (
        <View style={styles.container}>
            <View style={styles.page_title_element}>
                <Text style={styles.page_title}>Inscription</Text>
            </View>
            <Image source={logoReSources} />
            <View style={styles.text_input_group}>
                <View style={styles.text_input_element}>
                    <View style={styles.text_input_label}>
                        <Text>Pseudonyme</Text>
                        <Text style={styles.mandatory_input_sign}>*</Text>
                    </View>
                    <TextInput
                        style={styles.text_input}
                        value={alias}
                        onChangeText={handleAliasChange}
                    />
                </View>
                <View style={styles.text_input_element}>
                    <View style={styles.text_input_label}>
                        <Text>Identifiant</Text>
                        <Text style={styles.mandatory_input_sign}>*</Text>
                    </View>
                    <TextInput
                        style={styles.text_input}
                        value={email}
                        onChangeText={handleEmailChange}
                    />
                </View>
                <View style={styles.text_input_element}>
                    <View style={styles.text_input_label}>
                        <Text>Mot de passe</Text>
                        <Text style={styles.mandatory_input_sign}>*</Text>
                    </View>
                    <TextInput
                        style={styles.text_input}
                        value={password}
                        secureTextEntry={true}
                        onChangeText={handlePasswordChange}
                    />
                </View>
                <View style={styles.text_input_element}>
                    <View style={styles.text_input_label}>
                        <Text>Confirmer le mot de passe</Text>
                        <Text style={styles.mandatory_input_sign}>*</Text>
                    </View>
                    <TextInput
                        style={styles.text_input}
                        value={confirmedPassword}
                        secureTextEntry={true}
                        onChangeText={handleConfirmedPasswordChange}
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.main_button}>
                <Text style={styles.button_text}>Créer le compte</Text>
            </TouchableOpacity>
            <View style={styles.cta_account}>
                <Text>Nous nous connaissons déjà ?</Text>
                <Text style={styles.future_link}>Un mot de passe et ça passe !</Text>
            </View>
        </View>
    );
}
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
        justifyContent: 'center',
        borderRadius: 15,
        padding: 20
    },
    button_text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'uppercase'
    }
});