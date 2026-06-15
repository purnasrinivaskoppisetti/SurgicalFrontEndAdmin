"use client";

import { useEffect, useState } from "react";

import AllOrders from "@/components/orders/Allorders";
import OrderDetailsDrawer from "@/components/orders/orderdetails/OrderDetails";
import Pagination from "@/components/common/Pagination";

import useOrders from "@/hooks/orders/useOrders";

export default function OrdersPage() {
    const {
        orders,
        loading,
        pagination,
        summary,

        fetchOrders,

        selectedOrderDetails,
        detailsLoading,
        fetchOrderDetails,

        handleUpdateOrderStatus,
    } = useOrders();

    const [page, setPage] = useState(1);

    const [search, setSearch] = useState("");

    const [deliveryFilter, setDeliveryFilter] =
        useState("All deliveries");

    const [paymentFilter, setPaymentFilter] =
        useState("All payments");

    const [openOrderDetails, setOpenOrderDetails] =
        useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchOrders({
                page,
                page_size: 20,
                search,
                status: deliveryFilter,
                payment_status: paymentFilter,
            });
        }, 500);

        return () => clearTimeout(timer);
    }, [
        page,
        search,
        deliveryFilter,
        paymentFilter,
        fetchOrders,
    ]);

    useEffect(() => {
        setPage(1);
    }, [
        search,
        deliveryFilter,
        paymentFilter,
    ]);

    const handleOpenOrderDetails = async (
        order
    ) => {
        setOpenOrderDetails(true);

        await fetchOrderDetails(order.id);
    };

    return (
        <>
            <AllOrders
                orders={orders}
                loading={loading}
                summary={summary}
                pagination={pagination}

                search={search}
                setSearch={setSearch}

                deliveryFilter={deliveryFilter}
                setDeliveryFilter={
                    setDeliveryFilter
                }

                paymentFilter={paymentFilter}
                setPaymentFilter={
                    setPaymentFilter
                }

                onOrderClick={
                    handleOpenOrderDetails
                }
            />

            <Pagination
                loading={loading}
                page={page}
                setPage={setPage}
                pagination={pagination}
                totalItems={pagination?.total || 0}
            />

            <OrderDetailsDrawer
                open={openOrderDetails}
                setOpen={setOpenOrderDetails}
                order={selectedOrderDetails}
                loading={detailsLoading}
                handleUpdateOrderStatus={
                    handleUpdateOrderStatus
                }
            />
        </>
    );
}