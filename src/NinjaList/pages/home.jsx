import React from 'react'
import {Link} from "react-router-dom";

function home() {
    return (
        <div>
            <header className="headings">
                <h1>Homepage</h1>
            </header>

            <main>
            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi saepe obcaecati expedita, at repellat minus ducimus dicta quidem officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi saepe obcaecati expedita, at repellat minus ducimus dicta quidem officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi saepe obcaecati expedita, at repellat minus ducimus dicta quidem officiis.</p>

            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi saepe obcaecati expedita, at repellat minus ducimus dicta quidem officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi saepe obcaecati expedita, at repellat minus ducimus dicta quidem officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi saepe obcaecati expedita, at repellat minus ducimus dicta quidem officiis.</p>
            <div className="text-center">
                <Link to="#!" className="inline-block px-4 py-2 bg-blue-800 text-white rounded">See ninja listing </Link>
            </div>
                
            </main>

        </div>
    )
}

export default home
