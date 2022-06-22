import { useState, useEffect } from "react";
import './meme.css'
import { Link } from "react-router-dom"









const FetchMeme = () => {

    const [memes, setMemes] = useState([])
    const [SearchMeme, setSearchMeme] = useState("")









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
        <>
            <div className="headerSearchItem">

                <input
                    type="text"

                    onChange={(e) => setSearchMeme(e.target.value)}
                    placeholder="Search..."
                    className="headerSearchInput"

                />


            </div>
            <div className="container">




                {
                    memes


                        .filter((value) => {
                            if (SearchMeme === "") {
                                return value
                            } else if (
                                value.name.toLowerCase().includes(SearchMeme.toLowerCase())) {
                                return value
                            }

                        })


                        .map((mem) => (
                            <div className="slider" keys={mem.id}>

                                <h4 className="title">{mem.name}</h4>

                                <img className="sliderImg" src={mem.url} alt={mem.name} classname="img" />

                            </div>
                        ))
                }

            </div>
        </>
    );
}





export default FetchMeme;
