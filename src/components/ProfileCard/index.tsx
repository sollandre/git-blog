import axios from 'axios';
import { BsBoxArrowUpRight, BsGithub, BsFillBuildingFill, BsFillPeopleFill } from 'react-icons/bs'

import { useEffect, useState } from "react";
import { Avatar, DetailsContainer, ExternalLink, Footer, IconWithText, ProfileContainer, TitleContainer } from './styles';

interface Profile {
  login: string;
  id: number;
  name: string;
  avatar_url: string;
  url: string;
  company: string;
  bio: string;
  following: string;
}

export function ProfileCard() {

  const [profile, setProfile] = useState({} as Profile);
  const [error, setError] = useState({} as { message: string, details: any })

  useEffect(() => {
    (async () => {
      const { data, request } = await axios.get<Profile>('https://api.github.com/users/josepholiveira')

      if(!data){
        setError({ message: "No profile found", details: request });
      } else {
        setProfile(data)
      }
    })()
  }, [])

  return ( 
    <ProfileContainer>
      <Avatar src={profile.avatar_url} alt="" />
      <DetailsContainer>
        <div>
          <TitleContainer>
            <h1>{profile.name}</h1>
            <ExternalLink href={`https://github.com/${profile.login}`}>
              <span>GITHUB</span>
              <BsBoxArrowUpRight />
            </ExternalLink>
          </TitleContainer>
          <p>{profile.bio} Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
        </div>
        <Footer>
          <IconWithText>
            <BsGithub />
            <span>{profile.login}</span>
          </IconWithText>
          <IconWithText>
            <BsFillBuildingFill />
            <span>{profile.company}</span>
          </IconWithText>
          <IconWithText>
            <BsFillPeopleFill />
            <span>{profile.following}</span>
          </IconWithText>
        </Footer>
      </DetailsContainer>
      
    </ProfileContainer>
   );
}
