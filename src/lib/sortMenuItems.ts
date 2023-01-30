import { Book } from "@/types";
import { normaliseString } from ".";

type kvMenuItem = {
  key: string;
  value: any[];
};

// given an array of categories and an array of books
// return an object that looks like { categoryfoo: [...booksFoo], categorybar: [...booksBar] }
// sorted in decending order

export const sortMenuItems = (books: Book[], categories: string[]) => {
  // create array with menu items
  const menuItemsList: any = [];
  const categoryDictionary: any = {};

  // loop through categories and push the category and it's respective array to the menu items
  for (const name of categories) {
    const category = normaliseString(name);

    menuItemsList.push({
      key: category,
      value: [
        ...books.filter((book) => {
          return book.categories[0] === name;
        }),
      ],
    });

    // create an index for the categories and their normalised counterparts
    categoryDictionary[category] = name;
  }

  // sort menu items by their value array length
  let sortedArr = menuItemsList.sort((a: kvMenuItem, b: kvMenuItem) => {
    return b.value.length - a.value.length;
  });

  // create menu data object with sorted items and the sorted categories array
  const menuData: any = {};
  const sortedCategories = [];

  for (let i in sortedArr) {
    menuData[sortedArr[i].key] = sortedArr[i].value;
    sortedCategories.push(categoryDictionary[sortedArr[i].key]);
  }

  return { menuData, sortedCategories };
};
