import React from 'react'

function Tailwind() {
    return (
        <div className="text-gray-600">
            <div>
            {/* nav starts */}
            <header>
                <nav>
                    <div>
                        <h1 className="font-bold uppercase">
                            <a href="#">Food ninja</a>
                        </h1>
                    </div>
                    <ul>
                        <li className="text-gray-800 font-bold"><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </div>

        <main className="px-16 py-6">
            <div>
                <a href="#">Log In</a>
                <a href="#">Log Up</a>
            </div>
            <header>
                <h2 className="text-gray-800 text-6xl font-semibold">Recipes</h2>
                <h3 className="text-2xl font-semibold">for ninjas</h3>
            </header>
            <div>
                <h4 className="font-bold mt-12 pb-2 border-b border-gray-400">Latest Recipes</h4>
                {/* card wrapper */}
                <div className="mt-8">
                    <article>
                        <img src="img/myPics3.jpg" alt="image"/>
                        <div>
                            <h5>Veggie Pizza</h5>
                            <p>recipe by pamela</p>
                            <div>
                                <span>25 mins</span>
                            </div>
                        </div>
                    </article>
                </div>
                <h4 className="font-bold mt-12 pb-2 border-b border-gray-400">Popular recipes</h4>
                <div>
                    <button>Load more</button>
                </div>
            </div>
        </main>
        </div>
    )
}

export default Tailwind
