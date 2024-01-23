const getStorer = (rememberMe: boolean) => {
  return rememberMe ? localStorage : sessionStorage;
};

const TOKEN_KEY = "token";

const webTokenStorer = {
  saveToken: (
    access_token: string,
    society_id: number,
    house_unique_id: number,
    user_role: string,
    rememberMe: boolean
  ) => {
    const storer = getStorer(rememberMe);
    const data = {
      access_token,
      society_id,
      house_unique_id,
      user_role,
    };
    storer.setItem(TOKEN_KEY, JSON.stringify(data));
  },

  removeToken: () => {
    localStorage.clear();
    sessionStorage.clear();
  },

  getToken: () => {
    const data =
      localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  },

  checkRememberMe: () => {
    return localStorage.getItem(TOKEN_KEY) ? true : false;
  },

  changeCommunity: function (society_id: number, house_unique_id: number) {
    const data = this.getToken();
    if (data) {
      const storer = getStorer(this.checkRememberMe());
      data.society_id = society_id;
      data.house_unique_id = house_unique_id;
      storer.setItem(TOKEN_KEY, JSON.stringify(data));
      console.log("Token updated:", data);
    } else {
      console.error("Token not found");
    }
  },
};

export default webTokenStorer;
