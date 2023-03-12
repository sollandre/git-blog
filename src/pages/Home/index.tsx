import { ArticleCard } from "../../components/ArticleCard";
import { ProfileCard } from "../../components/ProfileCard";
import { SearchBar } from "../../components/SearchBar";
import { ArticleCardList } from "./styles";

export function Home() {
  return ( 
    <>
      <ProfileCard />
      <div style={{marginTop: '4.5rem'}}>
        <SearchBar />
      </div>
      <ArticleCardList>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </ArticleCardList>
    </>
   );
}

