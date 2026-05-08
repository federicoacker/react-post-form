import { Container } from "react-bootstrap"

function Header() {
  return (
    <header className="bg-dark border-bottom border-danger py-5 mb-4 text-white">
        <Container>
            <h1 className="text-center"> Il blog con i migliori romanzi </h1>
        </Container>
    </header>
  )
}

export default Header