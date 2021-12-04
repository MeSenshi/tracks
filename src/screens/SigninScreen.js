import React, {useContext} from 'react';
import {View, StyleSheet} from "react-native";
import {NavigationEvents} from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import {Context as AuthContext} from "../context/AuthContext";

const SigninScreen = () =>{
    const { state, signin, clearErrMessage } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrMessage}/>
            <AuthForm
                header="Sign In to your account"
                errMsg={state.errMessage}
                title="Sign In"
                onSubmit={signin}
            />
            <NavLink
                routeName="Signup"
                linkText="Dont have an account sign up instead"
            />
        </View>
    )
};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 100,
    },
})

export default SigninScreen;