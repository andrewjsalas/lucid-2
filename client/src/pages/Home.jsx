import { Button, Container, Form, Row, Col, Card } from "react-bootstrap"
import { useState } from "react"
import images from '../api-mock.json'
import ImageGrid from "../components/ImageGrid"

const Home = () => {
  const [imageList, setImageList] = useState(images.resources)

  return (
    <>
      <Container className='fluid'>
        <hr />
        {/* Upload Form */}
        <Form>
          
        </Form>
        <ImageGrid />
      </Container>
    </>
  )
}

export default Home