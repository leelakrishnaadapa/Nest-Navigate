import _ from 'lodash';
import { useStyleConfig } from "@chakra-ui/react";

export const useChakraStyleMerge = ({
    themeKey = '',
    styleConfig,
    variant,
    size,
    styles
}) => {
    const themeStyleConfig = useStyleConfig(themeKey, {
        size,
        variant
    });

    const overrideStyleConfig = useStyleConfig('', {
        size,
        variant,
        styleConfig
    })

    if(styles && styles.completeOverride)
    {
        return styles;
    }

    return _.merge(themeStyleConfig, overrideStyleConfig, styles)
}