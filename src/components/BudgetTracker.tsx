
import AmountDisplay from "./AmountDisplay";
import { useBudget } from "../hooks/useBudget";
import { useMemo } from "react";

export default function BudgetTracker() { 

  const  {state, dispatch} = useBudget()

  const handleChange = () => {
    dispatch({type: 'clean-cart'})
  }

  const totalExpenses = useMemo( () => state.expenses.reduce((total , expense) => total + expense.amount, 0),[state.expenses])

  let amountAvailable = useMemo( () => state.budget - totalExpenses, [state.expenses])



  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <img src="/grafico.jpg" alt="Gráfica de gastos" />
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        <button
            type="button"
            className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-sm cursor-pointer"
            onClick={handleChange}
        >
            Resetear App
        </button>

            < AmountDisplay 
              label="Presupuesto"
              amount={state.budget}
            />
            < AmountDisplay 
                label="Disponible"
                amount={amountAvailable}
            />
            < AmountDisplay 
                label="Gastado"
                amount={totalExpenses}
            />
      
      </div>
    </div>
  )
}
