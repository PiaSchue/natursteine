import React from "react"
import styles from "./about.module.css"
import Header from "../components/header"
import Container from "../components/container"

const Aboutblock = props => (
    <div className={styles.aboutblock}>
      <img src={props.aboutimg} className={styles.aboutimg} alt="" />
      <div className={styles.aboutdescription}>
        <h5 className={styles.infos}>{props.infos}</h5>
      </div>
    </div>
  )

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Header headerText="About Gatsby" />
      <p>Such wow. Very React.</p>
      <Container>
        <h1>About Container</h1>
        <Aboutblock
            infos="Hier steht etwas wichtiges."
            aboutimg="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-daniel-xavier-1102341.jpg"
        />
        <Aboutblock
            infos="Hier steht ebenfalls etwas wichtiges."
            aboutimg="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-daniel-xavier-1102341.jpg"
        />
      </Container>
    </div>
  )
}