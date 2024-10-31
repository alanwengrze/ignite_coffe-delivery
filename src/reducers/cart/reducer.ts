import { AddressFormProps } from "../../pages/Checkout";
import { produce } from "immer";
import { ActionTypes } from "./action";
export interface CartItem {
  id: string
  quantity: number
}
export interface Address extends AddressFormProps{
  id: number
  items: CartItem[]
}
interface CartState {
  cart: CartItem[]
  address: Address[]
}
export function cartReducer (state: CartState, action: any) {
  switch(action.type) {
    case ActionTypes.ADD_ITEM:
      return produce(state, (draft) => {
          const itemAlreadyAdded = draft.cart.find(
            (item) => item.id === action.payload.item.id,
          )

          if (itemAlreadyAdded) {
            itemAlreadyAdded.quantity += action.payload.item.quantity
          } else {
            draft.cart.push(action.payload.item)
          }
      })

      case ActionTypes.REMOVE_ITEM:
      return produce(state, (draft) => {
        const itemToRemoveId = draft.cart.findIndex(
          (item) => item.id === action.payload.itemId,
        )
        draft.cart.splice(itemToRemoveId, 1)
      })

    case ActionTypes.INCREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemToIncrement = draft.cart.find(
          (item) => item.id === action.payload.itemId,
        )

        if (itemToIncrement?.id) {
          itemToIncrement.quantity += 1
        }
      })

    case ActionTypes.DECREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemToDecrement = draft.cart.find(
          (item) => item.id === action.payload.itemId,
        )

        if (itemToDecrement?.id && itemToDecrement.quantity > 1) {
          itemToDecrement.quantity -= 1
        }
      })

    case ActionTypes.CHECKOUT_CART:
      return produce(state, (draft) => {
        const newAddress = {
          id: new Date().getTime(),
          items: state.cart,
          ...action.payload.address,
        }
        draft.address.push(newAddress)
        draft.cart = []

        action.payload.callback(`/address/${newAddress.id}/success`)
      })

    default:
      return state
  }
}
