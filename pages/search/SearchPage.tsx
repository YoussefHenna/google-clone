import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Image, TouchableWithoutFeedback, View, Keyboard } from "react-native";
import GoogleButton from "../../components/GoogleButton";
import SearchBar from "../../components/SearchBar";
import { Location } from "../../model/Location";
import { RootStackParamList } from "../../navigation/Navigation";
import { getAllLocations } from "../../remote/api";
import UniversitiesList from "../map/components/UniversitiesList";
import { styles } from "./styles";

const SearchPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [textError, setTextError] = useState<string | undefined>();
  const [locations, setLocations] = useState<Location[]>([]);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "Search">>();

  useEffect(() => {
    getAllLocations().then((result) => setLocations(result));
  }, []);

  const onSubmit = () => {
    const typedLocation = locations.find(
      (loc) => loc.key === searchValue.toUpperCase()
    );
    if (typedLocation) {
      navigation.navigate("Map", { location: typedLocation });
    } else {
      setTextError("Invalid location key");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.mainContainer}>
        <Image
          source={require("../../assets/google_logo.png")}
          style={styles.googleLogo}
        />

        <SearchBar
          value={searchValue}
          onValueChange={(value) => {
            setSearchValue(value);
            setTextError(undefined);
          }}
          error={textError}
        />

        <View style={styles.buttonsContainer}>
          <GoogleButton onPress={onSubmit} label="Google search" />
          <View style={{ width: 16 }} />
          <GoogleButton onPress={onSubmit} label="I'm feeling lucky" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchPage;
