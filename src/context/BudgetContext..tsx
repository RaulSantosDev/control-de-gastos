import { useReducer, createContext, type ReactNode, useMemo }  from "react"
import { BudgetReducer, initialState, type BudgetActions, type BudgetState } from "../reducers/budget-reducer"

type budgetContextProps = {
    state: BudgetState
    dispatch: React.Dispatch<BudgetActions>
    totalExpenses: number
    amountAvailable: number
}

type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<budgetContextProps>(null!)

export const BudgetProvider = ({children} : BudgetProviderProps) => {

    const [state, dispatch] = useReducer(BudgetReducer, initialState)    

    const totalExpenses = useMemo( () => state.expenses.reduce((total , expense) => total + expense.amount, 0),[state.expenses])

    const amountAvailable = useMemo( () => state.budget - totalExpenses, [state.expenses])

    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch,
                totalExpenses,
                amountAvailable
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}