import { Icon } from "./icon.interface";

export interface BreadCrumb {
    icon?: Icon;
    name : string;
    url? : string;
}
