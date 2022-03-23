const initialState = {
    value: 10
    //если в value будет сидеть объект, то можно записать например так
    //value: {} as UsersType
}
type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'INC-VALUE':
            return {...state, value: state.value+1}
        case 'SET-VALUES-FROM-LOCAL-STORAGE':
            return {...state, value: action.value}
        default:
            return state
    }
}

export const incCounterValueAC = () => ({type: 'INC-VALUE'} as const)
export const setValueFromLocalStorageAC = (value: number) => ({type: 'SET-VALUES-FROM-LOCAL-STORAGE', value} as const)
export type IncValueActionType = ReturnType<typeof incCounterValueAC>
export type SetValueFromLocalStorageActionType = ReturnType<typeof setValueFromLocalStorageAC>
type ActionType = IncValueActionType | SetValueFromLocalStorageActionType