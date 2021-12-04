import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({ header, errMsg, title, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  return (
    <>
      <Spacer>
        <Text h3>{header}</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        label="password"
        value={password}
        onChangeText={setPass}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      {errMsg ? <Text style={styles.err}>{errMsg}</Text> : null}
      <Spacer>
        <Button title={title} onPress={() => onSubmit({ email, password })} />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  err: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
  },
});

export default AuthForm;
