// import StepFive from '@/StepFive'
import StepFive from './StepFive'
import StepOne from './StepOne'
import StepThree from './StepThree'
import StepTwo from './StepTwo'
import Stepfour from './Stepfour'
import React, { useState } from 'react'

const FormControle = () => {
  const [tab, setTab]= useState(0)
  if (tab===0) return <StepOne setTab={setTab} />
  if (tab===1) return <StepTwo setTab={setTab} />
  if (tab===2) return <StepThree setTab={setTab} />
  if (tab===3) return <Stepfour setTab={setTab} />
  if (tab===4) return <StepFive setTab={setTab} />
  return null;
}

export default FormControle