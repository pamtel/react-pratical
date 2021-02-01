import {useState} from 'react'

function Tailwind() {
    const [showNav, setShowNav] = useState(false)
    return (
        <div className="text-gray-600 font-serif grid md:grid-cols-4">

            {/* nav starts */}
            <header className="md:col-span-1 md:flex md:justify-end">
                <nav className="text-right">
                    <div className="flex justify-between items-center">
                        <h1 className="font-bold uppercase p-4 border-b border-gray-400">
                            <a href="#" className="text-sm md:text-xl">Food ninja</a>
                        </h1>
                        <div className="px-4 cursor-pointer md:hidden" onClick={() => setShowNav(!showNav)}><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></div>
                    </div>
                    <ul className={`text-sm md:block`}>
                        <li className="text-gray-800 font-bold py-1"><a href="#" className="flex justify-end px-4 border-r-4 border-red-600">
                            <span>Home</span> 
                            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg></a></li>
                        <li className="py-1"><a href="#" className="flex justify-end px-4 border-r-4 border-white">
                            <span>About</span> 
                            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></a></li>
                        <li className="py-1"><a href="#" className="flex justify-end px-4 border-r-4 border-white">
                            <span>Contact</span> 
                            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></a></li>
                    </ul>
                </nav>
            </header>

            <main className={`px-16 py-6 bg-gray-100 md:col-span-3 transform ${showNav ? "translate-y-0" : "-translate-y-24"} transition ease-linear duration-500 `}>
                <div className="text-red-600 uppercase flex md:justify-end justify-center">
                    <a href="#" className=" font-bold text-sm md:border-2 border-red-600 px-3 py-2 rounded-md tracking-wider hover:bg-red-600 hover:text-white transition ease-out duration-500">Log In</a>
                    <a href="#" className="font-bold text-sm md:border-2 border-red-600 ml-2 px-3 py-2 rounded-md tracking-wider hover:bg-red-600 hover:text-white transition ease-out duration-500">Sign Up</a>
                </div>
                <header>
                    <h2 className="text-gray-800 text-6xl font-semibold">Recipes</h2>
                    <h3 className="text-2xl font-semibold">for ninjas</h3>
                </header>
                <div>
                    <h4 className="font-bold mt-12 pb-2 border-b border-gray-400">Latest Recipes</h4>
                    {/* card wrapper */}
                    <div className="mt-8 grid lg:grid-cols-3 gap-10">
                       <MealCard />
                       <MealCard />
                       <MealCard />
                    </div>
                    <h4 className="font-bold mt-12 pb-2 border-b border-gray-400">Popular recipes</h4>
                    <div className="flex justify-center">
                        <button className="bg-gray-400 text-gray-600 px-3 py-2 rounded-full mt-2 hover:border-2 hover:border-gray-400 transform hover:scale-x-110 hover:bg-opacity-40 hover:shadow-inner transition ease-in-out duration-300 uppercase">Load more</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

const MealCard = () => {
    return (
        <article className="bg-white rounded overflow-hidden shadow-md relative hover:shadow-lg">
        <img src="img/dish1.jpg" alt="image" className="w-full h-32 sm:h-48 object-cover"/>
        <div className="m-4">
            <span className="font-bold text-gray-500">Veggie Pizza</span>
            <span className="block text-sm text-gray-500">recipe by pamela</span>
            </div>
            <div className="bg-gray-100 absolute top-0 mt-2 ml-2 py-2 px-2.5 text-xs rounded-full bg-opacity-70 text-gray-600 uppercase font-bold">
            <svg class="w-5 h-5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span> 25 mins</span>
            </div>
    </article>
    )
}

export default Tailwind