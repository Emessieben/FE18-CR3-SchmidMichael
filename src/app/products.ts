export let products = [{
    name: "Pizza Margerita",
    image: "https://cdn.pixabay.com/photo/2017/12/05/20/09/pizza-3000274_1280.jpg",
    price: 10,
    details: "Pizza Margherita (more commonly known in English as Margherita pizza) is a typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil.",
    allergy: "4ER, PL3",
    available: true,
},{
    name: "Pizza Pepperoni",
    image: "https://cdn.pixabay.com/photo/2016/04/21/22/50/pizza-1344720_1280.jpg",
    price: 12,
    details: "Pepperoni is an American variety of spicy salami made from cured pork and beef seasoned with paprika or other chili pepper. Prior to cooking, pepperoni is characteristically soft, slightly smoky, and bright red. Thinly sliced pepperoni is one of the most popular pizza toppings in American pizzerias.",
    allergy: "4ER, PL3",
    available: true,
},{
    name: "Pizza Quattro Stagioni",
    image: "https://cdn.pixabay.com/photo/2015/12/07/22/27/pizza-1081534_1280.jpg",
    price: 14,
    details: "Quattro stagioni pizza or four seasons pizza is one of the best Italian pizzas out there, with artichokes, mushrooms, olives and ham. This authentic Italian pizza is incredibly delicious and fun to make.",
    allergy: "4ER, PL3",
    available: true,
},{
    name: "Spagetti Carbonara",
    image: "https://cdn.pixabay.com/photo/2015/04/08/13/13/pasta-712664_1280.jpg",
    price: 11,
    details: "Carbonara is an Italian pasta dish from Rome made with eggs, hard cheese, cured pork and black pepper. The dish arrived at its modern form, with its current name, in the middle of the 20th century. The cheese is usually Pecorino Romano, Parmigiano-Reggiano, or a combination of the two.",
    allergy: "4ER, PL3",
    available: true,
},{
    name: "Lasagne Classic",
    image: "https://cdn.pixabay.com/photo/2015/05/03/18/35/lasagna-751504_1280.jpg",
    price: 15,
    details: "Lasagne is a food dish that consists of layers of pasta, sauce, and a filling such as meat or cheese, baked in an oven.",
    allergy: "4ER, PL3",
    available: true,
},{
    name: "Tiramisu",
    image: "https://cdn.pixabay.com/photo/2017/03/19/18/22/italian-food-2157246_1280.jpg",
    price: 8,
    details: "Tiramisu, (from tirami su, 'pick me up'or 'cheer me up') is a coffee-flavoured Italian dessert. It is made of ladyfingers (savoiardi) dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese, flavoured with cocoa.",
    allergy: "4ER, PL3",
    available: true,
},]

export interface IProduct {
    name: string,
    image: string,
    price: number,
    details: string,
    allergy: string,
    available: boolean
}