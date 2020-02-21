import React, {useState, useEffect} from 'react';

function RepoListHooks() {
  const [repositories, setRepositories] = useState([]);
  const [newRepo, setNewRepo] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setRepositories([...repositories, newRepo]);
    setNewRepo('');
  };

  function removeRepo(repo) {
    setRepositories(repositories.filter(
      repoItem => repoItem !== repo
    ));
  };

  useEffect(() => {
    setRepositories(['NodeJS']);
  }, []);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        id="new-repo-form"
      >
        <input
          id="new-repo-input"
          type="text"
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
      <ul id="list">
        {repositories.map(repo =>
          <li id={repo} key={repo}>
            {repo}
            <button id={repo + "-remove-button"} onClick={() => removeRepo(repo)}>Remove</button>
          </li>
        )}
      </ul>
    </>
  )
}

export default RepoListHooks;