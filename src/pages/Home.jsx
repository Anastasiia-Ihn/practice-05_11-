import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  
  

  useEffect(() => {
  setLoading(true)
  try {
setErr(false)

    const fetchCountries = async () => {
      const listCountries = await getCountries();
      console.log(listCountries);
      setCountries(listCountries)
      
    }
    fetchCountries()
  } catch (error) {
    setErr(true)
    
  } finally {
    setLoading(false)
  }

  
}, []);



  return (
    <Section>
      <Container>
       
        {loading && <Loader />}
        {err && <Heading>Error</Heading>}
        {countries.length && < CountryList countries={countries} />}
        
      </Container>
    </Section>
  );
};
