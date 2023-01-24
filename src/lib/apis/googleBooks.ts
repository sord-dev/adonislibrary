// TODO GET a list of volumes from your google account's bookshelf
// massage the data in the list so you don't need to look at all the ugly extra code they send down. (keep the title, description, id for key, publisher, avr rating, thumbnail small and med)

export const GoogleBooksAPIProvider = {
  getBookShelf: async function (userId: string, bookshelfId: string) {
    const APIKEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY || null;
    if (!APIKEY) throw Error("Please provide a google api key");

    const processQuery = (userId: string, bookshelfId: string) =>
      `https://www.googleapis.com/books/v1/users/${userId}/bookshelves/${bookshelfId}/volumes?key=${APIKEY}`;

    try {
      const partialRes = await fetch(processQuery(userId, bookshelfId));
      const res = await partialRes.json();
      const items = this.sanitiseGoogleList(res.items);
      return items;
    } catch (error) {
      console.log(error);
    }
  },

  sanitiseGoogleList : function (list: Array<Object>) {
    const cleanList = list.map((item: any) => {
      const id = item.id,
        title = item.volumeInfo?.title || null,
        description = item.volumeInfo?.description || null,
        categories = item.volumeInfo?.categories || null,
        images = item.volumeInfo?.imageLinks || null,
        authors = item.volumeInfo?.authors || null;
  
      return {
        id,
        title,
        description,
        categories,
        images,
        authors
      };
    });
  
    return cleanList;
  }
};
