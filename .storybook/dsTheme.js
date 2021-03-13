import { create } from '@storybook/theming';
import logo from "./../public/logo-ds.png";

const primaryBlue = "#007dc5";
const primaryGreen = "#72bf44";
const primaryDarkGray = "#494949";

export default create({
    base: 'light',

    appBg: '#fefefe',
    appContentBg: "#fefefe",
    appBorderColor: "transparent",
    appBorderRadius: 5,

    colorPrimary: primaryBlue,
    colorSecondary: primaryBlue,

    barTextColor: "#494949",
    barSelectedColor: primaryGreen,

    brandTitle: "DS-UI Storybook",
    brandUrl: "https://digital.cz",
    brandImage: logo,
});
