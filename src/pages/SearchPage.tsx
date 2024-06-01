import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../components/Card';

interface SearchResult {
  id: number;
  media_type: string;
  // Add other properties as needed
}

const SearchPage: React.FC = () => {
  const location = useLocation();
  const [data, setData] = useState<SearchResult[]>([]);
  const [page, setPage] = useState<number>(1);
  const navigate = useNavigate();

  const query: string | undefined = location?.search?.slice(3);

  const fetchData = async () => {
    try {
      const response = await axios.get<{ results: SearchResult[] }>(`search/multi`, {
        params: {
          query: location?.search?.slice(3),
          page: page
        }
      });
      setData((prevData) => [
        ...prevData,
        ...response.data.results
      ]);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    if (query) {
      setPage(1);
      setData([]);
      fetchData();
    }
  }, [location?.search]);

  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    if (query) {
      fetchData();
    }
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='py-16'>
      <div className='lg:hidden my-2 mx-1 sticky top-[70px] z-30'>
        <input 
          type='text'
          placeholder='Search here...'
          onChange={(e) => navigate(`/search?q=${e.target.value}`)}
          value={query?.split("%20")?.join(" ")}
          className='px-4 py-1 text-lg w-full bg-white rounded-full text-neutral-900 '
        />
      </div>
      <div className='container mx-auto'>
        <h3 className='capitalize text-lg lg:text-xl font-semibold my-3'>Search Results</h3>
        <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start'>
          {data.map((searchData, index) => (
            <Card data={searchData} key={searchData.id + "search"} media_type={searchData.media_type} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
