import { useState } from "react";
import { Dimensions } from "react-native";

export const useOrientation = (): "PORTRAIT" | "LANDSCAPE" => {
  const [screenData] = useState(Dimensions.get("screen"));

  if (screenData.width > screenData.height) {
    return "LANDSCAPE";
  } else {
    return "PORTRAIT";
  }
};

export const useIsCompactDevice = (): boolean => {
  const [screenData] = useState(Dimensions.get("screen"));
  return screenData.width < 500 || screenData.height < 500;
};
