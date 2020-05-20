import React from 'react'
import Layout from '../../components/layout/layout'

export const Cards = () =>{
   return(
     <Layout>


       <style jsx>{`
            @use "include-media";

            .header-logo {
               max-width: 432px;
               margin-left: auto;
               margin-right: auto;
               text-align:center;
            }
            `}
         </style>
     </Layout>
   )
}
export default Cards;
