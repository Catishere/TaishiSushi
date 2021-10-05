export const getUser = async () => {
  const userobj = await fetch("/auth/isAuthenticated");
  if (userobj.status !== 200) return JSON.parse(localStorage.getItem("user"));
  const user = await userobj.json();
  return user;
};
