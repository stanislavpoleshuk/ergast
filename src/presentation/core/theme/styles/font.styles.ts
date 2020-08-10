import {TextStyle} from "react-native";
import {styleSheetCreate} from "infrastructure/utilities/style-sheet.utility";

export const FontSize = styleSheetCreate({
    ultraSmall: {
        fontSize: 10,
        lineHeight: 12
    } as TextStyle,
    small: {
        fontSize: 12,
        lineHeight: 16
    } as TextStyle,
    medium: {
        fontSize: 14,
        lineHeight: 18
    } as TextStyle,
    large: {
        fontSize: 18,
        lineHeight: 24
    } as TextStyle,
});