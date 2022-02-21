import "./MainPage.css"
import { useDispatch, useSelector } from "react-redux"
import { searchValueADD } from "../Redux/action"
import { useNavigate} from "react-router-dom"

export const MainPage = () => {
  const { searchValue } = useSelector((store) => store.searchValue)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div className="wrapper">
      <img
        className="logo"
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt=""
      />
      <input
        type="text"
        className="search-box"
        value={searchValue}
        placeholder="Search google"
        onChange={(e) => {
          dispatch(searchValueADD(e.target.value))
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            navigate(`/searchq=${searchValue}`)
          }
        }}
      />
    </div>
  )
}
