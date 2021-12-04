import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Spacer from "./Spacer";
import {withNavigation} from "react-navigation";

const NavLink = ({ navigation, linkText, routeName }) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Spacer>
          <Text style={styles.link}>{linkText}</Text>
        </Spacer>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "blue",
    textAlign: "center",
  },
});

export default withNavigation(NavLink);
