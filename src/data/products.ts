export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Coffrets Rituals",
    price: 0,
    description: "Coffret cadeau Rituals — l'art du bien-être et de la détente.",
    category: "Coffrets",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400",
    inStock: true,
  },
  {
    id: 2,
    name: "Gel Douche A-Derma",
    price: 7000,
    description: "Gel douche surgraissant A-Derma — nettoie en douceur les peaux sensibles.",
    category: "Gels Douche",
    image: "https://media.e.leclerc/3282770396522_1?fit=fit&op_sharpen=1&resmode=bilin&fmt=pjpeg&qlt=85&trim=0.5&wid=450&hei=450",
    inStock: true,
  },
  {
    id: 3,
    name: "Huile Lavante Uriage",
    price: 12000,
    description: "Huile lavante dermatologique Uriage — pour les peaux sèches et réactives.",
    category: "Soins Corps",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZOBEmdyPgoDTNiJklGP-nC8jWZInKs_rO6qyEVpWesw&s",
    inStock: true,
  },
  {
    id: 4,
    name: "Gel Surgras Dermatologique Uriage",
    price: 12000,
    description: "Gel surgrais dermatologique Uriage — lave sans dessécher, apaise les irritations.",
    category: "Soins Corps",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRAv1OCdDt4_i2V9IWyL8D3_RViSPGUhS8Hxdc5_52oVFTJb-M5J-enKHkhxuV3BndUA6EQNHfHproPK6cEvNTD7AqymAZlhuAQQsE443I&usqp=CAc",
    inStock: true,
  },
  {
    id: 5,
    name: "Gel Douche Topicrem Ultra Hydratant",
    price: 10000,
    description: "Gel douche ultra-hydratant Topicrem — préserve l'hydratation naturelle de la peau.",
    category: "Gels Douche",
    image: "https://media.e.leclerc/3700281704389_1?fit=fit&op_sharpen=1&resmode=bilin&fmt=pjpeg&qlt=85&trim=0.5&wid=450&hei=450",
    inStock: true,
  },
  {
    id: 6,
    name: "SVR Gel Lavant",
    price: 10000,
    description: "Gel lavant surgras SVR — nettoie en douceur les peaux atopiques et sensibles.",
    category: "Gels Douche",
    image: "https://mapharma.fr/wp-content/uploads/2021/09/SVR-gel-lavant-topialyse-1L.webp",
    inStock: true,
  },
  {
    id: 7,
    name: "Huile de Douche Topicrem Ultra Hydratant",
    price: 12000,
    description: "Huile de douche ultra-hydratante Topicrem — nourrit et protège la peau.",
    category: "Soins Corps",
    image: "https://m.media-amazon.com/images/I/61daTKrs1TL._AC_UF894,1000_QL80_.jpg",
    inStock: true,
  },
  {
    id: 8,
    name: "Eau Thermale Avène 300ml",
    price: 7000,
    description: "Eau thermale Avène 300ml — apaise, adoucit et calme les peaux sensibles.",
    category: "Eaux Thermales",
    image: "https://www.my-origines.com/dw/image/v2/BJRD_PRD/on/demandware.static/-/Sites-size-master/default/dw81529a55/images/P0461005_P.jpg?sw=900&sh=900&sm=fit",
    inStock: true,
  },
  {
    id: 9,
    name: "Eau Thermale Boticinal 300ml",
    price: 5000,
    description: "Eau thermale Boticinal 300ml — spray hydratant pour tous types de peaux.",
    category: "Eaux Thermales",
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400",
    inStock: true,
  },
  {
    id: 10,
    name: "Lait Corps Topicrem Ultra Hydratant",
    price: 9000,
    description: "Lait corporel ultra-hydratant Topicrem — nourrit intensément les peaux sèches.",
    category: "Soins Corps",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400",
    inStock: true,
  },
  {
    id: 11,
    name: "Eau Micellaire Purifiante Bioderma 500ml",
    price: 8000,
    description: "Eau micellaire purifiante Bioderma 500ml — démaquille et purifie la peau en profondeur.",
    category: "Soins Visage",
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400",
    inStock: true,
  },
  {
    id: 12,
    name: "Gants de Bain Gommant",
    price: 3000,
    description: "Gants de bain gommant — exfolie et lisse la peau pour un effet bonne mine.",
    category: "Accessoires",
    image: "https://images.unsplash.com/photo-1631723827287-5271477b93e4?w=400",
    inStock: true,
  },
];
