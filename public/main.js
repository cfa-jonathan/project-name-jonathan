async function apiSearch(searchTerm) {
  const netlifyFunctionURL = "/.netlify/functions/search";
  const options = {
    method: 'POST',
    body: JSON.stringify({
      searchTerm: searchTerm
    })
  };

  const response = await fetch(netlifyFunctionURL, options);
  const data = await response.json();

  console.log(data);
}
apiSearch("terrier");