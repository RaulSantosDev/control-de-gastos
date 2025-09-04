import { useState, useMemo } from "react"
import { useBudget } from "../hooks/useBudget"



export default function BudgetForm( ) {

    const [ budget, setBudget ] = useState<number>(0)
    const { dispatch } = useBudget()

    const handleChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        setBudget(+e.target.value)
    }

    const isValid = useMemo(() => {
        return isNaN(+budget) || +budget <= 0
    }, [budget])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const budgeta : number = Number(budget)
        dispatch({type: "add-budget", payload: {budgeta}})        
    }

    return (
        <form action="" className="space-y-5" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-5">
                <label htmlFor="budget" className=" text-4xl text-blue-600 font-bold text-center">
                    Definir Presupuesto
                </label>

                <input 
                    id="budget"
                    type="number"
                    className="w-full bg-white border border-gray-200 p-2"
                    placeholder="100, 500, 1000"
                    name="budget"
                    value={budget === 0 ? "" : budget}
                    onChange={handleChange}
                />                

            </div>

            <input 
                type="submit"
                value="Definir Presupuesto"
                className=" bg-blue-700 hover:bg-blue-600 cursor-pointer text-white p-2 rounded-lg w-full font-black uppercase disabled:opacity-50"
                disabled={isValid} 
               
            />

        </form>

        
    )
}
