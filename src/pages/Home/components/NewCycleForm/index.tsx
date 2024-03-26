import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

import { useContext } from 'react'

import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CiclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        type="text"
        placeholder="Dê um nome para seu projeto."
        list="task-sugetions"
        disabled={!!activeCycle}
        {...register('task')}
      />
      <datalist id="task-sugetions">
        <option value="projeto 01" />
        <option value="projeto 02" />
        <option value="projeto 03" />
        <option value="projeto 04" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        id="minutesAmount"
        type="number"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
