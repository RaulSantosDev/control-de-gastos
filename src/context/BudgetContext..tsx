import { useReducer, createContext, type ReactNode,  }  from "react"
import { BudgetReducer, initialState, type BudgetActions, type BudgetState } from "../reducers/budget-reducer"

type budgetContextProps = {
    state: BudgetState | undefined
    dispatch: React.Dispatch<BudgetActions>
}

type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<budgetContextProps>(null!)

export const BudgetProvider = ({children} : BudgetProviderProps) => {

    const [state, dispatch] = useReducer(BudgetReducer,initialState)    

    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}