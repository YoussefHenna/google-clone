import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { RootStackParamList } from "../../navigation/Navigation";
import { styles } from "./styles";
import MapView, { Marker } from "react-native-maps";
import { University } from "../../model/University";
import { getUniversities } from "../../remote/api";
import UniversitiesList from "./components/UniversitiesList";

const MapPage: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, "Map">>();
  const location = route.params.location;
  const geometry = location.geometry;

  const [universities, setUniversities] = useState<University[]>([]);

  useEffect(() => {
    getUniversities(location.key).then((result) => setUniversities(result));
  }, []);

  return (
    <View style={styles.mainContainer}>
      <MapView
        style={styles.mapView}
        initialRegion={{
          latitude: geometry.location.latitude,
          longitude: geometry.location.longitude,
          latitudeDelta: 5,
          longitudeDelta: 5,
        }}
      >
        {universities.map((university, index) => {
          return (
            <Marker
              key={index}
              title={university.name}
              coordinate={{
                latitude: university.lat,
                longitude: university.lng,
              }}
            />
          );
        })}
      </MapView>
      <UniversitiesList
        locationKey={location.key}
        universities={universities}
      />
    </View>
  );
};

export default MapPage;
