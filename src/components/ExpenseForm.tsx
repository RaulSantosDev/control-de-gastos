import { categories } from "../data/data"
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
import type { DrafExpense, Value } from "../types";
import ErrorMessage from "./ErrorMessage";
import { useBudget } from "../hooks/useBudget";


export default function ExpenseForm() {

  const initialState = {
    amount: 0,
    expenseName: '',
    category: '',
    date: new Date()
  }

  const [ expense, setExpense] = useState<DrafExpense>(initialState)


  const [error, setError] = useState('')

  const { dispatch } = useBudget()

  const handleChange = (e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> ) => {
    const { name, value } = e.target
    const isAmountField = ['amount'].includes(name)  
    setExpense({
      ...expense,
      [name] : isAmountField ? Number(value) : value 
    })
  }

  const handleChangeDate = (value : Value) => {
    setExpense({
      ...expense,
      date: value
    })
  } 

  const handelSubmit = ( e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(Object.values(expense).includes('')){
      setError('Todos los campos son obligatorios')
      return
    }

    dispatch({type: "add-expense", payload: { expense }})

    setExpense(initialState)

  }
  
  return (
    <form className="space-y-5" onSubmit={handelSubmit}>
      <legend
        className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 p-4"
      >
        Nuevo Gasto
      </legend>

      {error && < ErrorMessage >{error}</ErrorMessage>}

      <div className="flex flex-col gap-2">
        <label 
          htmlFor="expenseName"
          className="text-xl"          
        >
          Nombre de gasto:
        </label>

        <input
          type="text"
          id="expenseName"
          placeholder="Añade el nombre del gasto"
          className="bg-slate-100 p-2"
          name="expenseName"
          value={expense.expenseName}
          onChange={handleChange}
        />

      </div>

      <div className="flex flex-col gap-2">
        <label 
          htmlFor="amount"
          className="text-xl"          
        >
          Cantidad:
        </label>

        <input
          type="number"
          id="amount"
          placeholder="Ingresa la cantidad del gasto: ej. 300"
          className="bg-slate-100 p-2"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
        />

      </div>

      <div className="flex flex-col gap-2">
        <label 
          htmlFor="category"
          className="text-xl"          
        >
          Categoría:
        </label>

        <select
          id="category"
          className="bg-slate-100 p-2"
          name="category"
          onChange={handleChange}
          value={expense.category}
          
          
        >
          <option value="">-- Seleccione --</option>
          { categories.map( category => (
            <option 
              key={category.id}
              value={category.id}            
            > 
              {category.name}
            </option>
          ))}
        </select> 
      </div>

      <div className="flex flex-col gap-2">
        <label 
          htmlFor="amount"
          className="text-xl"          
        >
          Fecha Gasto:
        </label>

        < DatePicker 
          className="bg-slate-100 p-2"
          value={expense.date}
          onChange={handleChangeDate}
        />

      </div>


      <input 
        type="submit" 
        className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-sm" 
        value={'Registrar Gasto'}
      
      />   

      
    </form>
  )
}
