import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, { useMemo } from "react";
import { Image, View } from "react-native";
import { University } from "../../../model/University";
import { styles } from "../styles";
import { Text } from "react-native";

interface UniversitiesListProps {
  locationKey: string;
  universities: University[];
}

const UniversitiesList: React.FC<UniversitiesListProps> = (props) => {
  const snapPoints = useMemo(() => [90, "60%"], []);

  return (
    <View pointerEvents="box-none" style={styles.bottomSheetContainer}>
      <BottomSheet
        backdropComponent={(props) => {
          return <BottomSheetBackdrop {...props} appearsOnIndex={1} />;
        }}
        snapPoints={snapPoints}
      >
        <BottomSheetFlatList
          ListHeaderComponent={
            <Text
              style={styles.universitiesTitle}
            >{`${props.locationKey} Universities`}</Text>
          }
          data={props.universities}
          keyExtractor={(item) => item.name}
          renderItem={(item) => {
            return <UniversityItem university={item.item} />;
          }}
        />
      </BottomSheet>
    </View>
  );
};

interface UniversitiesItemProps {
  university: University;
}

const UniversityItem: React.FC<UniversitiesItemProps> = (props) => {
  const university = props.university;
  return (
    <View style={styles.uniItemContainer}>
      <View style={styles.uniItemTopContainer}>
        <Image style={styles.uniImage} source={{ uri: university.image }} />
        <View>
          <Text style={styles.uniName}>{university.name}</Text>
          <Text style={styles.uniAbbv}>{university.slug}</Text>
        </View>
      </View>
      <Text style={styles.uniAdd}>{university.addressFmt}</Text>
    </View>
  );
};

export default UniversitiesList;
