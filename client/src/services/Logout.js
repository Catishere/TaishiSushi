export const logout = async () => {
  const result = await fetch("/api/auth/logout");
  const json = await result.json();
  localStorage.removeItem("user");
  return json;
};
