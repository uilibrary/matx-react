import {MatxLoadable} from "matx";

const AppSnackbar = MatxLoadable({
    loader: () => import("./snackbar/AppSnackbar")
});
const AppDialog = MatxLoadable({
    loader: () => import("./dialog/AppDialog")
});
const AppExpansionPanel = MatxLoadable({
    loader: () => import("./expansion-panel/AppExpansionPanel")
});
const AppAutoComplete = MatxLoadable({
    loader: () => import("./auto-complete/AppAutoComplete")
});
const AppSlider = MatxLoadable({
    loader: () => import("./slider/AppSlider")
});
const AppRadio = MatxLoadable({
    loader: () => import("./radio/AppRadio")
});
const AppSwitch = MatxLoadable({
    loader: () => import("./switch/AppSwitch")
});
const AppCheckbox = MatxLoadable({
    loader: () => import("./checkbox/AppCheckbox")
});
const AppMenu = MatxLoadable({
    loader: () => import("./menu/AppMenu")
});
const AppProgress = MatxLoadable({
    loader: () => import("./AppProgress")
});
const AppIcon = MatxLoadable({
    loader: () => import("./icons/AppIcon")
});
const AppButton = MatxLoadable({
    loader: () => import("./buttons/AppButton")
});
const AppForm = MatxLoadable({
    loader: () => import("./forms/AppForm")
});
const AppTable = MatxLoadable({
    loader: () => import("./tables/AppTable")
});


const materialRoutes = [
    {
        path: "/material/table",
        component: AppTable
    },
    {
        path: "/material/form",
        component: AppForm
    },
    {
        path: "/material/buttons",
        component: AppButton
    },
    {
        path: "/material/icons",
        component: AppIcon
    },
    {
        path: "/material/progress",
        component: AppProgress
    },
    {
        path: "/material/menu",
        component: AppMenu
    },
    {
        path: "/material/checkbox",
        component: AppCheckbox
    },
    {
        path: "/material/switch",
        component: AppSwitch
    },
    {
        path: "/material/radio",
        component: AppRadio
    },
    {
        path: "/material/slider",
        component: AppSlider
    },
    {
        path: "/material/autocomplete",
        component: AppAutoComplete
    },
    {
        path: "/material/expansion-panel",
        component: AppExpansionPanel
    },
    {
        path: "/material/dialog",
        component: AppDialog
    },
    {
        path: "/material/snackbar",
        component: AppSnackbar
    },
]

export default materialRoutes;
