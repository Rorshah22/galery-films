import { useSelector } from 'react-redux';

import Preloader from './preloader';

import Film from './film';

const Gallery = () => {
  document.title = 'The movie gallery';

  const { data, isLoaded } = useSelector((state) => state.gallery);

  const element = data.map((item) => {
    return <Film key={item.id} item={item} />;
  });

  return (
    <section className="galery-films">
      {isLoaded ? <Preloader /> : element}
    </section>
  );
};

export default Gallery;
