async function apiSearch(searchTerm) {
  const netlifyFunctionURL = "/.netlify/functions/search";
  const options = {
    method: 'GET',
    body: {
      searchTerm: searchTerm
    }
  };

  const response = await fetch(netlifyFunctionURL, options);
  const data = await response.json();

  console.log(data);
}