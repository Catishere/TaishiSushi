const uri = `${process.env.URL || "http://localhost"}:${
  process.env.PORT || process.env.REACT_APP_PORT
}/`;

export const addSushi = (sushiData) => {
  return fetch(`${uri}api/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(sushiData),
  }).then((res) => res.json());
};

export const getSushi = (sushiData) => {
  return fetch(`${uri}api/`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(sushiData),
  }).then((res) => res.json());
};

export const getSushiType = (sushiType) => {
  return fetch(`${uri}api/menu/${sushiType}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

export const getSushiDetails = (sushiId) => {
  return fetch(`${uri}api/menu/details/${sushiId}`, {
    method: "GET",
    headers: { "Content-type": "application-json" },
  }).then((res) => res.json());
};

export const pushToCart = async (sushi, userId, qty) => {
  const test = { ...sushi, userId, qty };
  const res = await fetch(`${uri}api/menu/add-to-cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(test),
  });
  return await res.json();
};

export const getUserCart = (userId) => {
  return fetch(`${uri}api/menu/get-cart/${userId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

export const deleteFromCart = (sushiId, userId) => {
  console.log(sushiId, userId);
  return fetch(`${uri}api/menu/delete-from-cart`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ sushiId, userId }),
  }).then((res) => res.json());
};

export const getQty = (title) => {
  return fetch();
};
