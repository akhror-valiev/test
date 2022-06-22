import { useState, useEffect } from "react";
import 

const DetailPage = () => {
    const [memes, setMemes] = useState([])

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then((res) => {
                return res.json()
            })

            .then((data) => {
                console.log(data.data.memes)
                setMemes(data.data.memes)


            })
    }, [])



    return (
        <div>

        </div>
    )
}

export default DetailPage