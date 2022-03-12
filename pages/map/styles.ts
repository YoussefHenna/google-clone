import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  mapView: {
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  bottomSheetContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    bottom: 0,
  },
  bottomSheet: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  universitiesTitle: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    marginStart: 20,
  },

  uniItemContainer: {
    width: "90%",
    maxWidth: 400,
    marginTop: 10,
    alignSelf: "center",
    borderRadius: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
  },
  uniItemTopContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  uniImage: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  uniName: {
    fontSize: 14,
    marginStart: 20,
    color: "black",
  },
  uniAbbv: {
    fontSize: 12,
    color: "rgba(0,0,0,0.5)",
    marginStart: 20,
  },
  uniAdd: {
    fontSize: 12,
    color: "rgba(0,0,0,0.8)",
  },
});
