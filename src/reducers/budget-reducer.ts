
export type BudgetActions = 
    { type: "add-budget", payload: {budget: number} }



export type BudgetState = {
    budget: number
}

export const initialState : BudgetState = {
    budget: 0
}

export const BudgetReducer = (
        state : BudgetState = initialState,
        action: BudgetActions,
    ) => {

    if( action.type === "add-budget"){
        console.log("Desde Budgetreducer")
        return {
            ...state,
            budget: action.payload.budget
        }

        
    }

}