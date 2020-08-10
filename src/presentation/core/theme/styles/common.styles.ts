import {styleSheetCreate} from "../../../../infrastructure/utilities/style-sheet.utility";

export const CommonStyle = styleSheetCreate({
    safeArea: {
        flex: 1,
    },
    content: {
        paddingHorizontal: 25,
        paddingVertical: 10
    }
})