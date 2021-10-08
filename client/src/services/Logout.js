export const logout = async () => {
  const result = await fetch("/api/auth/logout", {
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  });
  const json = await result.json();
  localStorage.removeItem("user");
  return json;
};
