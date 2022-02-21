import React from "react"
import "./SearchPage.css"
import { useDispatch, useSelector } from "react-redux"
import { searchValueADD } from "../Redux/action"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import axios from 'axios'
import { useState } from "react"
import { Card } from "./Card"

export const SearchPage = () => {
  const { searchValue } = useSelector((store) => store.searchValue)
  const {query} = useParams()
  const dispatch = useDispatch()
  const [search, setSearch] = useState([])
  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    axios.get(`https://fast-reef-22226.herokuapp.com/data?q=${searchValue || query }`).then((res) => {
      setSearch(res.data)
    })
  }

  return (
    <>
      <nav id={"navbar"}>
        <img
          className="logo1"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          alt=""
        />
        <input
          type="type"
          value={searchValue || query}
          onChange={(e) => {
            dispatch(searchValueADD(e.target.value))
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              getData()
            }
          }}
        />
        <button className="search" onClick={() => {getData()}}>
          Search
        </button>
      </nav>
      <main className="body" id="search-result">
        {search.map((item) => {
          return <Card className="result" key={item.id} data={item} />
        })}
      </main>
    </>
  )
}
