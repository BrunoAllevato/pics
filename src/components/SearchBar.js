import {useState} from 'react';

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
    <div>
      <form onSubmit={handleFormSubmit}>
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
