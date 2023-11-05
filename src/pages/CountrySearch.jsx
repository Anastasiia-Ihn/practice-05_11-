import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [query, setQuery] = useState('');
  console.log(query);
  const [searchCountry, setSearchCountry] = useState([]);

  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
setErr(false);
    if (!query) {
      return;
    }

    try {
      

      const getCountry = async () => {
        const region = await fetchByRegion(query);
        console.log(region);
        setSearchCountry(region);
      };
      getCountry();
    } catch (error) {
      setErr(true);
    } finally {
      setLoading(false);
    }
  }, [query]);

  const onSubmit = query => {
    setQuery(query);
  };

  return (
    <Section>
      <Container>
        {loading && <Loader />}
        {err && <Navigate to = '/' replace/>}
        <SearchForm onSubmit={onSubmit} />
        {searchCountry.length && <CountryList countries={searchCountry} />}
      </Container>
    </Section>
  );
};
