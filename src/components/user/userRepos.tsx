import React from 'react'
import { IRepo } from '../../models/repo.model'

interface IUserReposProps  {
  reposCount: number,
  repos: IRepo[] | undefined
}

const UserRepos = (props : IUserReposProps) => {
  const { repos, reposCount } = props
  return (
        <section className="repositories">
            <h2>Public repositiories ({reposCount})</h2>
            <ul>
              { repos && repos.length > 0 && repos.map((repo: IRepo) =>
                <ListItem repo={repo} />
              )}
            </ul>
        </section>
    )
}

const ListItem = (props: { repo: IRepo }) => {
  const { name, description, html_url, language, updated } = props.repo
  return (
    <li>
      <a href={html_url} title="View repository on GitHub" >
        <h3>{name}</h3>
        <p>{description}</p>
        {language &&
          <p>{language}</p>
        }
        <p>{updated}</p>
      </a>
    </li>
  )
}

export default UserRepos