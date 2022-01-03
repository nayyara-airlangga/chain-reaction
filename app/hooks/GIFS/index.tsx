import axios from "axios"
import { useEffect, useState } from "react"

const useFetchGIF = (keyword: string) => {
  const [gifUrl, setGifUrl] = useState("")

  const fetchGifs = async (keyword: string) => {
    try {
      const res = await axios.post("/api/gifs", { keyword })
      setGifUrl(res.data)
    } catch (error: any) {
      console.log(error)
      setGifUrl("https://dribbble.com/shots/6538803-Error")
    }
  }

  useEffect(() => {
    fetchGifs(keyword)
  }, [keyword])

  return gifUrl
}

export { useFetchGIF }
