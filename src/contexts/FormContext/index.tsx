import React, { createContext, useReducer, useContext } from 'react'
import { iState, iContext, iAction, iFormProvider } from './interfaces'

const initialData: iState = {
  request: {
    plans: [
      {
        name: '',
        details: [''],
        description: '',
        items: [''],
        price: '',
        complementaryServices: [{ name: '', price: '' }],
        installations: [{ name: '', price: '' }],
      },
    ],
  },
  plan: {
    name: '',
    details: [''],
    description: '',
    items: [''],
    price: '',
    complementaryServices: [{ name: '', price: '' }],
    installations: [{ name: '', price: '' }],
  },
  register: {
    name: '',
    email: '',
    telephone: '',
  },
  zipCode: '',
  installation: { name: '', price: '' },
}

const { plan, register, zipCode, installation } = initialData

const FormContext = createContext<iContext | undefined>(undefined)

export enum FormActions {
  setRequest,
  setPlan,
  setRegister,
  setZipCode,
  setInstallation,
  clearValues,
}

const formReducer = (state: iState, action: iAction) => {
  switch (action.type) {
    case FormActions.setRequest:
      return { ...state, request: action.payload }
    case FormActions.setPlan:
      return { ...state, plan: action.payload }
    case FormActions.setRegister:
      return { ...state, register: action.payload }
    case FormActions.setZipCode:
      return { ...state, zipCode: action.payload }
    case FormActions.setInstallation:
      return { ...state, installation: action.payload }
    case FormActions.clearValues:
      return { ...state, state: { plan, register, zipCode, installation } }
    default:
      return state
  }
}

export const FormProvider = ({ children }: iFormProvider) => {
  const [state, dispatch] = useReducer(formReducer, initialData)
  const value = { state, dispatch }

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

export const useForm = () => {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error('useForm needs to be used inside the FormProvider')
  }
  return context
}
