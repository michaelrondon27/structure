export interface CustomComponent {
    description?: string;
    id          : string;
    image       : string;
    route       : string;
    title       : string;
}

export interface CustomComponentInformation {
    inputs?     : CustomInputsOutputsComponent[],
    outputs?    : CustomInputsOutputsComponent[],
    selectorName: string;
}

interface CustomInputsOutputsComponent {
    property: string;
    type    : string;
}

export interface CustomInterfaceInformation {
    name      : string;
    properties: string[];
}

export interface CustomTypesInformation {
    name  : string;
    values: string[];
}
