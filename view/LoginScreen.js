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

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleEmailChange = (newEmail) => setEmail(newEmail);
    const handlePasswordChange = (newPassword) => setPassword(newPassword);
    const logoReSources = require('./assets/adaptative-icon.png');
    return (
        <View style={styles.container}>
            <View style={styles.page_title_element}>
                <Text style={styles.page_title}>Connexion</Text>
            </View>
            <Image source={logoReSources} />
            <View style={[styles.text_input_group, { gap: 40 }]}>
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
            </View>
            <Text style={styles.future_link}>Mot de passe oublié ?</Text>
            <TouchableOpacity style={styles.main_button}>
                <Text style={styles.button_text}>Se connecter</Text>
            </TouchableOpacity>
            <View style={styles.cta_account}>
                <Text>Nous ne nous connaissons pas ?</Text>
                <Text style={styles.future_link}>Apprenons à nous connaître !</Text>
            </View>
        </View>
    );
}