import {createSlice} from "@reduxjs/toolkit";

const categoriesList = [
    {id: 1, title: "Whey protein", img: "/category1.jpg", link: "fertilizer"},
    {id: 2, title: "Caseine", img: "/category2.jpg", link: "protective"},
    {id: 3, title: "NAtural", img: "/category3.jpg", link: "planting"},
    {id: 4, title: "Creatine", img: "/category4.jpg", link: "tools"},
    {id: 5, title: "Testosterone", img: "/category5.jpg", link: "pots"},
];

const categoriesSlice = createSlice({
    name: "categories",
    initialState: categoriesList,
    reducers: {},
    selectors: {
        allCategoriesSelector: state => state,
        categoryNamesSelector: state => {
            return state.map(category => {
                return {title: category.title, link: category.link};
            });
        }
    }
})

export const selectCategoryName = (link) => (state) =>
    state.categories.find((category) => category.link === link).title;

export const { allCategoriesSelector, categoryNamesSelector } = categoriesSlice.selectors
export default categoriesSlice.reducer;