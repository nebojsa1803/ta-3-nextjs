'use client'

import { useAppSelector } from '@/redux-toolkit/hooks'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const TaskLevelsPage = () => {
  const { brojZadataka } = useAppSelector(
    (state) => state.generalData.generalData
  )

  return (
    <div>
      <h1>Task Level</h1>
      <h4>Broj zadataka {brojZadataka}</h4>
    </div>
  )
}

export default TaskLevelsPage
