import React from 'react';
import { useSelector } from 'react-redux';
import BannerHome from '../components/BannerHome';
import Card from '../components/Card';
import HorizontalScollCard from '../components/HorizontalScollCard';
import useFetch from '../hooks/useFetch';

interface MovieOrTVShow {
  id: number;
}

const Home: React.FC = () => {
  const trendingData = useSelector((state: any) => state.movieoData.bannerData);
  const { data: nowPlayingData } = useFetch<MovieOrTVShow[]>('/movie/now_playing');
  const { data: topRatedData } = useFetch<MovieOrTVShow[]>('/movie/top_rated');
  const { data: popularTvShowData } = useFetch<MovieOrTVShow[]>('/tv/popular');
  const { data: onTheAirShowData } = useFetch<MovieOrTVShow[]>('/tv/on_the_air');

  return (
    <div>
      <BannerHome />
      <HorizontalScollCard data={trendingData} heading={"Trending"} trending={true} />
      <HorizontalScollCard data={nowPlayingData} heading={"Now Playing"} media_type={"movie"} />
      <HorizontalScollCard data={topRatedData} heading={"Top Rated Movies"} media_type={"movie"} />
      <HorizontalScollCard data={popularTvShowData} heading={"Popular TV Show"} media_type={"tv"} />
      <HorizontalScollCard data={onTheAirShowData} heading={"On The Air"} media_type={"tv"} />
    </div>
  );
};

export default Home;
