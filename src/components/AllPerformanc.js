import { TYPES } from "./AllPerformAction";

export const informations = {

    products: [{

            id: 1,
            banner: "../img/figura/silueta.jpg",
            name: "Lipoinyección ",
            parrafo: "Procedimiento que mejoran el contorno corporal…",
            parrafo2: "nike",
            beneficios: "runner",
            img1: "https://images.pexels.com/photos/4047186/pexels-photo-4047186.jpeg?auto=compress&cs=tinysrgb&w=800",
            img2: "https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=800"



        },
        {
            id: 2,
            banner: "../img/figura/silueta2.jpg",
            name: "Abdominoplastia ",
            parrafo: "Método más efectivo para reducir estrías y...",
            parrafo2: "nike",
            beneficios: "runner",
            img1: "ff",
            img2: "dd"

        },
        {
            id: 3,
            banner: "../img/figura/silueta4.jpg",
            name: "Lipoescultura ",
            parrafo: "Procedimiento ideal para modelar la figura sin",
            parrafo2: "nike",
            beneficios: "runner",
            img1: "ff",
            img2: "dd"

        },

        {
            id: 4,
            banner: "../img/figura/silueta3.jpg",
            name: "Lipoabdominoplastia ",
            parrafo: "La Lipoabdominoplastia es la combinación de …",
            parrafo2: "nike",
            beneficios: "runner",
            img1: "https://images.pexels.com/photos/4047186/pexels-photo-4047186.jpeg?auto=compress&cs=tinysrgb&w=800",
            img2: "https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=800"

        },


        {
            id: 5,
            banner: "../img/figura/silueta5.jpg",
            name: "Brazilian Butt Lift ",
            parrafo: "El Brazilian Butt Lift utiliza la grasa de otras …",
            parrafo2: "nike",
            beneficios: "runner",
            img1: "ff",
            img2: "dd"

        },



    ],
};




export function AllPerformance(state, action) {

    switch (action.type) {


        case TYPES.SEE_MORE:
            {



                let newitem = state.products.find((product) => product.id === action.payload)

                {}





            }



        default:
            return state;
    }


}





// export function shoppingReducer(state, action) {

//     switch (action.type) {


//         case TYPES.ADD_TO_CART:
//             {



//                 let newitem = state.products.find((product) => product.id === action.payload)



//                 let itemCart = state.cart.find(item => item.id === newitem.id)






//                 return itemCart ? {
//                     ...state,
//                     cart: state.cart.map((item) => item.id === newitem.id ? {...item, quantity: item.quantity + 1 } : item)
//                 } : {
//                     ...state,
//                     cart: [...state.cart, {...newitem, quantity: 1 }],
//                 }


//             }

//         case TYPES.REMOVE_ONE_CART:
//             {

//             }

//         case TYPES.REMOVE_ALL_CART:
//             {

//             }

//         case TYPES.CLEAR_CART:
//             {

//             }

//         default:
//             return state;
//     }


// }