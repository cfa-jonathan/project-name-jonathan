export default async function search(req) {
  try {
    const reqData = await req.body.json();
    const searchTerm = reqData.searchTerm;

    const endpointURL = `https://api.thedogapi.com/v1/breeds/search?q=${searchTerm}`;
    const options = {
      method: "GET",
      headers: {
        Authentication: "secret",
        "x-api-key": Netlify.env.get("SECRET_API_KEY")
      }
    };

    const response = await fetch(endpointURL, options);
    const data = await response.json();

    return new Response(
      JSON.stringify(data),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
  catch (error) {
    return new Response(
      JSON.stringify({
        error: "Could not complete fetch call"
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}