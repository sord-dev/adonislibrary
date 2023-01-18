

const IdExtractYtURL = ( url : any) => {
  const YouTubeRegex =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;

    return url.match(YouTubeRegex)[7];
};

export { IdExtractYtURL };
