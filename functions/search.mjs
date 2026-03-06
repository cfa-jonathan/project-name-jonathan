export default async function search(req) {
  try {
    const reqData = JSON.parse(req.body);
    // const searchTerm = ;
    console.log(reqData);

    const endpointURL = `http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${tag}&api_key=${APIKey}&format=json`;
    const options = {
      method: "GET"
    };

    const response = await fetch(endpointURL, options);
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Could not complete fetch call",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
