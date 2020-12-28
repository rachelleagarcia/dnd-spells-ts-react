import React, { useCallback, useState } from 'react';
import Title from '../components/Title';
import MainPageLayout from '../components/MainPageLayout';
import CardGrid from '../components/CardGrid';
import { apiGet } from '../utils';
import { useLastQuery } from '../hooks/useLastQuery';

const renderResults = (results: string) => {
  if (results && results.length === 0) {
    return <>No results</>;
  }

  if (results && results.length > 0) {
    return (
      <div>
        <CardGrid data={results} />
      </div>
    );
  }

  return null;
};

const Home = () => {
  const [input, setInput] = useLastQuery();
  const [results, setResults] = useState('');

  const onSearch = () => {
    apiGet(`spells/?name=${input}`).then((result) => {
      setResults(result.results);
    });
  };

  const onInputChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setInput(e.currentTarget.value);
    },
    [setInput]
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <MainPageLayout>
      <Title title="Find a" highlight="spell" styles="font-light inline pr-1" />
      <div>
        <i className="fas fa-search icon"></i>
        <input
          type="text"
          onChange={onInputChange}
          onKeyDown={onKeyDown}
          value={input}
        />
      </div>
      {renderResults(results)}
    </MainPageLayout>
  );
};

export default Home;
