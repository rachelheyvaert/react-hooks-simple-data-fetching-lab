// create your App component here
import {useEffect, useState} from "react"

function App() {
const [image, setImage] = useState(null)
    useEffect(()=> {
fetch("https://dog.ceo/api/breeds/image/random")
.then(r => r.json())
.then(dog => setImage(dog.message))
    }, [])
    if(!image){
        return <p>Loading...</p>
    }
    return <div>
        <img alt="A Random Dog" src={image} />
        </div>
}

export default App;