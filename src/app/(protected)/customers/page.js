"use client";

import { useState } from "react";

import Customers from "../../../components/customers/Allcustomers";
import CustomersTable from "../../../components/customers/CustomerTable";
import CustomerDetailsDrawer from "../../../components/customers/CustomerDetails";
import Pagination from "@/components/common/Pagination";

import useCustomers from "@/hooks/customers/useCustomers";

export default function CustomersPage() {
  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);

  const {
    customers,
    summary,
    pagination,
    loading,

    selectedCustomer,
    fetchCustomerDetails,
    clearSelectedCustomer,
  } = useCustomers(
    page,
    search
  );

  return (
    <div className="space-y-6">
      <Customers summary={summary} />

      <CustomersTable
        customers={customers}
        search={search}
        setSearch={setSearch}
        loading={loading}
        onCustomerClick={(customer) =>
          fetchCustomerDetails(
            customer.id
          )
        }
      />

      <Pagination
        loading={loading}
        page={page}
        setPage={setPage}
        pagination={pagination}
        totalItems={pagination?.total || 0}
      />

      <CustomerDetailsDrawer
        customer={selectedCustomer}
        onClose={clearSelectedCustomer}
      />
    </div>
  );
}