import { useForm } from 'react-hook-form'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { CycleContext } from '../../../../contexts/CycleContext'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1, 'O Ciclo precisa ser de no mínimo 5 minutos.')
    .max(60, 'O Ciclo precisa ser de no máximo 60 minutos.'),
})
type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>
export function NewCycleForm() {
  const {activeCycle} useContext(CyclesContext)
  
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { register, handleSubmit, watch, reset } = newCycleForm
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em:</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        type="text"
        placeholder="Dê nome para seu projeto"
        {...register('task')}
        disabled={!!activeCycle}
      />
      <datalist id="task-suggestions">
        <option value="project 01"></option>
        <option value="project 02"></option>
        <option value="project 03"></option>
        <option value="project 04"></option>
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <button>+</button>
      <MinutesAmountInput
        id="minutesAmount"
        type="number"
        min={1}
        max={60}
        step={5}
        placeholder="00"
        {...register('minutesAmount', { valueAsNumber: true })}
        disabled={!!activeCycle}
      />
      <button>-</button>

      <span>minutos.</span>
    </FormContainer>
  )
}
