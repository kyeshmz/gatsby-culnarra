import React from 'react'
import Layout from '../components/layout/layout'
import { ColorBar } from '../components/layout/ColorBar'
import { Abstract } from '../components/single/Abstract'

const Card = () =>{
   return(
      <Layout>
         <ColorBar></ColorBar>
         <Abstract></Abstract>
      </Layout>
   )
}

export default Card;