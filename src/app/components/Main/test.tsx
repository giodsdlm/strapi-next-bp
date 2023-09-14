import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    //renderiza o componente
    const { container } = render(<Main />)
    //busca o elemento
    const mainComponent = screen.getByRole('heading', {
      name: /react avançado/i
    })
    //verifica a existencia dele
    expect(mainComponent).toBeInTheDocument()

    //gerar snapshpt
    expect(container.firstChild).toMatchSnapshot()
  })
})
