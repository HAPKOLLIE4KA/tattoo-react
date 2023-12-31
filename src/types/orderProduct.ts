import { IBasket } from "../context/basketContext";
import { IContactPerson } from "./contactPerson";

export interface IProductOrder {
    id: number;
    date: string;
    numberOrder: number;
    countProduct: number;
    sum: number;
    status: string;
    contactPerson: IContactPerson;
    products: IBasket[];
}