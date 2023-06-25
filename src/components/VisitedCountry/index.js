const VisitedCountry = props => {
  const {visitedCountryDetails, removeCountry} = props
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

export default VisitedCountry
