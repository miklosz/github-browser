import React, { useEffect } from 'react'

interface IUserReposProps  {
  reposUrl : string,
  reposCount: number
}

const UserRepos = (props : IUserReposProps) => {
  // useEffect with dispatch to fetch user repos here

    return (
        <section className="repositories">
            <h2>Public repositiories ({props.reposCount})</h2>
            <ul>
              <li>
                <a href="repo-url">
                  <h3>Repo name</h3>
                  <p>Repo description</p>
                  <p>Additional infos</p>
                </a>
              </li>
            </ul>
            
        </section>
    )
}

export default UserRepos