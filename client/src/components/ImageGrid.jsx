import { useState } from "react"
import { Container, Row, Col } from 'react-bootstrap'
import images from '../api-mock.json'
import Masonry from 'masonry-layout'

const ImageGrid = () => {
  const [imageList, setImageList] = useState(images.resources)

  return (
    <>
      <Container className='fluid'>

        <Row>
          <Col className='image-grid '>
            {imageList.map((image) => (
              <img src={image.url} alt={image.public_id} key={image.asset_id} />
            ))}
          </Col>
        </Row>

      </Container>

    </>
  )
}

export default ImageGrid
