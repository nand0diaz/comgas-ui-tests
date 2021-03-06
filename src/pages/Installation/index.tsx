import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Installation as InstallationForm } from '../../components/Installation'
import { Page } from '../../layouts'

export const Installation: React.FC = () => {
  const navigate = useNavigate()

  const { state, dispatch } = useForm()
  const { zipCode, plan, installation } = state
  const { installations } = plan

  useEffect(() => {
    zipCode === '' && navigate('/zipCode')
  }, [])

  return zipCode !== '' ? (
    <Page step="3">
      <InstallationForm
        installation={installation}
        installations={installations}
        setInstallation={FormActions.setInstallation}
        dispatch={dispatch}
        prevPage="/zipCode"
        nextPage="/checkout"
        navigate={navigate}
      />
    </Page>
  ) : (
    <></>
  )
}
