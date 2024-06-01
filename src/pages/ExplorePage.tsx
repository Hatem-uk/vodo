import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

interface ExploreData {
  id: number;
}

const ExplorePage: React.FC = () => {
  const params: { explore: string } = useParams();
  const [pageNo, setPageNo] = useState<number>(1);
  const [data, setData] = useState<ExploreData[]>([]);
  const [totalPageNo, setTotalPageNo] = useState<number>(0);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params: {
          page: pageNo
        }
      });
      setData((prevData) => [
        ...prevData,
        ...response.data.results
      ]);
      setTotalPageNo(response.data.total_pages);
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setPageNo(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  useEffect(() => {
    setPageNo(1);
    setData([]);
    fetchData();
  }, [params.explore]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='py-16'>
      <div className='container mx-auto'>
        <h3 className='capitalize text-lg lg:text-xl font-semibold my-3'>Popular {params.explore} show</h3>
        <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start'>
          {data.map((exploreData, index) => (
            <Card data={exploreData} key={exploreData.id + "exploreSEction"} media_type={params.explore} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
