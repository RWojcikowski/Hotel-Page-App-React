import React from 'react'


function Searchbar() {
    return (
        <div>
            <input
                style={{ width: 'calc(100 % - 30px)' }}
                type="text"
                placeholder="Szukaj..." />
            <button>Szukaj</button>
        </div>
    )


}
export default Searchbar;
