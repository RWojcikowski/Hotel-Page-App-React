import React from 'react'


function Searchbar() {
    return (
        <div className="d-flex">
            <input

                className=""
                type="text"
                placeholder="Szukaj..." />

            <div className="col-12">
                <button
                    className="ml-2 btn btn-info">Szukaj</button>

            </div>
        </div>
    )


}
export default Searchbar;
