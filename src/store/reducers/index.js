import * as actionTypes from '../actions/actionTypes';

const initialState = {
    users: [
        {
            id: '1590883965154u',
            name: 'Ahmed Adel',
            email: 'ahmed@gmail.com',
            password: '12345678',
            followings: [],
            followers: [],
        },
    ],
    blogs: [
        {
            id: 1590694359956,
            title: 'Top 10 JS Tips & Tricks',
            body:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, cum temporibus eveniet, reiciendis deserunt dolor fugiat saepe non ab omnis animi sapiente, eum laudantium nulla modi. Itaque labore debitis consequatur!',
            tags: ['JS'],
            cover: 'img/10js.jpeg',
        },
        {
            id: 1690694359956,
            title: 'Top 10 JS Tips & Tricks',
            body:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, cum temporibus eveniet, reiciendis deserunt dolor fugiat saepe non ab omnis animi sapiente, eum laudantium nulla modi. Itaque labore debitis consequatur!',
            tags: ['JS'],
            cover: 'img/10js.jpeg',
        },
        {
            id: 1790694359956,
            title: 'Top 10 JS Tips & Tricks',
            body:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, cum temporibus eveniet, reiciendis deserunt dolor fugiat saepe non ab omnis animi sapiente, eum laudantium nulla modi. Itaque labore debitis consequatur!',
            tags: ['JS'],
            cover: 'img/10js.jpeg',
        },
    ],
    pageSize: 2,
    activePage: 1,
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_BLOGS:
            return {
                ...state,
            };

        case actionTypes.ADD_BLOG:
            return {
                ...state,
                blogs: state.blogs.concat({
                    id: action.blogData.id,
                    title: action.blogData.title,
                    body: action.blogData.body,
                    tags: action.blogData.tags,
                    cover: action.blogData.cover?.path,
                }),
            };

        case actionTypes.EDIT_BLOG:
            return {
                ...state,
                blogs: state.blogs.map((blog) =>
                    blog.id === parseInt(action.blogData.id)
                        ? {
                              ...blog,
                              id: action.blogData.id,
                              title: action.blogData.title,
                              body: action.blogData.body,
                              tags: action.blogData.tags,
                              cover: action.blogData.cover?.path,
                          }
                        : blog
                ),
            };

        case actionTypes.DELETE_BLOG:
            return {
                ...state,
                blogs: state.blogs.filter(
                    (blog) => blog.id !== parseInt(action.blogData.id)
                ),
            };

        case actionTypes.CHANGE_PAGE:
            return {
                ...state,
                activePage: action.blogData.activePage,
            };

        case actionTypes.REGISTER_USER_ACCOUNT:
            return {
                ...state,
                users: state.users.concat()({
                    id: action.blogData.id,
                    name: action.blogData.name,
                    email: action.blogData.email,
                    password: action.blogData.password,
                }),
            };

        case actionTypes.LOGIN_USER_ACCOUNT:
            return {
                ...state,
            };

        default:
            return state;
    }
}
