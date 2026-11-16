import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import cookies from "js-cookie";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    prepareHeaders: (headers) => {
      const token = cookies.get("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
        headers.set("accept", "application/json");
      }
      return headers;
    },
  }),
  tagTypes: [
    "admin-profile",
    "db-auth",
    "price-list",
    "notification",
    "product-mng",
    "setting-acount",
    "setting-faq",
    "setting-term",
    "setting-privacy",
    "setting-return-policy",
    "setting-password-change",
    "costing-activity",
    "location-api",
    "admin-supplier",
    "admin-inventory",
    "admin-contact",
    "admin-customer",
    "admin-staff",
    "admin-payment-info",
    "admin-account-info",
    // ------ppppppppppppp----------
    "admin-all-employees",
    "admin-attendence-employees",
    "admin-employee-details",
    // --------pppppppp----------
    "admin-collector",
    "admin-customer-sale",
    "admin-dashboard-home",
    "admin-cash-sales",
    "admin-archive-customer",
    "admin-due-order",
    "admin-retial-product-mng",
    "admin-retial-order",
    "admin-categories",
    "admin-brands",
    "admin-colors",
    "admin-sizes",
    "admin-order-permision",
    "admin-bank-check",
    "admin-cost-category",
    "admin-assign-shop",
    "admin-collection-details",
    "collector-db-collector-details",
    "admin-archive-supplier",

    // supplier
    "supplier-dashboard-home",
    "supplier-account-info",
    "all-supplierDb-notification",

    // customer
    "customer-dashboard-home",
    "customer-dashboard-order",
    "customer-dashboard-order-history",
    "customer-dashboard-price-list",
    "customer-dashboard-account-info",
    "customer-dashboard-profile",
    "all-customerDb-notification",

    // collector
    "collector-dashboard-home",
    "all-collectorDb-notification",

    // web page dynamic
    "website-navbar",
    "web_page_dynamic_review",
    "web_page_dynamic_footer",
    "web_page_dynamic_home_banner",
    "web_page_dynamic_home_about",
    "web_page_dynamic_about_banner",
    "web_page_dynamic_about_meet",
    "web_page_dynamic_contact",
    // website page
    "web_products_page",
    "web_contact_user",
    "web_page_order_schedule",
  ],
  endpoints: (builder) => ({
    getTermsAndConditions: builder.query({
      query: () => ({
        url: `dynamic-pages/terms-and-conditions`,
        method: "GET",
      }),
      providesTags: ["setting-term"],
    }),
    updateTermsAndConditions: builder.mutation({
      query: (updateInfo) => ({
        url: `dynamic-pages/admin/terms-and-conditions`,
        method: "PATCH",
        body: updateInfo,
      }),
      invalidatesTags: ["setting-term"],
    }),

    getPrivacyPolicy: builder.query({
      query: () => ({
        url: `dynamic-pages/privacy-policy`,
        method: "GET",
      }),
      providesTags: ["setting-privacy"],
    }),
    updatePrivacyPolicy: builder.mutation({
      query: (updateInfo) => ({
        url: `dynamic-pages/admin/privacy-policy`,
        method: "PATCH",
        body: updateInfo,
      }),
      invalidatesTags: ["setting-privacy"],
    }),

    getReturnPolicy: builder.query({
      query: () => ({
        url: `dynamic-pages/return-policy`,
        method: "GET",
      }),
      providesTags: ["setting-return-policy"],
    }),
    updateReturnPolicy: builder.mutation({
      query: (updateInfo) => ({
        url: `dynamic-pages/admin/return-policy`,
        method: "PATCH",
        body: updateInfo,
      }),
      invalidatesTags: ["setting-return-policy"],
    }),
  }),
});

export const {
  useGetTermsAndConditionsQuery,
  useUpdateTermsAndConditionsMutation,
  useGetPrivacyPolicyQuery,
  useUpdatePrivacyPolicyMutation,
  useGetReturnPolicyQuery,
  useUpdateReturnPolicyMutation,
} = baseApi;
