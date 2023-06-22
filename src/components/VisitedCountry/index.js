import {Component} from 'react'

class VisitedCountry extends Component {
  onClickButton = () => {
    const {removeCountry, visitedCountryDetails} = this.props
    const {id, isVisited} = visitedCountryDetails
    removeCountry(id, isVisited)
  }

  render() {
    const {visitedCountryDetails} = this.props
    // console.log(visitedCountryDetails)
    const {name, imageUrl} = visitedCountryDetails
    return (
      <li>
        <img width={200} height={100} src={imageUrl} alt="thumbnail" />
        <div>
          <p>{name}</p>
          <button type="button" onClick={this.onClickButton}>
            Remove
          </button>
        </div>
      </li>
    )
  }
}
export default VisitedCountry
