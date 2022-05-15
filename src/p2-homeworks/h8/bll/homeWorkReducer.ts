export type PeopleType = {
    _id: number
    name: string
    age: number
}

type ActionType = ActionTypeSort | ActionTypeCheck

type ActionTypeSort = {
    type: 'sort',
    payload: string
}
type ActionTypeCheck = {
    type: 'check',
    payload: number
}

export const homeWorkReducer = (state: PeopleType[], action: ActionType): PeopleType[] => {
    switch (action.type) {
        case 'sort': {
            debugger
                let compareIncrease = (a:PeopleType,b:PeopleType)=> {
                    if(action.payload==="up"){
                        return a.age - b.age
                    } else {
                        return b.age - a.age
                    }
                }
                const newState = [...state]
            debugger
                return newState.sort(compareIncrease)

        }
        case 'check': {
            return state.filter((item)=>item.age>18)
        }
        default:
            return state
    }
}