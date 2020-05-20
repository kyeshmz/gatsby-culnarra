import React from 'react'
import { FaInstagram as Instagram, FaFacebookF as Facebook, FaTwitterSquare as Twitter } from "react-icons/fa";

export const Icon = () => {
   getIcon = () => {
      const { name } = this.props
      switch (name) {
        case 'instagram':
          return <Instagram />
          break;
        case 'facebook':
          return <Facebook />
          break;
        case 'twitter':
          return <Twitter />
          break;
        default:
          break;
      }
    }
    return (
      <div className='icon-wrap'>
        {this.getIcon()}
        <style jsx>{`
      
          .icon-wrap{
            width: auto;
            height: 100%;
            max-width: 100px;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }
        `}</style>
      </div>
    )
}
