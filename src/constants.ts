export const BASE_URL = 'https://jsonplaceholder.typicode.com';
export const USERS_URL = `${BASE_URL}/users`;
export const POSTS_URL = `${BASE_URL}/posts`;
export const COMMENTS_URL = `${BASE_URL}/comments`;
export const MOCK_IMAGE_URL = 'https://i.pravatar.cc/150?img=';

export const ROUTES = {
  HOME: '/',
  PORTFOLIO: (id: number) => `/portfolio/${id}`,
};

export const COLOURS = {
  DARK_BLUE: "#001C2F",
  WHITE: "#FFFFFF",
  GREEN: "#0FB56C",
  GREY: "#f5f5f5",
  DARK_GREY: "#666666",
  RED: "red"
}