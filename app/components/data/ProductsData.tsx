export interface ProductosDataCard {
    id: number;
    title: string;
    image: string;
    price: number;
    category: string;
    stars : number
  }
  
  export const ProductosDataCard: ProductosDataCard[] = [
    {
      id: 1,
      title: "Wireless Headphones",
      image: "https://media.wired.com/photos/66abec9ccb172c2e5de763bf/master/w_960,c_limit/Edifier-Stax-Spirit-S5-Headphones-Offwhite-Background-SOURCE-Amazon.jpg",
      price: 59.99,
      category: "Electronics",
      stars : 5
    },
    {
      id: 2,
      title: "Vintage Camera",
      image: "https://cdn0.rubylane.com/_podl/item/2198003/9x2e5x2e4/Vintage-35-mm-film-camera-Mogran-pic-1o-720:10.10-ec6712ff.webp",
      price: 120.00,
      category: "Photography",
      stars : 4.5

    },
    {
      id: 3,
      title: "Running Shoes",
      image: "https://oberalp.imgix.net/8e79c9ca-bb2f-4618-aa90-52b7b5bae42c.png?auto=format&w=1280&h=1280",
      price: 75.50,
      category: "Sportswear",
      stars : 3
    },
    {
      id: 4,
      title: "Smartphone Stand",
      image: "https://www.avitela.lt/UserFiles/Products/Images/299847-452261.png",
      price: 12.99,
      category: "Accessories",
      stars : 5
    },
    {
      id: 5,
      title: "Gaming Controller",
      image: "https://2egaming.com/wp-content/uploads/2e-uwgc-c043.png",
      price: 45.00,
      category: "Gaming",
      stars : 5
    },
    
  ];
  