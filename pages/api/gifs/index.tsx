import axios from "axios"
import { NextApiRequest, NextApiResponse } from "next"

const giphyApiKey = process.env.GIPHY_API_KEY

const giphySearchUrl =
  "https://api.giphy.com/v1/gifs/search?api_key=" + giphyApiKey

const gifs = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { keyword } = req.body

    const result = await axios.get(
      giphySearchUrl + "&q=" + keyword.split(" ").join("") + "&limit=1"
    )

    const data = result.data

    res.status(200).send(data[0]?.images?.downsized_medium?.url)
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
}

export default gifs
