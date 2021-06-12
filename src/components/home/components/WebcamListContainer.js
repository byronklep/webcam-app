import React, { useState, useEffect } from 'react'
import axios from 'axios'
import WebcamItem from './WebcamItem'
import { Spinner, Container, Row, Col } from 'react-bootstrap'
import DD from './DD'

const WebcamListContainer = () => {
  const [webcams, setWebcams] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const options = {
      method: 'GET',
      url: 'https://webcamstravel.p.rapidapi.com/webcams/list/limit=25,0',
      params: { lang: 'en', show: 'webcams:image,location' },
      headers: {
        'x-rapidapi-key': 'f53ec3ed8fmsh56cc4f9c74af0edp18b789jsn7fb5469ef1fc',
        'x-rapidapi-host': 'webcamstravel.p.rapidapi.com',
      },
    }

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data.result.webcams)
        setWebcams(response.data.result.webcams)
        setLoading(false)
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [])

  if (loading) {
    return <Spinner className="spinner" animation="grow" variant="info" />
  }

  // Possible values for {continent} are: "AF" (Africa), "AN" (Antarctica), "AS" (Asia), "EU" (Europe), "NA" (North America), "OC" (Oceania), or "SA" (South America)

  return (
    <>
      <Container>
        <Row>
          <Col>
            <DD />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="cards">
              {webcams.map((webcam, id) => (
                <WebcamItem key={id} webcam={webcam} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default WebcamListContainer
