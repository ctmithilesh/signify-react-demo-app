import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Cats = () => {

    const [cat, setCat] = useState(null)
    const catCondition = cat != null && cat.length > 0

    useEffect(() => {
        // first render 
        fetchCatData()

    }, [catCondition])

    const fetchCatData = async () => {
        await axios.get('https://api.thecatapi.com/v1/images/search')
            .then(res => {
                setCat(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }

    return (
        <div>
            <h1>My Cat </h1>
            {catCondition ? cat.map((item, index) => (
                <img   
                    key={index}
                    src={item.url}
                    width="150"
                    height="150"
                    alt="img"
                />
            )) : <span>Loading..,</span>}
        </div>
    )
}

export default Cats
