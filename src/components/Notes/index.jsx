import { Container } from './styles'
import { Tag } from '../Tag'

export function Notes({ data, ...rest}){
  return(
    <Container {...rest}>
      <h1>{data.name}</h1>

      {
        data.tags && <footer>
          {
            data.tags.map( tag=> <Tag name={tag.name} key={tag.id}/>)
          }
        </footer>
      }
    </Container>
  )
}