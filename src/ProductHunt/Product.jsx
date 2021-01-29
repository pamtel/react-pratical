import React from 'react'

function Product({product, onVote, downVote}) {
    console.log(product);
    const handleVote = () => {
        onVote(product.id)
    }
    const reduceVote = () => {
        downVote(product.id)
    }
    return (
        <div>
            <div>
                <img src={product.productImageUrl} alt="" style={{width: 150, height: 150, objectFit: "cover"}}/>
            </div>
            <div>
                <div>
                    <a href="#!" onClick={handleVote}>🔺</a>
                    {product.votes}
                    <a href="#!" onClick={reduceVote}>🔻</a>
                </div>
                <div>
                    <a href={product.url}>{product.title}</a>
                    <p>{product.description}</p>
                </div>
                <div className="text-red-600">
                    <span>Submitted by :</span>
                    <img src={product.submitterAvatarUrl} alt="" style={{width: 50, height: 50, objectFit: "cover", borderRadius: "50%"}}/>
                </div>
            </div>
        </div>
    )
}

export default Product
