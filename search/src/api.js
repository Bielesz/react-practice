import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 9jfI00oSbmMkuO7YxyaNjusjhU-pWKS5FXM0BjG4oPE",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
