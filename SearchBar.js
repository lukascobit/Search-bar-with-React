import React, {useState} from 'react';
import './SearchBar.css';


const products = ["item0","item1","banana","orange","item2","milk","oil","bubblegum","vinegar"]


const SearchBar = () => {

    const [SearchValue, SetSearchValue] = useState('');


    const handleInputChange = (event) => {
        SetSearchValue(event.target.value)
    }

    const handleClearClick = () => {
        SetSearchValue("")
    }

    const shouldDisplayButton = SearchValue.length > 0

    const filteredProducts = products.filter((product)=>{
        return product.includes(SearchValue)
    })

    return(
        <div>
            <h1>Search Bar</h1>
            <input type="text" value={SearchValue} onChange={handleInputChange}/>
            {shouldDisplayButton && <button onClick={handleClearClick}>Clear</button>}
            {filteredProducts.map((product)=>{
                return <div key={product}>{product}</div>
            })}
        </div>
    )
}

export default SearchBar