import { formatDate } from "../helpers"
import type { Expense } from "../types"
import AmountDisplay from "./AmountDisplay"

type ExpenseDetailProops = {
    expense: Expense
}

export default function ExpenseDetail({expense} : ExpenseDetailProops) {

  return (
    <div className="bg-white shadow-lg p-10 w-full border-b border-gray-200 flex gap-5 items-center">
      <div>
                
      </div>
      
      <div className="flex justify-between">

        <p className="font-black text-2xl">{expense.expenseName}</p> 

        <p className="text-slate-600 text-sm">{ formatDate(expense.date!.toString())}</p>

      </div>

      <AmountDisplay
        amount={expense.amount}
      />
    </div>
  )
}
