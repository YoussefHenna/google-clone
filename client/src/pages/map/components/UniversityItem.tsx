import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { NativeViewGestureHandler } from "react-native-gesture-handler";
import Carousel from "react-native-snap-carousel";
import { University } from "../../../model/University";
import { styles } from "../styles";

interface UniversitiesItemProps {
  university: University;
}

const UniversityItem: React.FC<UniversitiesItemProps> = (props) => {
  const university = props.university;

  const width = Dimensions.get("screen").width;
  const cardWidth = Math.min(400, width * 0.9);
  return (
    <View style={[styles.uniItemContainer, { width: cardWidth }]}>
      <NativeViewGestureHandler disallowInterruption={true}>
        <Carousel
          slideStyle={styles.uniImageCarousel}
          layout={"default"}
          ref={() => {}}
          data={university.images}
          renderItem={(current) => {
            return (
              <Image style={styles.uniImage} source={{ uri: current.item }} />
            );
          }}
          sliderWidth={cardWidth}
          itemWidth={cardWidth}
        />
      </NativeViewGestureHandler>

      <View style={styles.uniItemBottomContainer}>
        <View>
          <Text style={styles.uniName}>{university.name}</Text>
          <Text style={styles.uniAbbv}>{university.slug}</Text>
        </View>
        <Text style={styles.uniAdd}>{university.addressFmt}</Text>
      </View>
    </View>
  );
};

export default UniversityItem;
