export interface CartItemType {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  size: string;
}

export const cartItems: CartItemType[] = [
  {
    id: 1,
    name: "50cl Bottle Water",
    image: "/50cl.png",
    price: 100,
    quantity: 1,
    size: "50cl",
  },
  {
    id: 2,
    name: "75cl Bottle Water",
    image: "/75cl.png",
    price: 150,
    quantity: 1,
    size: "75cl",
  },
  {
    id: 3,
    name: "Sachet Water",
    image: "/sachet.png",
    price: 300,
    quantity: 1,
    size: "20 sachets per bag",
  },
  {
    id: 4,
    name: "Ice Block",
    image: "/iceblock.png",
    price: 200,
    quantity: 1,
    size: "Large block",
  },
  {
    id: 5,
    name: "Dispenser Refill",
    image: "/dispenser-refill.png",
    price: 500,
    quantity: 1,
    size: "Refill only",
  },
  {
    id: 6,
    name: "Dispenser (With Container)",
    image: "/dispenser-full.png",
    price: 3500,
    quantity: 1,
    size: "Full set",
  },
];
