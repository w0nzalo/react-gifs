import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Dragon Ball', ]);

    const onAddCategory = ( categoryName ) => {
        setCategories( [ categoryName, ...categories ]);
    ;}


    return (
    <>
        <h1>Gif Expert App!</h1>
        
        <AddCategory
            onNewCategory={ onAddCategory } 
            currentCategories= { categories }
        />

        { categories.map( 
            category => (
                <GifGrid key={category} category={category} />
            )
        )}

    </>
    );
}
