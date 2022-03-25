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
import UniversityItem from "./UniversityItem";

interface UniversitiesListProps {
  locationKey: string;
  universities: University[];
}

const UniversitiesList: React.FC<UniversitiesListProps> = (props) => {
  const snapPoints = useMemo(() => [70, "90%"], []);

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
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={(item) => {
            return <UniversityItem university={item.item} />;
          }}
        />
      </BottomSheet>
    </View>
  );
};

export default UniversitiesList;
