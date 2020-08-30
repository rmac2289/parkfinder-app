import TokenService from "./TokenService";
import config2 from "../config2";

const CommentsApiService = {
  getComments() {
    return fetch(`${config2.API_ENDPOINT}/comments`, {
      headers: {},
    }).then((response) => {
      if (!response.ok) {
        return response.json().then((e) => Promise.reject(e));
      }
      return response.json();
    });
  },
  postComment(subject, comment, park_name) {
    return fetch(`${config2.API_ENDPOINT}/comments`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        subject,
        comment,
        park_name,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default CommentsApiService;
