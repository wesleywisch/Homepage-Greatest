import { useState } from 'react';

import { Navbar } from '../Navbar';
import { Sidebar } from '../Sidebar';

import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './styles';

export function Hero(){
  const [isOpen, setIsOpen] = useState(false);

  function toggle(){
    setIsOpen(!isOpen);
  }

  return(
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
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