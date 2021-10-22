import React, { useEffect, useState } from 'react'

export const HomeScreen = () => {
    const [data, setData] = useState({})

    // useEffect(() => {
    //     fetch("http://localhost:3001/api/paciente/")
    //         .then( res => res.json())
    //         .then( data => {
    //             setData( data )
    //         })
    //     }, [])
    //     console.log( data )


    return (
        <div>
            <h1>Healthy home screen</h1>
        </div>
    )
}
