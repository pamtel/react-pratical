import {Link} from 'react-router-dom'

function header() {
    return (
        <header className="border-b py-2.5">
            <nav className="flex justify-between items-baseline">
                <img src="logo192.png" alt="" className="w-16"/>

                <ul className="flex">
                    <li className="mr-4">
                        <Link to="/">Home</Link>
                    </li>

                    <li className="mr-4">
                        <Link to="/about">About</Link>
                    </li>

                    <li className="mr-4">
                        <Link to="/ninjas">Ninja listing</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default header
