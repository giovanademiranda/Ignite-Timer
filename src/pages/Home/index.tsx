import { zodResolver } from "@hookform/resolvers/zod";
import { Play } from "phosphor-react";
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountDownButton,
  TaskInput
} from "./styles";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  MinutesAmount: zod.number().min(5).max(60)
})

export function Home() {
  const {register, handleSubmit, watch} = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
  })
  
  function handleCreateNewCycle(data: any) {

  }

  const task = watch('task')
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            placeholder="De um nome para o seu projeto"
            list="task-suggestions"
            {...register('task')}
            />

          <datalist id="task-suggestions">
            <option value="Projeto 1"/>
            <option value="Projeto 2"/>
            <option value="Projeto 3"/>
            <option value="Projeto 4"/>
          </datalist>

          <label htmlFor="">durante</label>
          <MinutesAmountInput 
            placeholder="00" 
            type="number" 
            id="minutesAmount" 
            step={5} 
            min={5} 
            max={60}
            {...register('minutesAmount', {valueAsNumber: true})}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>
          <StartCountDownButton disabled={isSubmitDisabled}type="submit">
            <Play size={24}/>
            Começar
          </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}