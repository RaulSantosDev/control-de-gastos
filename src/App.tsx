import { useReducer } from "react"
import BudgetForm from "./components/BudgetForm"
import { BudgetReducer, initialState } from "./reducers/budget-reducer"

function App() {

  const [state, dispatch] = useReducer(BudgetReducer, initialState)
 
  return (
    <>
      <header className="bg-blue-600 py-8 max-h-72 ">
        <h1 className="uppercase text-center font-black text-4xl text-white">
          Planificador de Gastos
        </h1>
      </header>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-20 p-10">
        < BudgetForm 
          dispatch = {dispatch}
        />
      </div>
      <div className="text-center">
        {state?.budget}
      </div>
    </>
  )
}

export default App
