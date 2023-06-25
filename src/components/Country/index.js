import {Component} from 'react'
import './index.css'

class Country extends Component {
  render() {
    const {countryDetails, visitCountry} = this.props
    const {name, isVisited, id} = countryDetails
    return (
      <li>
        <div>
          <p>{name}</p>

          {isVisited ? (
            <p>Visited</p>
          ) : (
            <button
              type="button"
              onClick={() => {
                visitCountry(id)
              }}
            >
              Visit
            </button>
          )}
        </div>
      </li>
    )
  }
}

export default Country
