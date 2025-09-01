import { baseApi } from "./baseApi";

const businessApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // new
 getDasboard: builder.query({
      query: () => {
        return {
          url: `/saloons/dashboard`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    getAllCustomerOwner: builder.query({
      query: ({  page, limit, searchTerm }) => {
        return {
          url: `/bookings/list?searchTerm=${searchTerm}&page=${page}&limit=${limit}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

      getAllCustomerDashboard: builder.query({
      query: () => {
        return {
          url: `/bookings/list`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

      getAllBookingHistory: builder.query({
      query: ({ status, page, limit, searchTerm }) => {
        return {
          url: `/saloons/booking-history?status=${status}&searchTerm=${searchTerm}&page=${page}&limit=${limit}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

        getAllTreansactionOwner: builder.query({
      query: ({  page, limit, searchTerm }) => {
        return {
          url: `/saloons/transactions?searchTerm=${searchTerm}&page=${page}&limit=${limit}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    updateStatusOwner: builder.mutation({
      query: (data) => {
        return {
          url: `/saloons/manage-bookings`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    getAllBarberOwner: builder.query({
      query: ({ page, limit, searchTerm }) => {
        return {
          url: `/saloons/barbers?searchTerm=${searchTerm}&page=${page}&limit=${limit}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    getAllServicesOwner: builder.query({
      query: ({ page, limit, searchTerm }) => {
        return {
          url: `/services?searchTerm=${searchTerm}&page=${page}&limit=${limit}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

getAllShedualeBarber: builder.query({
  query: ({ page, limit, searchTerm, all }) => {
    if (all) {

      return {
        url: `/job-applications/hired-barbers?limit=999999`, 
        method: "GET",
      };
    }

    return {
      url: `/job-applications/hired-barbers?searchTerm=${searchTerm}&page=${page}&limit=${limit}`,
      method: "GET",
    };
  },
  providesTags: ["updateProfile"],
}),

    addBarberManagement: builder.mutation({
      query: (data) => {
        return {
          url: "/barber-schedules",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),
      
    updateServicesOwner: builder.mutation({
      query: ({ data, id }) => {
        return {
          url: `/services/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),
    deleteServicesOwner: builder.mutation({
      query: (id) => {
        return {
          url: `/services/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

        getSingleSheduale: builder.query({
      query: ({ id }) => {
        return {
          url: `/barber-schedules/${id}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    addServicesOwner: builder.mutation({
      query: (data) => {
        return {
          url: "/services",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    // old
    getBarberOwner: builder.query({
      query: ({ status, page, limit, searchTerm }) => {
        return {
          url: `/admin/saloons?status=${status}&searchTerm=${searchTerm}&page=${page}&limit=${limit}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    getSingleBarberOwner: builder.query({
      query: ({ id }) => {
        return {
          url: `/admin/saloon/${id}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    getAllBarber: builder.query({
      query: ({ page, limit, searchTerm }) => {
        return {
          url: `/admin/barbers?searchTerm=${searchTerm}&page=${page}&limit=${limit}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    getAllSubscriber: builder.query({
      query: ({ page, limit, searchTerm }) => {
        return {
          url: `/admin/subscribers?searchTerm=${searchTerm}&page=${page}&limit=${limit}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    getSingleAllBarber: builder.query({
      query: ({ id }) => {
        return {
          url: `/admin/barber/${id}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    getAllReports: builder.query({
      query: () => {
        return {
          url: `/support/reports`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    getAllSupport: builder.query({
      query: () => {
        return {
          url: `/support`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    getCustomer: builder.query({
      query: ({ status, page, limit, searchTerm }) => {
        return {
          url: `/admin/customers?status=${status}&searchTerm=${searchTerm}&page=${page}&limit=${limit}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    blockOwner: builder.mutation({
      query: ({ data, id }) => {
        return {
          url: `/admin/block-saloon/${id}`,
          method: "PATCH",
          body: { status: data },
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    updateSupport: builder.mutation({
      query: ({ data, id }) => {
        return {
          url: `/support/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    blockCustomer: builder.mutation({
      query: ({ data, id }) => {
        return {
          url: `/admin/block-customer/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),
    replyUser: builder.mutation({
      query: ({ data, id }) => {
        return {
          url: `/support/replies/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    getSingleReply: builder.query({
      query: ({ id }) => {
        return {
          url: `/support/reply-sent/${id}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    getSingleSupport: builder.query({
      query: ({ id }) => {
        return {
          url: `/support/support-sent/${id}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    getSubscription: builder.query({
      query: () => {
        return {
          url: `/subscription-plans`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    addSubscription: builder.mutation({
      query: (data) => {
        return {
          url: "/subscription-plans",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    updateSubscription: builder.mutation({
      query: ({ data, id }) => {
        return {
          url: `/subscription-plans/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    getAddPromotion: builder.query({
      query: () => {
        return {
          url: `/ads`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    addAddpromotion: builder.mutation({
      query: (formData) => {
        return {
          url: "/ads",
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    updateAddPromotion: builder.mutation({
      query: ({ formData, id }) => {
        return {
          url: `/ads/${id}`,
          method: "PATCH",
          body: formData,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    deleteAddPromotion: builder.mutation({
      query: (id) => {
        return {
          url: `/ads/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    getFaq: builder.query({
      query: () => {
        return {
          url: `/faqs`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    AddFaq: builder.mutation({
      query: (formData) => {
        return {
          url: "/faqs",
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    updateFaq: builder.mutation({
      query: ({ data, id }) => {
        return {
          url: `/faqs/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    deleteFaq: builder.mutation({
      query: (id) => {
        return {
          url: `/faqs/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    getProfile: builder.query({
      query: () => {
        return {
          url: `/users/me`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    updateProfileData: builder.mutation({
      query: (data) => {
        return {
          url: `/users/update-profile`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    updateProfileImage: builder.mutation({
      query: (data) => {
        return {
          url: `/users/update-profile-image`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    getPrivecy: builder.query({
      query: () => {
        return {
          url: `/privacy-policy`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    AddPrivecy: builder.mutation({
      query: (data) => {
        return {
          url: "/privacy-policy",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    updatePrivecy: builder.mutation({
      query: ({ data, id }) => {
        return {
          url: `/privacy-policy/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    updateTerms: builder.mutation({
      query: ({ data, id }) => {
        return {
          url: `/terms-&-conditions/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    getTerms: builder.query({
      query: () => {
        return {
          url: `/terms-&-conditions`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    AddTerms: builder.mutation({
      query: (data) => {
        return {
          url: "/terms-&-conditions",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    getAllAdminAccess: builder.query({
      query: () => {
        return {
          url: `/accesses-provide`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    getAllAccessFunctions: builder.query({
      query: () => {
        return {
          url: `/access-functions`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    AddAdminProvide: builder.mutation({
      query: (data) => {
        return {
          url: "/accesses-provide",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    deleteAdminAccess: builder.mutation({
      query: (id) => {
        return {
          url: `/accesses-provide/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    updateAccessFunction: builder.mutation({
      query: (data) => {
        return {
          url: `/accesses-provide`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),
  }),
});

export const {
  useGetBarberOwnerQuery,
  useGetSingleReplyQuery,
  useBlockOwnerMutation,
  useGetAllReportsQuery,
  useReplyUserMutation,
  useGetCustomerQuery,
  useGetAllBarberQuery,
  useBlockCustomerMutation,
  useAddSubscriptionMutation,
  useGetSubscriptionQuery,
  useUpdateSubscriptionMutation,
  useAddAddpromotionMutation,
  useGetAddPromotionQuery,
  useUpdateAddPromotionMutation,
  useDeleteAddPromotionMutation,
  useGetFaqQuery,
  useAddFaqMutation,
  useUpdateFaqMutation,
  useDeleteFaqMutation,
  useGetProfileQuery,
  useUpdateProfileDataMutation,
  useUpdateProfileImageMutation,
  useAddPrivecyMutation,
  useGetPrivecyQuery,
  useAddTermsMutation,
  useGetTermsQuery,
  useUpdatePrivecyMutation,
  useUpdateTermsMutation,
  useGetAllAdminAccessQuery,
  useAddAdminProvideMutation,
  useUpdateAccessFunctionMutation,
  useDeleteAdminAccessMutation,
  useGetAllAccessFunctionsQuery,
  useGetSingleBarberOwnerQuery,
  useGetAllSupportQuery,
  useGetSingleSupportQuery,
  useUpdateSupportMutation,
  useGetSingleAllBarberQuery,
  useGetAllSubscriberQuery,
  //new
  useGetAllCustomerOwnerQuery,
  useGetAllBarberOwnerQuery,
  useGetAllServicesOwnerQuery,
  useUpdateServicesOwnerMutation,
  useDeleteServicesOwnerMutation,
  useAddServicesOwnerMutation,
  useUpdateStatusOwnerMutation,
  useGetAllShedualeBarberQuery,
  useGetSingleShedualeQuery,
 useAddBarberManagementMutation,
 useGetDasboardQuery,
 useGetAllTreansactionOwnerQuery,
 useGetAllBookingHistoryQuery,
 useGetAllCustomerDashboardQuery
} = businessApi;
