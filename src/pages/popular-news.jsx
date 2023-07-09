import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import News from '../components/news/News';
import { getPopularNews } from '../redux/slices/testSlice';
const PopularNews = () => {
  const popularNews = useSelector(store => store.test.popularNews);
  const popularNewsError = useSelector(store => store.test.popularNewsError);
  const dispatch = useDispatch();
  let isFirstRender = true;
  useEffect(() => {
    if (isFirstRender) {
      dispatch(getPopularNews());
      isFirstRender = false;
    }
  }, []);

  return (
    <div>
      <News news={popularNews} error={popularNewsError} title='Popular News' />
    </div>
  );
};

export default PopularNews;
