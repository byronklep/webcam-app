import React from 'react'
import Select from 'react-select'
import axios from 'axios'

import CContainer from './CContainer'
import { Container } from 'react-bootstrap'

class DD extends React.Component {
  state = {
    selectedOption: [],
    cData: [],
    loading: false,
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption }) // this will update the state of selected therefore updating value in react-select
    console.log(`Selected: ${selectedOption.value}`)

    const filterWebcams = () => {
      this.setState({ loading: true })

      const options = {
        method: 'GET',
        url: `https://webcamstravel.p.rapidapi.com/webcams/list/continent=${selectedOption.value}`,
        params: { lang: 'en', show: 'webcams:image,location' },
        headers: {
          'x-rapidapi-key':
            'f53ec3ed8fmsh56cc4f9c74af0edp18b789jsn7fb5469ef1fc',
          'x-rapidapi-host': 'webcamstravel.p.rapidapi.com',
        },
      }

      let currentComponent = this

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data.result.webcams)
          currentComponent.setState({ cData: response.data.result.webcams })
          currentComponent.setState({ loading: false })
        })
        .catch(function (error) {
          console.error(error)
        })
    }

    filterWebcams()
  }

  render() {
    const { selectedOption } = this.state
    const value = selectedOption && selectedOption.value // this will read from state and set the value in state as the selected value. Therefore setting a value even when none has yet to be selected.

    return (
      <>
        <Container>
          <Select
            name="form-field-name"
            value={value} // so here the default value of one will be set then updates during the on change event
            onChange={this.handleChange}
            options={[
              { value: 'AF', label: 'Africa' },
              { value: 'AN', label: 'Antarctica' },
              { value: 'AS', label: 'Asia' },
              { value: 'EU', label: 'Europe' },
              { value: 'NA', label: 'North America' },
              { value: 'OS', label: 'Oceania' },
              { value: 'SA', label: 'South America' },
            ]}
          />

          <div className="cards">
            {this.state.cData.map((cweb, id) => (
              <CContainer cweb={cweb} id={id} />
            ))}
          </div>
        </Container>
      </>
    )
  }
}

export default DD
