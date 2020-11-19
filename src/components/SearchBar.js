import React, { useState } from 'react';

// Function Component with hooks
const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  // const onInputChange = event => {
  //   setTerm(event.target.value);
  // };

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Search for a video</label>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

// Class Component
//class SearchBar extends React.Component {
// state = { term: '' };
// onInputChange = event => {
//   this.setState({ term: event.target.value });
// };
// onFormSubmit = event => {
//   event.preventDefault();
//   this.props.onFormSubmit(this.state.term);
//   // To do - call callback from parent component
// };
//   render() {
//     return (
//       <div className="search-bar ui segment">
//         <form className="ui form" onSubmit={this.onFormSubmit}>
//           <div className="field">
//             <label>Video Search</label>
//             <input type="text" value={this.state.term} onChange={this.onInputChange} />
//           </div>
//         </form>
//       </div>
//     );
//   }
//}

export default SearchBar;
