import { TemplateRef } from "@angular/core";

export interface Feature {
    title: string; 
    description: string;
    route: string;
    icon: string;
    color: string;
}

export interface IRow {
    make: string;
    model: string;
    price: number;
    electric: boolean;
}

export interface Credentials {
    username: string;
    password: string;
}

export interface User {
    username: string;
    password: string;
    email: string;
    roles: string
}

export interface Toast {
    textOrTpl: string | TemplateRef<any>;
    options: any;
}
