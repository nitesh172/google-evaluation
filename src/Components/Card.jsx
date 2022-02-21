import { Link } from "react-router-dom"

export const Card = ({ data }) => {
  let date = Date(data.creation_date)
  return (
    <>
      <div className="website">{data.url}</div>
      <Link to={data.url}>{data.title}</Link> |<span> {data.author}</span>
      <p className="desc">{data.description}</p>
      <span>Creation Date: {date}</span>
      <div className="bottom">
        <span>Explicit: {data.explicit ? "Yes" : "No"} </span>
        <span>Quality %: {data.quality}</span>
      </div>
    </>
  )
}
