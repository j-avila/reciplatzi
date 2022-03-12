import Platzi from "../public/assets/platzi.svg"
import Image from "next/image"
// queries
import { dehydrate, QueryClient } from "react-query"
import { getRecipes, useMeals } from "./api/services"
// styles & components
import Searchbar from "../UI/searchbar"
import Button from "../UI/button"
import Card from "../UI/card"
import { Wrapper, HeroCover, ContentGrid } from "../styles/Home.styles"
import { useContext, useEffect, useState } from "react"
import NotFound from "../UI/notFound/NotFound"
import { Loader } from "../UI/Loader/Loader"
import Drawer from "../UI/drawer/Drawer"
import { useInView } from "react-intersection-observer"
import { Context } from "../components/themeWrapper/ThemeWrapper"
import Switch from "../UI/themeSwitch/Switch"

export const getStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery("recipes", getRecipes)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const Home = (params) => {
  const [open, setOpen] = useState(false)
  const [transitionExit, setTransitionExit] = useState(false)
  const [favs, setFavs] = useState([])
  const [paramSearch, setParams] = useState({})
  const [ref, sticky] = useInView({
    threshold: 0.2,
  })
  // client side fetching
  const { data, isLoading, isError } = useMeals(paramSearch)
  const { theme, setContext } = useContext(Context)
  const [layout, setLayout] = useState("grid")

  // stateHandlers
  const handleSearch = (params) => {
    setParams(params)
  }

  const handleExit = () => {
    setTransitionExit(true)
    setTimeout(() => {
      setOpen(false)
      setTransitionExit(false)
    }, 500)
  }

  const favsHandler = (fav) => {
    const newFavs = [...favs]
    const index = newFavs.indexOf(fav)
    if (index === -1) {
      newFavs.push(fav)
    } else {
      newFavs.splice(index, 1)
    }
    setFavs(newFavs)
  }

  const checkFavs = (fav) => {
    const result = favs.find((f) => f.idMeal === fav)
    return result
  }

  const themeHandler = (arg) => {
    setContext(arg)
  }

  useEffect(() => {
    const savedfavs = JSON.parse(localStorage.getItem("favorites"))
    if (savedfavs) {
      setFavs(savedfavs)
    }
  }, [])

  useEffect(() => {
    const favlist = JSON.stringify(favs)
    localStorage.setItem("favorites", favlist)
  }, [favs])

  return (
    <Wrapper>
      <Drawer
        data={favs}
        transitionExit={transitionExit}
        handleExit={handleExit}
        handleFavs={favsHandler}
        open={open}
      />
      <header>
        <Platzi />
        <Switch theme={theme} onClick={themeHandler} className="theme-switch" />
      </header>
      <HeroCover>
        <Image
          src="/assets/chef.png"
          width="923"
          height="795"
          // layout="fill"
          alt="chef cocinando"
        />
        <h1>Looking for some meal inspiration for your daily basis?</h1>
        <div className="actions">
          <Searchbar searchHandler={handleSearch} />
          <div className="but-actions">
            <Button
              icon="fa-solid fa-shuffle"
              label="surpise me!"
              size="medium"
              variant="accent"
              onClick={() => {
                handleSearch({ type: "r" })
              }}
            />
            <Button
              icon="fa-solid fa-book"
              label="favorites"
              size="medium"
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
      </HeroCover>
      {data?.meals ? (
        <ContentGrid
          id="content"
          layout={layout === "list" ? "1fr" : "repeat(3, 1fr)"}
          ref={ref}
        >
          <div className="layout-switch">
            View as:
            <span>
              <i
                className={`fa-solid fa-grip ${
                  layout === "grid" ? "active" : ""
                }`}
                onClick={() => setLayout("grid")}
              />
              <i
                className={`fa-solid fa-list ${
                  layout === "list" ? "active" : ""
                }`}
                onClick={() => setLayout("list")}
              />
            </span>
          </div>
          <div id="content">
            {data?.meals?.map((recipe) => (
              <Card
                orientation={layout === "list" ? "hor" : "vert"}
                key={recipe.idMeal}
                data={recipe}
                isFav={checkFavs(recipe.idMeal)}
                handleFavourite={favsHandler}
              />
            ))}
          </div>
        </ContentGrid>
      ) : isLoading ? (
        <Loader />
      ) : (
        <NotFound />
      )}
      <footer>
        {sticky && (
          <Button
            label="favorites"
            icon="fa-solid fa-star"
            className="sticky-favs"
            onClick={() => setOpen(true)}
          />
        )}
        made with ☕️ by <a href="https://github.com/j-avila"> jose avila</a>
      </footer>
    </Wrapper>
  )
}

export default Home
