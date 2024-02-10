import { Play } from 'phosphor-react'
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'
export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em:</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            type="text"
            placeholder="Dê nome para seu projeto"
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
            min={5}
            max={60}
            step={5}
            placeholder="00"
          />
          <button>-</button>

          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>
        <StartCountdownButton disabled type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
