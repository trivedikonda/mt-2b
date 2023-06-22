import {Component} from 'react'
import './index.css'

class Country extends Component {
  onHandleClick = () => {
    const {addCountry, countryDetails} = this.props
    const {id} = countryDetails
    addCountry(id)
  }

  render() {
    const {countryDetails} = this.props
    const {name, isVisited} = countryDetails
    return (
      <li>
        <div>
          <p>{name}</p>

          {isVisited ? (
            <p>Visited</p>
          ) : (
            <button type="button" onClick={this.onHandleClick}>
              Visit
            </button>
          )}
        </div>
      </li>
    )
  }
}

export default Country
