"use client";

import {
    useCallback,
    useState,
} from "react";

import {
    getOrders,
    getOrderDetails,
    updateOrderStatus,
} from "@/services/order.service";

export default function useOrders() {
    const [orders, setOrders] =
        useState([]);

    const [loading, setLoading] =
        useState(false);

    const [
        selectedOrderDetails,
        setSelectedOrderDetails,
    ] = useState(null);

    const [
        detailsLoading,
        setDetailsLoading,
    ] = useState(false);

    const [pagination, setPagination] =
        useState({
            current_page: 1,
            total_pages: 1,
            has_previous: false,
            has_next: false,
            page_size: 20,
            total: 0,
        });

    const [summary, setSummary] =
        useState({
            total_orders: 0,
            revenue: 0,
            pending: 0,
            in_transit: 0,
            delivered: 0,
            cancelled: 0,
        });

    const fetchOrders = useCallback(
        async ({
            page = 1,
            page_size = 20,
            search = "",
            status = "",
            payment_status = "",
        } = {}) => {
            try {
                setLoading(true);

                const response =
                    await getOrders({
                        page,
                        page_size,
                        search,
                        status,
                        payment_status,
                    });

                const data =
                    response?.data || {};

                const ordersData =
                    data.orders || [];

                setOrders(ordersData);

                setSummary(
                    data.summary || {
                        total_orders: 0,
                        revenue: 0,
                        pending: 0,
                        in_transit: 0,
                        delivered: 0,
                        cancelled: 0,
                    }
                );

                const apiPagination =
                    data.pagination || {};

                const currentPage =
                    apiPagination.current_page ||
                    apiPagination.page ||
                    page;

                const pageSize =
                    apiPagination.page_size ||
                    page_size;

                const total =
                    apiPagination.total ||
                    ordersData.length;

                const totalPages =
                    apiPagination.total_pages ||
                    Math.max(
                        1,
                        Math.ceil(
                            total / pageSize
                        )
                    );

                setPagination({
                    current_page:
                        currentPage,

                    total_pages:
                        totalPages,

                    has_previous:
                        apiPagination.has_previous ??
                        currentPage > 1,

                    has_next:
                        apiPagination.has_next ??
                        currentPage <
                            totalPages,

                    page_size:
                        pageSize,

                    total:
                        total,
                });

                return response;
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        },
        []
    );

    const fetchOrderDetails =
        useCallback(
            async (orderId) => {
                try {
                    setDetailsLoading(
                        true
                    );

                    const response =
                        await getOrderDetails(
                            orderId
                        );

                    setSelectedOrderDetails(
                        response?.data ||
                            null
                    );

                    return response?.data;
                } catch (error) {
                    console.error(
                        error
                    );
                } finally {
                    setDetailsLoading(
                        false
                    );
                }
            },
            []
        );

    const handleUpdateOrderStatus =
        useCallback(
            async (
                orderId,
                status
            ) => {
                try {
                    await updateOrderStatus(
                        orderId,
                        status
                    );

                    const latestOrder =
                        await getOrderDetails(
                            orderId
                        );

                    setSelectedOrderDetails(
                        latestOrder?.data ||
                            null
                    );

                    setOrders(
                        (prev) =>
                            prev.map(
                                (
                                    order
                                ) =>
                                    order.id ===
                                    orderId
                                        ? {
                                              ...order,
                                              status,
                                          }
                                        : order
                            )
                    );

                    return latestOrder;
                } catch (error) {
                    console.error(
                        error
                    );
                }
            },
            []
        );

    return {
        orders,
        loading,
        pagination,
        summary,
        fetchOrders,

        selectedOrderDetails,
        detailsLoading,
        fetchOrderDetails,

        handleUpdateOrderStatus,
    };
}