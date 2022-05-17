import React, { useState } from 'react'


function Searchbar() {
    const [term, setTerm] = useState('')

    const search = () => {
        console.log('szukaj', term)
    }
    const updateTerm = (e) => {
        setTerm(e.target.value);
        console.log(e.target.value);
    }
    const onKeyDownHandler = e => {
        if (e.key === 'Enter') {
            search()
        }
    }

    return (
        <div className="d-flex">
            <input
                value={term}
                onKeyDown={onKeyDownHandler}
                onChange={updateTerm}
                className="form-control"
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
