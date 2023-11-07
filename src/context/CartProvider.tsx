import {useReducer} from "react"
export type CartItemTYpe = {
  sku: string;
  name: string;
  price: number;
  qty: number;
};
type CartStateType = { cart: CartItemTYpe };
const initcartState: CartStateType = { cart: [] };

const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT",
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
  type: string;
  payload: CartItemTYpe;
};

const reducer = (
  state: CartStateType,
  action: ReducerAction
): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD:
      {
        if (!action.payload) {
          throw new Error("action.payload missing in ADD action");
        }
        const { sku, name, price } = action.payload;
        const filteredCart: CartItemTYpe[] = state.cart.filter(
          (item) => item.sku !== sku
        );
        const itemExist: CartItemTYpe | undefined = state.cart.find(
          (item) => item.sku === sku
        );
        const qty: number = itemExist ? itemExist.qty + 1 : 1;
        return { ...state, cart: [...filteredCart, { sku, name, price, qty }] };
      }
      break;
    case REDUCER_ACTION_TYPE.REMOVE:
      {
        if (!action.paylod) {
          throw new Error("action.payload missing in ADD action");
        }
        const { sku } = action.payload;

        const filteredCart: CartItemTYpe[] = state.cart.filter(
          (item) => item.sku !== sku
        );
        return {...state,cart:[...filteredCart]}
      }
      break;
    case REDUCER_ACTION_TYPE.QUANTITY:
      {
        if (!action.payload) {
          throw new Error("action.payload missing in ADD action");
        }
        const { sku, qty } = action.payload;
        
        const itemExist: CartItemTYpe | undefined = state.cart.find(
          (item) => item.sku === sku
        );

        if(!itemExist){
          throw new Error("Item must exist in order to update quantity")
        }

        const updatedItem:CartItemTYpe={...itemExist,qty}

        const filteredCart: CartItemTYpe[] = state.cart.filter(
          (item) => item.sku !== sku
        );
        return {...state,cart:[...filteredCart,itemExist]}
      }
      break;
    case REDUCER_ACTION_TYPE.SUBMIT: {
      return { ...state, cart: [] };
    }
    default:
      throw new Error("unidentified reducer action type");
  }
};
 const useCartContext=(initcartState:CartStateType)=>{
  const [state,dispatch]=useReducer(reducer,initcartState)
  const REDUCER_ACTIONS=useMemo(()=>{
    return REDUCER_ACTION_TYPE
  },[])
  const totalItem=state.cart.reduce((previousValue,cartItem)=>{
    return previousValue+cartItem.qty
  })
  const totalPrice=new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(
    state.cart.reduce((previousValue,cartItem)=>{
      return previousValue+(cartItem.qty*cartItem.price)
    },0)
  )
  const cart=state.cart.sort(a,b)=>{
    const itemA=Number(a.sku.slice(-4))
    const itemB=Number(b.sku.slice(-4))
    return itemA-itemB
  }
  return {dispatch,REDUCER_ACTIONS,totalItem,totalPrice,cart}
 }
 export type UseCartContextType=ReturnType <typeof useCartContext> 
 const initCartContextState:UseCartContextType={
  dispatch:()=>(),
  REDUCER_ACTIONS:REDUCER_ACTION_TYPE,
  totalItem:0,
  totalPrice:'',
  cart:[]
 }

 export const CartContext=createContext<UseCartContextType>(initContextState)
 type childrenType={children:ReactElement|ReactElement[] }
 
 export const CartProvider = () => {
   return (
     <CartContext.Provider value={useCartContext(initcartState)}>
      {children}
     </CartContext>
   )
 }
 
  
 
