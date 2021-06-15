import React from "react"
import styled from "styled-components"
import big from "../assets/images/big.jpg"
import { StaticImage } from "gatsby-plugin-image"

const Images = () => {
    return (
        <Wrapper>
            <article>
                <h4>constraint / default</h4>
                <StaticImage
                 src="../assets/images/recipe-1.jpeg"
                 alt="food"
                 height={400}
                 placeholder="tracedVSG"
                 layout="constrained"
                 classname="example-img"
                 as="section"/>
            </article>
        </Wrapper>
    )
}

const Wrapper = styled.section`
 width: 70 vw;
 margin: 0 auto;
 article{
     border: 2px solid red;
 }.example-img {
     border-radius: 
 }
`


export default Images
