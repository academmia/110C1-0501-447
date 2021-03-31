
import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

// 2b request props
function Category({categories}) {

    // 1
    // const [categories, setCategories] = useState([]);

    // 1.
    // useEffect( () => {
    //   fetch('http://localhost:4000/categories')
    //   .then( resp => resp.json() )
    //   .then( data => setCategories(data))
    // }, [] );

    // console.log('Categories');
    // const router = useRouter();
    // console.log(router);

    return (
        <div className="container center">
            <h2> Categories </h2>
            <div className="center m-v-2">
            {
                categories.map( data => {
                    return (
                        <p key={data.id}> <code> { data.name } </code></p>
                    )
                })
            } 
            </div>   
        </div>
    )
}

// 2a
// !! In development (next dev), getStaticProps will be called on every request.
export async function getStaticProps() {

    let categories = [];

    categories = await fetch('http://localhost:4000/categories')
      .then( resp => resp.json() )
      .then( data => categories = data)

    return {
      props: {
        categories
      }
    }
}

export default Category;
