const getAccesToken = () => {
  return localStorage.getItem("acces_token");
};

const setAccesToken = (token: string) => {
  localStorage.setItem("acces_token", token);
};

const removeToken = () => {
  localStorage.removeItem("acces_token");
};

export default { getAccesToken, setAccesToken, removeToken };
