import 'styled-components';
import { Theme } from '../styles/theme.ts';

type CustomTheme = typeof Theme;

declare module 'styled-components' {
    export interface DefaultTheme extends CustomTheme {}
}
