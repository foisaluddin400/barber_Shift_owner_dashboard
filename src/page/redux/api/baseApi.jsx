import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//sdf
const baseQuery = fetchBaseQuery({
  baseUrl: "https://barber-shift-app-4n3k.vercel.app/api/v1",
  // prepareHeaders: (headers) => {
  //   const token = JSON.parse(localStorage.getItem("accessToken"));
  //   if (token) {
  //     headers.set("Authorization", `${token}`);
  //   }
  //   return headers;
  // },
  prepareHeaders: (headers, { getState }) => {
    const token = getState().logInUser.token;
    
    console.log("from baseApi", token);
    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});


export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["overview", "host"],
  endpoints: () => ({}),
});

export const imageUrl = "https://barber-shift-app-4n3k.vercel.app/api/v1";
export const SOCKET_BASE = "https://10.10.20.26:6000";
// asdfsf