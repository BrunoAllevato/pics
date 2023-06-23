import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    // console.log('Do a search with', term);
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div className="container">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
