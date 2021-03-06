import React from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";

const TrackForm = () => {
  return (
    <>
      <Spacer>
        <Input placeholder="Enter Name" />
      </Spacer>
      <Button title="Start Recording" />
    </>
  );
};

export default TrackForm;
