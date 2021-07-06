import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGallery } from '../store/actions';
import Preloader from './preloader';

import Film from './film';

const Gallery = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGallery());
  }, [dispatch]);

  const { data, isLoaded } = useSelector((state) => state.gallery);

  const element = data.map((item) => {
    return (
      <Film
        key={item.id}
        image={item.poster_path}
        title={item.title}
        vote={item.vote_average}
        date={item.release_date}
      />
    );
  });

  return (
    <section className="galery-films">
      {isLoaded ? <Preloader /> : element}
    </section>
  );
};

export default Gallery;
