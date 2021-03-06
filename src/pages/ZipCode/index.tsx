import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, FormActions } from '../../contexts/FormContext'
import { ZipCode as ZipCodeForm } from '../../components/ZipCode'
import { Page } from '../../layouts'

export const ZipCode: React.FC = () => {
  const navigate = useNavigate()

  const { state, dispatch } = useForm()
  const { register, zipCode } = state
  const { name } = register

  useEffect(() => {
    name === '' && navigate('/register')
  }, [])

  return name !== '' ? (
    <Page step="2">
      <ZipCodeForm
        zipCode={zipCode}
        setZipCode={FormActions.setZipCode}
        dispatch={dispatch}
        nextPage="/successful"
        unavailable="/unavailable"
      />
    </Page>
  ) : (
    <></>
  )
}
