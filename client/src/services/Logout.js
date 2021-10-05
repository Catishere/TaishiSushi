export const logout = async () => {
  const result = await fetch("/auth/logout");
  const json = await result.json();
  localStorage.removeItem("user");
  return json;
};
