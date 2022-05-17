import React, { useState } from 'react'


function Searchbar() {
    const [term, setTerm] = useState()

    const search = () => {
        console.log('szukaj')
    }
    const updateTerm = (e) => {

    }
    return (
        <div className="d-flex">
            <input
                value={term}
                onChange={updateTerm}
                className=""
                type="text"
                placeholder="Szukaj..." />

            <div className="col-12">
                <button
                    onClilck={search}
                    className="ml-2 btn btn-info">Szukaj</button>

            </div>
        </div>
    )


}
export default Searchbar;
