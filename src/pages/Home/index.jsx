import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { Header } from '../../components/Header'
import { Notes } from '../../components/Notes'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'



export function Home() {
  return (
    <Container>
      <Brand>
      <h1>Rocketnotes</h1>
      </Brand>

      <Header/>
      
      <Menu>
        <li>
          <ButtonText title="Todos" isActive/>
        </li>
        <li>
          <ButtonText title="React"/>
        </li>
        <li>
          <ButtonText title="Nodejs"/>
        </li>

      </Menu>
      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
      </Search>
      <Content>
        <Section name="Minhas notas">
          <Notes data={{ name:'React', tags: [{id: '1', name: 'react'}, {id: '2', name:'Rocketseat'}] }}/>
        </Section>
      </Content>
      <NewNote to="/new">
        <FiPlus/>
          Criar Nota
      </NewNote>
    </Container>
  )
}