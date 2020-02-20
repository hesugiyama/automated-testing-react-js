import React, { useState } from 'react';

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
      repoItem => repoItem != repo
    ));
  };

  return (
    <form 
    onSubmit={handleSubmit}
    data-testid="new-repo-form"
    >
      <input 
        data-testid="new-repo-input"
        type="text"
        value={newRepo}
        onChange={e => setNewRepo(e.target.value)}
      />
      <button type="submit">Save</button>
      <ul>
        {repositories.map(repo =>
          <li data-testid={repo} key={repo}>
            { repo }
            <button data-testid="remove-button" onClick={() => removeRepo(repo)}>Remove</button>
          </li>
        )}
      </ul>
    </form>
  )
}

export default RepoListHooks;