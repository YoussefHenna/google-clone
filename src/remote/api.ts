import axios from "axios";
import { Location } from "../model/Location";
import { University } from "../model/University";

const api = axios.create({
  baseURL: "http://10.0.2.2:3000",
});

export async function getAllLocations(): Promise<Location[]> {
  try {
    const result = await api.get("/locations");
    const resultObj = result.data;

    const locations: Location[] = [];
    const values = Object.values(resultObj);

    Object.keys(resultObj).forEach((key, index) => {
      const location = values[index] as Location;
      location.key = key;
      locations.push(location);
    });

    return locations;
  } catch (e) {
    console.log(e);
    return [];
  }
}

export async function getUniversities(
  locationKey: string
): Promise<University[]> {
  try {
    const result = await api.get(`/universities/${locationKey}`);
    return result.data as University[];
  } catch (e) {
    console.log(e);
    return [];
  }
}
