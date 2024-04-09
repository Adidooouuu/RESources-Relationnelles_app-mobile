import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";
import styles from '../src/styling/registrationAndLoginProcessStyles.js'
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
    const logoReSources = require('./assets/adaptative-icon.png');
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