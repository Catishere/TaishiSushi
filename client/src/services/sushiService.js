import url from "../utils/connectionUrl";

export const addSushi = (sushiData) => {
  return fetch(`${url}/api/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(sushiData),
  }).then((res) => res.json());
};

export const getSushi = (sushiData) => {
  return fetch(`${url}/api/`, {
    method: "GET",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(sushiData),
  }).then((res) => res.json());
};

export const getSushiType = (sushiType) => {
  return fetch(`${url}/api/menu/${sushiType}`, {
    method: "GET",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => res.json());
};

export const getSushiDetails = (sushiId) => {
  return fetch(`${url}/api/menu/details/${sushiId}`, {
    method: "GET",
    headers: { "Content-type": "application-json", Accept: "application/json" },
  }).then((res) => res.json());
};

export const pushToCart = async (sushi, userId, qty) => {
  const test = { ...sushi, userId, qty };
  const res = await fetch(`${url}/api/menu/add-to-cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(test),
  });
  return await res.json();
};

export const getUserCart = (userId) => {
  return fetch(`${url}/api/menu/get-cart/${userId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => res.json());
};

export const deleteFromCart = (sushiId, userId) => {
  console.log(sushiId, userId);
  return fetch(`${url}/api/menu/delete-from-cart`, {
    method: "POST",
    headers: { "Content-type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ sushiId, userId }),
  }).then((res) => res.json());
};

export const getQty = (title) => {
  return fetch();
};
