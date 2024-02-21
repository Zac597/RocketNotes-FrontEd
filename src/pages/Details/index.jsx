import { Container, Links, Content } from './styles'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'





export function Details(){

  return(
    <Container>
      <Header/>

      <main>
        <Content>



      <ButtonText name="Excluir nota"/>
      <h1>Introdução ao React</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit atque 
        rerum nesciunt fugiat fugit aliquam ratione sequi repellat soluta, 
        vero animi nisi adipisci libero vitae, vel aspernatur minima iusto officiis,
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit atque 
        rerum nesciunt fugiat fugit aliquam ratione sequi repellat soluta, 
        vero animi nisi adipisci libero vitae, vel aspernatur minima iusto officiis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit atque 
        rerum nesciunt fugiat fugit aliquam ratione sequi repellat soluta, 
        vero animi nisi adipisci libero vitae, vel aspernatur minima iusto officiis.</p>

        <Section name="Links úteis">
          <Links>
            <li> <a href="#"> https://www.google.com </a> </li>
            <li> <a href="#"> https://www.google.com </a> </li>
          </Links>
        </Section>

        <Section name="marcadores">
          <Tag name="express"/>
          <Tag name="node"/>
        </Section>

      <Button name="Voltar"/>
      </Content>
      </main>
    </Container>
  )
}