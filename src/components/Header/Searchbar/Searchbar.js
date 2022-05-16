import React from 'react'


function Searchbar() {
    return (
        <div className='d-flex'>
            <input
                // style={{
                //     width: 'calc(100 % - 30px)'
                // }}
                className=""
                type="text"
                placeholder="Szukaj..." />

            <div className="col">
                <button
                    className="btn btn-secondary">Szukaj</button>

            </div>
        </div>
    )


}
export default Searchbar;
