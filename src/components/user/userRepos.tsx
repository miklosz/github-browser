import React from 'react'
import { IRepo } from '../../models/repo.model'
import styles from './user.module.css'

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
                <ListItem repo={repo}  key={repo.name} />
              )}
            </ul>
        </section>
    )
}

const ListItem = (props: { repo: IRepo }) => {
  const { name, description, html_url, language } = props.repo
  return (
    <li className={styles.repoListItem}>
      <a href={html_url} title="View repository on GitHub" target="_blank" rel="noopener noreferrer" >
        {name && 
          <h3>{name}</h3>
        }
        {description &&
          <p>{description}</p>
        }
        {language &&
          <p>{language}</p>
        }
      </a>
    </li>
  )
}

export default UserRepos