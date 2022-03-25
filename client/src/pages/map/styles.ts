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
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
  },
  uniItemBottomContainer: {
    padding: 15,
  },
  uniName: {
    fontSize: 14,
    color: "black",
  },
  uniAbbv: {
    fontSize: 12,
    color: "rgba(0,0,0,0.5)",
  },
  uniAdd: {
    fontSize: 12,
    color: "rgba(0,0,0,0.8)",
  },
  uniImageCarousel: {
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    overflow: "hidden",
  },
  uniImage: {
    resizeMode: "cover",
    width: "100%",
    height: 150,
  },
});
