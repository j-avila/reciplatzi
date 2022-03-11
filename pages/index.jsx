import Head from "next/head"
import Script from "next/script"
import Platzi from "../public/assets/platzi.svg"
import { Wrapper, HeroCover } from "./index.styles"
import Image from "next/image"

const Home = () => {
  return (
    <>
      <Script
        src="https://kit.fontawesome.com/acc0890c64.js"
        crossorigin="anonymous"
      />
      <Wrapper>
        <header>
          <Platzi />
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
        </HeroCover>
      </Wrapper>
    </>
  )
}

export default Home
