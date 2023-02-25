import httpRequest from "./httpRequest";
import apiConfig from "./apiConfig";
export const category = {
  movie: "movie",
  tv: "tv",
};
export const movieType = {
  upcoming: "upcoming",
  toprate: "top_rated",
  popular: "popular",
};
export const tvType = {
  top_rated: "top_rated",
  on_the_air: "on_the_air",
  popular: "popular",
};
const tmdbApi = {
  getMovieList: (type) => {
    const url = "movie/" + movieType[type];
    return httpRequest.get(url, {
      params: {
        api_key: apiConfig.apiKey,
        language: "en-US",
        page: 1,
      },
    });
  },
  getTvList: (type) => {
    const url = "tv/" + tvType[type];
    return httpRequest.get(url, {
      params: {
        api_key: apiConfig.apiKey,
        language: "en-US",
      },
    });
  },
  getMovieSeries: (type,params) => {
    const url = "movie/" + movieType[type];
    return httpRequest.get(url, params);
  },
  getTvSeries: (type,params) => {
    const url = "tv/" + tvType[type];
    return httpRequest.get(url, params);
  },
  getVideos: (cate, id) => {
    // const url=`${category[type]}/${id}/videos`;
    const url = category[cate] + "/" + id + "/videos";
    return httpRequest.get(url, {
      params: {
        api_key: apiConfig.apiKey,
        language: "en-US",
      },
    });
  },
  search: (cate, params) => {
    const url = "search/" + category[cate];
    return httpRequest.get(url, params);
  },
  detail: (cate, id) => {
    const url = category[cate] + "/" + id;
    return httpRequest.get(url, {
      params: {
        api_key: apiConfig.apiKey,
        language: "en-US",
      }
    });
  },
  similar:(cate, id) => {
    const url = category[cate] + '/' + id + '/similar';
    return httpRequest.get(url, {
      params: {
        api_key: apiConfig.apiKey,
        language: "en-US",
      }
    });
  },
  credits: (cate, id) => {
    const url = category[cate] + "/" + id + "/credits";
    return httpRequest.get(url, { params: {
      api_key: apiConfig.apiKey,
        language: "en-US",
    } });
  },
};
export default tmdbApi;
