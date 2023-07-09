import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import News from '../components/news/News';
import { getLatestNews } from '../redux/slices/testSlice';

const LatestNews = () => {
  const { latestNews, latestNewsError } = useSelector(store => store.test);
  const dispatch = useDispatch();

  let isFirstRender = true;
  useEffect(() => {
    if (isFirstRender) {
      dispatch(getLatestNews());
      isFirstRender = false;
    }
  }, []);

  return (
    <div>
      {latestNews && (
        <News news={latestNews} error={latestNewsError} title='Latest News' />
      )}
    </div>
  );
};

export default LatestNews;
