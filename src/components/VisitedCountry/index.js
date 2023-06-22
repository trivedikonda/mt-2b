import {Component} from 'react'

class VisitedCountry extends Component {
  render() {
    const {visitedCountryDetails, removeCountry} = this.props
    // console.log(visitedCountryDetails)
    const {name, imageUrl, id} = visitedCountryDetails
    return (
      <li>
        <img width={200} height={100} src={imageUrl} alt="thumbnail" />
        <div>
          <p>{name}</p>
          <button
            type="button"
            onClick={() => {
              removeCountry(id)
            }}
          >
            Remove
          </button>
        </div>
      </li>
    )
  }
}
export default VisitedCountry
