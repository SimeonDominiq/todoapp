import { useEffect, useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { resetState } from "src/store/todo/todoSlice"
import { AppDispatch } from "../../store/store"
import RandomFactWrapper from "./RandomFact.styles"

const randomTextUrl = "https://uselessfacts.jsph.pl/random.json?language=en"

const RandomFact = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [randomText, setRandomText] = useState<string>("")

  const fetchRandomText = async () => {
    try {
      const response = await axios.get(randomTextUrl)
      setLoading(false)
      setRandomText(response?.data?.text)
    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRandomText()
  }, [])

  if (loading) return <RandomFactWrapper>Loading text...</RandomFactWrapper>

  const dispatch = useDispatch<AppDispatch>()

  return (
    <RandomFactWrapper>
      <div>{randomText}</div>
      <button
        type="button"
        onClick={() => {
          dispatch(resetState())
        }}
      >
        Reset
      </button>
    </RandomFactWrapper>
  )
}

export default RandomFact
