import url from "../utils/connectionUrl";
export const getUser = async () => {
  const userobj = await fetch(`${url}/api/auth/isAuthenticated`, {
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  });
  if (userobj.status !== 200) return JSON.parse(localStorage.getItem("user"));
  const user = await userobj.json();
  return user;
};
