
import { Card, Container } from 'react-bootstrap'
import pikachu from '../assets/img/pikachuSaludo.gif'

export default function Home() {
    return (
      <Container >
        <div className="pikachu">
          <h1 className="titulo">
            Bienvenido Maestro Pokemón
          </h1>
        
        <div>
      <Card.Img style={{ width: '18rem' }}
                variant="top" className="pika"   src={pikachu} alt=''  />
        </div>
        </div>
      </Container>
  
  
    )
  }