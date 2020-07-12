export interface Item {
    price: number,
    id: string,
    name: string,
    description: string,
    image: {
        src: string,
        width: number,
        height: number
    }
};