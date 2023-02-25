const apiConfig={
    baseUrl:'https://api.themoviedb.org/3/',
    apiKey:'8006a3f95cb3c9fac668f63ef9d5cb63',
    imgOriginal:(imgPath)=>`https://image.tmdb.org/t/p/original/${imgPath}`,
    imgW500:(imgPath)=>`https://image.tmdb.org/t/p/w500/${imgPath}`
}
export default apiConfig;