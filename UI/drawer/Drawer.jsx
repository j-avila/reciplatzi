import React from "react"
import PropTypes from "prop-types"
import { BoxDrawer, DrawerContainer } from "./Drawer.styles"
import { ContentGrid } from "../../styles/Home.styles"
import Card from "../card"

const Drawer = ({
  open,
  transitionExit,
  handleExit,
  data = [],
  handleFavs,
}) => {
  return (
    <>
      {open && (
        <DrawerContainer className={transitionExit && "exit"}>
          <div className={`drawer ${transitionExit && "exit"}`}>
            <div className="head">
              <span>
                <i className="fa-solid fa-book" /> Your favorites
              </span>
              <i className="fa fa-close" onClick={handleExit} />
            </div>
            {data?.length > 0 ? (
              <ContentGrid layout="1fr" className="drawer-content">
                {data?.map((recipe) => (
                  <Card
                    key={recipe.idMeal}
                    data={recipe}
                    handleFavourite={handleFavs}
                    orientation="hor"
                  />
                ))}
              </ContentGrid>
            ) : (
              <p className="no-favs">
                Not favorites yet? <br /> Click on{" "}
                <i className="fa-regular fa-bookmark" /> to add as manny
                inspires you!
              </p>
            )}
          </div>
          <div className="veil" onClick={handleExit}></div>
        </DrawerContainer>
      )}
    </>
  )
}

Drawer.propTypes = {
  transitionExit: PropTypes.bool.isRequired,
  handleExit: PropTypes.func.isRequired,
  handleFavs: PropTypes.func,
  data: PropTypes.array,
  open: PropTypes.bool.isRequired,
}

export default Drawer
