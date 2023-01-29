export const GoogleBooksAPIProvider = {
  // get user bookshelf based on userid and bookshelfid
  getBookShelf: async function (userId: string, bookshelfId: string) {
    const APIKEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY || null;
    if (!APIKEY) throw Error("Please provide a google api key");

    const processQuery = (userId: string, bookshelfId: string) =>
      `https://www.googleapis.com/books/v1/users/${userId}/bookshelves/${bookshelfId}/volumes?key=${APIKEY}&maxResults=50`;
    try {
      const partialRes = await fetch(processQuery(userId, bookshelfId));
      const res = await partialRes.json();
      const items = this._sanitiseGoogleList(res.items);
      return items;
    } catch (error) {
      console.log(error);
      return [];
    }
  },

  _sanitiseGoogleList: function (list: Array<Object>) {
    const cleanList = list.map((item: any) => {
      const id = item.id,
        title = item.volumeInfo?.title || null,
        description = item.volumeInfo?.description || null,
        categories = item.volumeInfo?.categories || null,
        authors = item.volumeInfo?.authors || null,
        images = item.volumeInfo?.imageLinks || null,
        infoLink = item.volumeInfo?.infoLink || null;

      return {
        id,
        title,
        description,
        categories,
        images,
        authors,
        infoLink,
      };
    });

    return cleanList;
  },
};
