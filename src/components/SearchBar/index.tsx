import { SearchBarInput, TitleContainer } from "./styles";

export function SearchBar() {
  return (
    <section>
      <TitleContainer>
        <h2>Publicações</h2>
        <span>X publicações</span>
      </TitleContainer>
      <SearchBarInput type='text' placeholder="Search content" />
    </section> 
   );
}
