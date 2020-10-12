import React from 'react'

export interface IUserImage {
    imageUrl : string,
    imageAlt : string
}

const UserImage = (props : IUserImage) => {
    const { imageUrl, imageAlt } = props
    return <img src={imageUrl} alt={imageAlt} />
}
  
export default UserImage