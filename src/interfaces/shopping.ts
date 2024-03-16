import { IProduct } from "./product";

export interface IShopping{
    id?:string,
    userId:string,
    userName:string,
    marketId:string,
    marketName:string,
    day:number,
    month:string,
    year:number,
    list?:[IProduct],
    total?:number
}
