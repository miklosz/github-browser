import React from 'react'
import UserImage from '../shared/UserImage'
import { IUser } from '../../models/user.model';

const UserDetails = (props: { data: IUser }) => {
  const {
      name,
      login,
      avatar_url,
      location,
      html_url,
      followers,
      following,
      public_repos,

  } = props.data

  return (
      <>
          <h1 title="Name">{name}</h1>
          <h2 title="Username">{login}</h2>
          <UserImage imageUrl={avatar_url} imageAlt={`${login}'s avatar`} />
          { location &&
              <p>Location: {location}</p>
          }
          <a href={html_url} title="Go to github.com to view full profile" >
              Full profile on GitHub
          </a>
      </>

  )
}

export default UserDetails