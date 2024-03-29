/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react"
import PropTypes from "prop-types"
import { CardWrapper } from "./Card.styles"

const Card = ({ data, handleFavourite, isFav, size, orientation = "vert" }) => {
  const { strMeal, strArea, strMealThumb, strYoutube, strCategory } = data
  const [placeholderImg, setPlaceholderImg] = useState(
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdribbble.com%2Fshots%2F4187820-404-Food-Not-Found&psig=AOvVaw2wBnyyKJ9QF6ZKyb6Umk3E&ust=1647132088813000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOigw6qrv_YCFQAAAAAdAAAAABAI"
  )

  return (
    <CardWrapper id="card" size={size} className={orientation}>
      <div className="thumb">
        {handleFavourite && (
          <i
            className={`${isFav ? "fa-solid" : "fa-regular"} fa-bookmark`}
            onClick={() => handleFavourite(data)}
          />
        )}
        {strMealThumb ? (
          <img src={strMealThumb} alt={strMeal} layout="fill" />
        ) : (
          <img src={placeholderImg} alt="meal not found" layout="fill" />
        )}
      </div>
      <article>
        <h2>{strMeal}</h2>
        <div className="cats">
          {strArea && (
            <div className="section">
              <span>
                <i className="fas fa-map-marker" />
                <h3>area</h3>
              </span>
              <p>{strArea}</p>
            </div>
          )}
          {strCategory && (
            <div className="section">
              <span>
                <i className="fa-solid fa-list" />
                <h3>category</h3>
              </span>
              <p>{strCategory}</p>
            </div>
          )}
          {strYoutube && (
            <div className="section">
              <h3>video recipe</h3>
              <a href={strYoutube} target="_blank" rel="noreferrer">
                <i className="fa-solid fa-video" />
              </a>
            </div>
          )}
        </div>
      </article>
    </CardWrapper>
  )
}

Card.propTypes = {
  idMeal: PropTypes.string,
  strMealThumb: PropTypes.string,
  strMeal: PropTypes.string,
  strCategory: PropTypes.string,
  strArea: PropTypes.string,
  strYoutube: PropTypes.string,
  isFav: PropTypes.bool,
  size: PropTypes.string,
  orientation: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf(["ver", "hor"]),
  ]),
}

export default Card
