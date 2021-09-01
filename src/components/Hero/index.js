
import { Navbar } from '../Navbar';

import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './styles';

export function Hero(){
  return(
    <HeroContainer>
      <Navbar />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Pizza Ever</HeroH1>
          <HeroP>Pronto em 60 segundos</HeroP>
          <HeroBtn>Faça a encomenda</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}