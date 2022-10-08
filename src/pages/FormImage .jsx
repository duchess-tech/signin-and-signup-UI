import Imgdata from "../Imgdata";
import { useState } from "react";
import { useEffect } from "react";


export default function FormImage() {
    //random image
    const [image, setimage] = useState('')

    useEffect(() => {
        const picarray = Imgdata
        const randompic = Math.floor(Math.random() * picarray.length)
        setimage(picarray[randompic].url)
        console.log(image)
    }, [image])

    return (
        <div className="image-design-div"><img className="image-design" src={`images/${image}`}></img></div>

    )
}