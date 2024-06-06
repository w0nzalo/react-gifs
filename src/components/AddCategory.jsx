import { useState } from "react";

export const AddCategory = ( { onNewCategory, currentCategories } ) => {
    
    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const inputValueToAdd = inputValue.trim();
        const lowerCaseCategories = currentCategories.map(category => category.toLowerCase());
        const lowerCaseInputValueToAdd = inputValueToAdd.toLowerCase();
        if (inputValueToAdd && !lowerCaseCategories.includes(lowerCaseInputValueToAdd)) {
                onNewCategory(inputValueToAdd);
        }
        setInputValue('');
    };

    return (
        <form onSubmit={ onSubmit }>
            <input   
                type="text"
                placeholder="search gifs!"
                value={inputValue}
                onChange={ (event) => onInputChange(event) }
            />
        </form>
    )
}
