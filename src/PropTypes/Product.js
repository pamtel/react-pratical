import PropTypes from 'prop-types'

function Product({title, price, rating, children}) {
    return (
        <div className="mt-5">
            {children}
            <h3>{title}</h3>
            <p>{price}</p>
            <p>{rating.jumia}</p>
        </div>
    )
}

// import PropTypes from "prop-types" in the component you want to check its type
// at the bottom, call the component.propTypes and assign an object to it 
// each of the props should be the properties
// and the values should be PropTypes.<theDataTypes>.isRequired
// isRequired is not compulsory

Product.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.object.isRequired
}

export default Product
