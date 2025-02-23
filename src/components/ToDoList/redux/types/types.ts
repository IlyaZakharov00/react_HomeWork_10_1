export interface IPropsItem {
    item: {
        text: string,
        price: string,
        id: string,
    }
}

export type InitStateService = TItem[]

export type TItem = {
  text: string ;
  price: string;
  id: number
}