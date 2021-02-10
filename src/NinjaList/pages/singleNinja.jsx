import React from 'react'

function singleNinja() {
    const state = {};
    return (
        <div>
            <h2>My name is {state?.name}</h2>
            <p>I work at {state?.company?.name}</p>
            <p>I reside in {state?.address?.suite}, {state?.address?.street}, {state?.address?.city}</p>
            <p>You can contact me via my mail which is {state?.email} or via my website <a href={state?.website}>here</a></p>
        </div>
    )
}
export default singleNinja
