import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';
// import { useEffect, useState } from 'react';
// import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const { id } = useParams();
  const [country, setCountry] = useState({});

  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
setErr(false);
    try {
      

      const fetchCountry = async () => {
        const item = await fetchCountry(id);
        console.log(item);
        setCountry(item);
      };
      fetchCountry();
    } catch (error) {
      setErr(true);
    } finally {
      setLoading(false);
    }
  }, [id]);

  return (
    <Section>
      <Container>
        {loading && <Loader />}
        {/* {err && <Heading>Error</Heading>} */}
        {country.length && <CountryInfo country={country} />}
        <h2>Country</h2>
      </Container>
    </Section>
  );
};
