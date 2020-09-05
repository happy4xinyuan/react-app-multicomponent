// 包含n个reducer函数的模块
import {INCREASE,DECREASE,INCREASASYCN} from "./action-types";

export function counter(state =0, action){
    console.log('counter()',state, action);
    switch (action.type){
        case INCREASE:
            return state + action.data
        case DECREASE:
            return state - action.data
        case INCREASASYCN:
            return state + action.data
        default:
            return state;
    }
}

