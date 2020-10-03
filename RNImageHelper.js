import EntypoGlyphMap from "@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Entypo.json";
import EvilIconsGlyphMap from "@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/EvilIcons.json";
import FeatherGlyphMap from "@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Feather.json";
import FontAwesomeGlyphMap from "@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/FontAwesome.json";
import FoundationGlyphMap from "@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Foundation.json";
import IoniconsGlyphMap from "@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Ionicons.json";
import MaterialCommunityIconsGlyphMap from "@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json";
import MaterialIconsGlyphMap from "@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/MaterialIcons.json";
import OcticonsGlyphMap from "@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Octicons.json";
import SimpleLineIconsGlyphMap from "@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/SimpleLineIcons.json";
import ZocialGlyphMap from "@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Zocial.json";

import { Platform } from "react-native";

class RNImageHelper {
    static Resolve(family, name) {
        let glyph, fontFamily

        switch (family) {
            case "Entypo":
                glyph = EntypoGlyphMap[name];
                if (typeof glyph === "number") {
                    glyph = String.fromCharCode(glyph);
                }
                fontFamily = "Entypo"

                return { glyph: glyph, family: fontFamily };
            case "EvilIcons":
                glyph = EvilIconsGlyphMap[name];
                if (typeof glyph === "number") {
                    glyph = String.fromCharCode(glyph);
                }
                fontFamily = "EvilIcons"

                return { glyph: glyph, family: fontFamily };
            case "Feather":
                glyph = FeatherGlyphMap[name];
                if (typeof glyph === "number") {
                    glyph = String.fromCharCode(glyph);
                }
                fontFamily = "Feather"

                return { glyph: glyph, family: fontFamily };
            case "FontAwesome":
                glyph = FontAwesomeGlyphMap[name];
                if (typeof glyph === "number") {
                    glyph = String.fromCharCode(glyph);
                }
                fontFamily = "FontAwesome";

                return { glyph: glyph, family: fontFamily };
            case "Foundation":
                glyph = FoundationGlyphMap[name];
                if (typeof glyph === "number") {
                    glyph = String.fromCharCode(glyph);
                }

                if (Platform.OS === "ios") {
                    fontFamily = "fontcustom"
                } else {
                    fontFamily = "Foundation";
                }

                return { glyph: glyph, family: fontFamily };
            case "Ionicons":
                glyph = IoniconsGlyphMap[name];
                if (typeof glyph === "number") {
                    glyph = String.fromCharCode(glyph);
                }
                fontFamily = "Ionicons"

                return { glyph: glyph, family: fontFamily };
            case "MaterialCommunityIcons":
                glyph = MaterialCommunityIconsGlyphMap[name];
                if (typeof glyph === "number") {
                    glyph = String.fromCharCode(glyph);
                }

                if (Platform.OS === "ios") {
                    fontFamily = "Material Design Icons"
                } else {
                    fontFamily = "MaterialCommunityIcons";
                }

                return { glyph: glyph, family: fontFamily };
            case "MaterialIcons":
                glyph = MaterialIconsGlyphMap[name];
                if (typeof glyph === "number") {
                    glyph = String.fromCharCode(glyph);
                }

                if (Platform.OS === "ios") {
                    fontFamily = "Material Icons"
                } else {
                    fontFamily = "MaterialIcons";
                }

                return { glyph: glyph, family: fontFamily };
            case "Octicons":
                glyph = OcticonsGlyphMap[name];
                if (typeof glyph === "number") {
                    glyph = String.fromCharCode(glyph);
                }
                fontFamily = "Octicons";

                return { glyph: glyph, family: fontFamily };
            case "SimpleLineIcons":
                glyph = SimpleLineIconsGlyphMap[name];
                if (typeof glyph === "number") {
                    glyph = String.fromCharCode(glyph);
                }

                if (Platform.OS === 'ios') {
                    fontFamily = "simple-line-icons";
                } else {
                    fontFamily = "SimpleLineIcons"
                }

                return { glyph: glyph, family: fontFamily };
            case "Zocial":
                glyph = ZocialGlyphMap[name];
                if (typeof glyph === "number") {
                    glyph = String.fromCharCode(glyph);
                }

                if (Platform.OS === "ios") {
                    fontFamily = "zocial";
                } else {
                    fontFamily = "Zocial";
                }

                return { glyph: glyph, family: fontFamily };
        }
    }
}

export default RNImageHelper;
