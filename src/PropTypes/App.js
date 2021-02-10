import Product from './Product'

function App() {
    return (
        <div className="ml-5">
            <Product title="shoe" price={24} rating={{jumia: 5}}/>
            <Product title="shirt" price={14} rating={{jumia: 3}}/>
            <Product title="skirt" price={4} rating={{jumia: 2}}>
                <h1>Hello There</h1>
            </Product>
        </div>
    )
}

export default App
