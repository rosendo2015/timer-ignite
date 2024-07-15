<<<<<<< HEAD
import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { ActionTypes, Cycle, cyclesReducer } from '../reducers/cycles'
=======
import { ReactNode, createContext, useReducer, useState } from 'react'

>>>>>>> cab3fe8ba41302f5e5e154d35b44ca177a6ee8a0
interface CreateCycleData {
  task: string
  minutesAmount: number
}

<<<<<<< HEAD
=======
interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

>>>>>>> cab3fe8ba41302f5e5e154d35b44ca177a6ee8a0
interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  interruptCurrentCycle: () => void
}

export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProviderProps {
  children: ReactNode
}

<<<<<<< HEAD
=======
interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

>>>>>>> cab3fe8ba41302f5e5e154d35b44ca177a6ee8a0
export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
<<<<<<< HEAD
    cyclesReducer,
=======
    (state: CyclesState, action: any) => {
      switch (action.type) {
        case 'ADD_NEW_CYCLE':
          return {
            ...state,
            cycles: [...state.cycles, action.payload.newCycle],
            activeCycleId: action.payload.newCycle.id,
          }
        case 'INTERRUPT_CURRENT_CYCLE':
          return {
            ...state,
            cycles: state.cycles.map((cycle) => {
              if (cycle.id === state.activeCycleId) {
                return {
                  ...cycle,
                  interruptedDate: new Date(),
                }
              } else {
                return cycle
              }
            }),
            activeCycleId: null,
          }
        case 'MARK_FINISHED_CURRENT_CYCLE':
          return {
            ...state,
            cycles: state.cycles.map((cycle) => {
              if (cycle.id === state.activeCycleId) {
                return {
                  ...cycle,
                  finishedDate: new Date(),
                }
              } else {
                return cycle
              }
            }),
            activeCycleId: null,
          }
        default:
          return state
      }
    },
>>>>>>> cab3fe8ba41302f5e5e154d35b44ca177a6ee8a0
    {
      cycles: [],
      activeCycleId: null,
    },
<<<<<<< HEAD
    () => {
      const storageStartAsJSON = localStorage.getItem(
        '@ignite-timer: cycles-state-1.0.0',
      )

      if (storageStartAsJSON) {
        return JSON.parse(storageStartAsJSON)
      }
    },
=======
>>>>>>> cab3fe8ba41302f5e5e154d35b44ca177a6ee8a0
  )
  const { cycles, activeCycleId } = cyclesState

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

<<<<<<< HEAD
  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)

    localStorage.setItem('@ignite-timer: cycles-state-1.0.0', stateJSON)
  }, [cyclesState])

=======
>>>>>>> cab3fe8ba41302f5e5e154d35b44ca177a6ee8a0
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function markCurrentCycleAsFinished() {
    dispatch({
<<<<<<< HEAD
      type: ActionTypes.MARK_FINISHED_CURRENT_CYCLE,
=======
      type: 'MARK_FINISHED_CURRENT_CYCLE',
>>>>>>> cab3fe8ba41302f5e5e154d35b44ca177a6ee8a0
      payload: {
        activeCycleId,
      },
    })
  }

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch({
<<<<<<< HEAD
      type: ActionTypes.ADD_NEW_CYCLE,
=======
      type: 'ADD_NEW_CYCLE',
>>>>>>> cab3fe8ba41302f5e5e154d35b44ca177a6ee8a0
      payload: {
        newCycle,
      },
    })

    // setCycles((state) => [...state, newCycle])

    setAmountSecondsPassed(0)
  }

  function interruptCurrentCycle() {
    dispatch({
<<<<<<< HEAD
      type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
=======
      type: 'INTERRUPT_CURRENT_CYCLE',
>>>>>>> cab3fe8ba41302f5e5e154d35b44ca177a6ee8a0
      payload: {
        activeCycleId,
      },
    })
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
