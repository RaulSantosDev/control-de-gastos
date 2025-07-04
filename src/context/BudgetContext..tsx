import { useReducer, createContext, type ReactNode,  }  from "react"
import { BudgetReducer, initialState, type BudgetActions, type BudgetState } from "../reducers/budget-reducer"

type budgetContestProps = {
    state: BudgetState | undefined
    dispatch: React.Dispatch<BudgetActions>
}

type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetContest = createContext<budgetContestProps>(null!)

export const BudgetProvider = ({children} : BudgetProviderProps) => {

    const [state, dispatch] = useReducer(BudgetReducer,initialState)    

    return (
        <BudgetContest.Provider
            value={{
                state,
                dispatch
            }}
        >

        </BudgetContest.Provider>
    )
}