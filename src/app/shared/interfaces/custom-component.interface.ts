export interface CustomComponent {
    description?: string;
    id          : string;
    image       : string;
    route       : string;
    title       : string;
}

export interface CustomComponentInformation {
    inputs?     : CustomInputsComponent[],
    selectorName: string;
}

interface CustomInputsComponent {
    property: string;
    type    : string;
}

export interface CustomInterfaceInformation {
    name      : string;
    properties: string[];
}
