import { Play } from "phosphor-react";
import { CountDownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountDownButton, TaskInput } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput id='task' placeholder='De um nome para o seu projeto' />
          <label htmlFor="">durante</label>
          <MinutesAmountInput placeholder='00' type="number" id="minutesAmount" />
          <span>minutos.</span>
        </FormContainer>
        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>
          <StartCountDownButton disabled type="submit">
            <Play size={24}/>
            Começar
          </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}