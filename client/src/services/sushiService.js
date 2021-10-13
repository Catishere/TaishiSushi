import url from "../utils/connectionUrl";

export const addSushi = async (sushiData) => {
  const res = await fetch(`${url}/api/sushi/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(sushiData),
  });
  return await res.json();
};

export const getSushiType = async (sushiType) => {
  const res = await fetch(`${url}/api/menu/${sushiType}`, {
    method: "GET",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  });
  return await res.json();
};

export const getSushiDetails = async (sushiId) => {
  const res = await fetch(`${url}/api/menu/details/${sushiId}`, {
    method: "GET",
    headers: { "Content-type": "application-json", Accept: "application/json" },
  });
  return await res.json();
};

export const getMultiSushiDetails = async (sushis) => {
  let fetchURL = new URL(`${url}/api/menu/details`);
  fetchURL.search = new URLSearchParams(sushis).toString();
  const res = await fetch(fetchURL, {
    method: "GET",
    headers: { "Content-type": "application-json", Accept: "application/json" },
  });
  return await res.json();
};

export const pushToCart = async (sushiId, userId, qty) => {
  const res = await fetch(`${url}/api/cart/${userId}/${sushiId}/${qty}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  });
  return await res.json();
};

export const getUserCart = async (userId) => {
  const res = await fetch(`${url}/api/cart/${userId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  });
  return await res.json();
};

export const deleteFromCart = async (sushiId, userId) => {
  const res = await fetch(`${url}/api/cart/${userId}/${sushiId}`, {
    method: "DELETE",
    headers: { "Content-type": "application/json", Accept: "application/json" },
  });
  return await res.json();
};

export const updateInCart = async (sushi, userId) => {
  const res = await fetch(`${url}/api/cart/${userId}/${sushi._id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json", Accept: "application/json" },
    body: JSON.stringify(sushi),
  });
  return await res.json();
};
