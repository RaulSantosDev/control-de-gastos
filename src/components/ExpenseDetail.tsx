import type { Expense } from "../types"

type ExpenseDetailProops = {
    expense: Expense
}

export default function ExpenseDetail({expense} : ExpenseDetailProops) {

  return (
    <div>
      <span>{expense.expenseName}</span> <span>{expense.amount}</span>
    </div>
  )
}
