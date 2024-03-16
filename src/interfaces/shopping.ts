export interface IShopping{
    id?:string,
    userId:string,
    userName:string,
    marketId:string,
    marketName:string,
    date:Date,
    list?:[],
    total?:number,
    isOpen:boolean
}
