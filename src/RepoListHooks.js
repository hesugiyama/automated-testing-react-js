import React, { useState } from 'react';

function RepoListHooks() {
  const [repositories, setRepositories] = useState([]);
  const [newRepo, setNewRepo] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setRepositories([...repositories, newRepo]);
    setNewRepo('');
  }
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
      <button type="submit">Salvar</button>
      <ul>
        {repositories.map(repo =>
          <li key={repo}>{ repo }</li>
        )}
      </ul>
    </form>
  )
}

export default RepoListHooks;