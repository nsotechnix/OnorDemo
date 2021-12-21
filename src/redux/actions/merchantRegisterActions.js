import { ACTION_APPEND_MERCHANT_REGISTER } from "./Constants"

export const action_append_register_merchant= (payload)=>{
    return{
        type: ACTION_APPEND_MERCHANT_REGISTER,
        payload
    }
}