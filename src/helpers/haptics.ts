import ReactNativeHapticFeedback from "react-native-haptic-feedback";

const options = {
    enableVibrateFallback: true,  // fallback to vibration if haptic not supported
    ignoreAndroidSystemSettings: false,
};

export const useHaptics = () => {
    const trigger = (type: HapticType = "selection") => {
        ReactNativeHapticFeedback.trigger(type, options);
    };

    return {
        selection: () => trigger("selection"),
        impactLight: () => trigger("impactLight"),
        impactMedium: () => trigger("impactMedium"),
        impactHeavy: () => trigger("impactHeavy"),
        success: () => trigger("notificationSuccess"),
        warning: () => trigger("notificationWarning"),
        error: () => trigger("notificationError"),
    };
};

// TypeScript support
type HapticType =
    | "selection"
    | "impactLight"
    | "impactMedium"
    | "impactHeavy"
    | "notificationSuccess"
    | "notificationWarning"
    | "notificationError";
