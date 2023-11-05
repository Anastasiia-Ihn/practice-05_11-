import {
  CountryWrapper,
  CountryDescription,
  Flag,
  Image,
  CountryTitle,
  CountryCapital,
  CountryDetail,
  Accent,
} from './CountryInfo.styled';

export const CountryInfo = ({
country: {  flag,
  capital,
  country,
  languages = [],
  population,}
}) => {
  return (
    <>
    <CountryWrapper >
      <Flag>
        <Image src ={flag }/>
      </Flag>
      <CountryDescription>
        <CountryCapital>
          Capital: <Accent>{capital }</Accent>
        </CountryCapital>

        <CountryTitle>{ country}</CountryTitle>

        <CountryDetail>
          Population: <Accent>{ population}</Accent>
        </CountryDetail>

        <CountryDetail>
          Languages: <Accent> { languages.join(', ')}</Accent>
        </CountryDetail>
      </CountryDescription>
      </CountryWrapper>
      </>
  );
};
