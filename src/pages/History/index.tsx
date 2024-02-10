import { HistoryContainer, HistoryList } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa 01</td>
              <td>20 Minutos</td>
              <td>Há 02 minutos</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Tarefa 01</td>
              <td>20 Minutos</td>
              <td>Há 02 minutos</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Tarefa 01</td>
              <td>20 Minutos</td>
              <td>Há 02 minutos</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Tarefa 01</td>
              <td>20 Minutos</td>
              <td>Há 02 minutos</td>
              <td>Concluído</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
