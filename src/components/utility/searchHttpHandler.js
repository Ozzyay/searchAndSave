const apiKey = ``;
const apiUrl = `https://www.googleapis.com/youtube/v3/search?`;

const searchHandler = async (data) => {
  const completeUrl =
    apiUrl +
    `key=${apiKey}` +
    `&q=${data}` +
    `&type=video&maxResults=25&part=snippet`;
  const response = await fetch(completeUrl, { mode: "cors" });
  try {
    const retrieved = await response.json();
    console.log(retrieved.items);
    return retrieved.items;
  } catch (error) {
    console.log(error);
  }
};

export default searchHandler;
