import type { ReactNode } from "react"

type ErrorMessageProps = {
    children: ReactNode
}

export default function ErrorMessage({children} : ErrorMessageProps) {
  return (
    <div className="bg-red-600 font-bold uppercase text-center text-sm text-white p-2">
      {children}
    </div>
  )
}

