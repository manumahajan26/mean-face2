import { CustAddress } from "./cusrAddress";
import { Products } from "./product";

export class Customer{
    customerID:number;
    custFName: string;
    custLName:string;
    custAddress:CustAddress;
    custContact:number;
    baughtProducts:Products;
}