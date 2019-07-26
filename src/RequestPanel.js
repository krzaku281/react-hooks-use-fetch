import React, { useState } from 'react';
import useFetch from './hooks/useFetch';

function RequestPanel() {
  const getRandomUrl = () => 'https://jsonplaceholder.typicode.com/todos/' + ~~(Math.random() * 100);
  const [url, setUrl] = useState(getRandomUrl());
  const [data, loading, error] = useFetch(url);

  return (
    <div className="request-panel">
      <input type="button" value="Make new request" onClick={() => setUrl(getRandomUrl())} />
        Data: {JSON.stringify(data)} <br />
        Loading: {loading.toString()} <br />
        Error:  {error ? 'true' : 'false'}
    </div>
  );
}

export default RequestPanel;
