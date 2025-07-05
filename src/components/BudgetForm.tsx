import { useState, useMemo } from "react"
import type { BudgetActions } from "../reducers/budget-reducer"



export default function BudgetForm( ) {

    const [ budget, setBudget ] = useState(0)

    const handleChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        setBudget(e.target.valueAsNumber)
    }

    const isValid = useMemo(() => {
        return isNaN(budget) || budget <= 0
    }, [budget])

    return (
        <form action="" className="space-y-5">
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
                    value={budget}
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
