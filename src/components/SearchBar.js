import {useState} from 'react';
import './SearchBar.css';

function SearchBar({onSubmit}) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
    // console.log(event.target.value); For debugging purposes
  };

  return (
    <div className="search-bar mt-3 mb-3">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;

// function SearchBar({onSubmit}) {
//   const handleClick = () => {
//     onSubmit('cars');
//   };

//   return (
//     <div>
//       <input />
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// }

// export default SearchBar;
