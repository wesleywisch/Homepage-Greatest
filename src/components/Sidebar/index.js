
import { 
  SidebarContainer, 
  Icon, 
  CloseIcon, 
  SidebarMenu, 
  SidebarLink, 
  SidebarBtnWrap, 
  SidebarRoute,
} from './styles';

export function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/'>Pizzas</SidebarLink>
        <SidebarLink to='/'>Sobremesas</SidebarLink>
        <SidebarLink to='/'>Menu completo</SidebarLink>
      </SidebarMenu>
      <SidebarBtnWrap>
        <SidebarRoute to='/'>Peça agora</SidebarRoute>
      </SidebarBtnWrap>
    </SidebarContainer>
  );
}