import React from "react";
import { View, Text } from "react-native";
import { University } from "../../../model/University";
import { styles } from "../styles";

interface UniversitiesItemProps {
  university: University;
}

const UniversityItem: React.FC<UniversitiesItemProps> = (props) => {
  const university = props.university;
  return (
    <View style={styles.uniItemContainer}>
      <View>
        <Text style={styles.uniName}>{university.name}</Text>
        <Text style={styles.uniAbbv}>{university.slug}</Text>
      </View>
      <Text style={styles.uniAdd}>{university.addressFmt}</Text>
    </View>
  );
};

export default UniversityItem;
