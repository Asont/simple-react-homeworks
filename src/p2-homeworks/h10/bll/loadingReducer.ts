const initState = {
    isLoading:false
}

export type StateType = {
    isLoading:boolean
}

type ActionType = LoadingACType

export const loadingReducer = (state:StateType = initState, action: ActionType): any => { // fix any
    switch (action.type) {
        case "IS-LOADING": {

            return {...state, isloading:action.payload}
        }
        default: return state
    }
}

type LoadingACType = {
    type:"IS-LOADING",
    payload:boolean
}

export const loadingAC = (isLoad:boolean) => {

    return {
        type:"IS-LOADING",
        payload:isLoad
    } as const
}

