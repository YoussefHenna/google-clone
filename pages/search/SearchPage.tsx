import React, { useState } from "react";
import { Image, TouchableWithoutFeedback, View, Keyboard } from "react-native";
import GoogleButton from "../../components/GoogleButton";
import SearchBar from "../../components/SearchBar";
import { useIsCompactDevice, useOrientation } from "../../util/screen_hooks";
import { styles } from "./styles";

const SearchPage: React.FC = () => {
  const orientation = useOrientation();
  const isCompact = useIsCompactDevice();

  const [searchValue, setSearchValue] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.mainContainer}>
        <Image
          source={require("../../assets/google_logo.png")}
          style={styles.googleLogo}
        />

        <SearchBar value={searchValue} onValueChange={setSearchValue} />

        <View style={styles.buttonsContainer}>
          <GoogleButton onPress={Keyboard.dismiss} label="Google search" />
          <View style={{ width: 16 }} />
          <GoogleButton onPress={Keyboard.dismiss} label="I'm feeling lucky" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchPage;
