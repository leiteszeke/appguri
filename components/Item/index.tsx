import { Text, TouchableOpacity } from "react-native";
import C, { apply } from "consistencss";
import { FontAwesome } from "@expo/vector-icons";

const Item = ({ label, onPress }: { label: string; onPress: () => void }) => {
  return (
    <TouchableOpacity
      style={apply(
        C.bgWhite,
        C.h10,
        C.row,
        C.itemsCenter,
        C.justifyBetween,
        C.pl5,
        C.pr4
      )}
      onPress={onPress}
    >
      <Text style={apply(C.familyInterRegular, C.fontBasic2)}>{label}</Text>
      <FontAwesome size={16} name="chevron-right" />
    </TouchableOpacity>
  );
};

export default Item;
