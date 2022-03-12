import React, { useState } from "react";
import { StyleSheet, TextInput, View, Image, Text } from "react-native";

interface SearchBarProps {
  value: string;
  onValueChange: (value: string) => void;
  error?: string;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const [focused, setIsFocused] = useState(false);
  return (
    <View>
      <View
        style={[
          styles.searchContainer,
          focused ? styles.searchContainerShadow : undefined,
        ]}
      >
        <Image
          source={require("../assets/search.png")}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchBar}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          value={props.value}
          onChangeText={props.onValueChange}
        />
      </View>
      {props.error && <Text style={styles.errorText}>{props.error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 10,
    width: 350,
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "#DCDCDC",
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  searchContainerShadow: {
    borderWidth: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  searchIcon: {
    resizeMode: "contain",
    width: 15,
    height: 15,
  },
  searchBarContainer: {},
  searchBar: {
    flex: 1,
    fontSize: 14,
    paddingStart: 10,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginStart: 10,
    marginTop: 5,
  },
});

export default SearchBar;
