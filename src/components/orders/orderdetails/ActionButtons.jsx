import {
    Package,
    Truck,
    CheckCircle,
    XCircle,
    FileText,
    Bike,
} from "lucide-react";

import toast from "react-hot-toast";

export default function ActionButtons({
    order,
    setOpenInvoice,
    handleUpdateOrderStatus,
}) {
    const status =
        order?.status?.toLowerCase() || "";

    const updateStatus = async (
        newStatus,
        message
    ) => {
        try {
            await handleUpdateOrderStatus(
                order.id,
                newStatus
            );

            toast.success(message);
        } catch (error) {
            console.error(error);

            toast.error(
                "Failed to update order status"
            );
        }
    };

    return (
        <div className="grid grid-cols-2 gap-3 pb-8">
            {/* PACKED */}
            <button
                onClick={() =>
                    updateStatus(
                        "packed",
                        "Order marked as packed"
                    )
                }
                disabled={
                    !["pending", "confirmed"].includes(
                        status
                    )
                }
                className="h-9 bg-white border border-slate-200 rounded-xl shadow-sm flex items-center justify-center gap-3 text-xs font-semibold disabled:opacity-50"
            >
                <Package size={15} />
                Mark packed
            </button>

            {/* SHIPPED */}
            <button
                onClick={() =>
                    updateStatus(
                        "shipped",
                        "Order marked as shipped"
                    )
                }
                disabled={
                    status !== "packed"
                }
                className="h-9 bg-white border border-slate-200 rounded-xl shadow-sm flex items-center justify-center gap-3 text-xs font-semibold disabled:opacity-50"
            >
                <Truck size={15} />
                Mark shipped
            </button>

            {/* OUT FOR DELIVERY */}
            <button
                onClick={() =>
                    updateStatus(
                        "out_for_delivery",
                        "Order marked as out for delivery"
                    )
                }
                disabled={
                    status !== "shipped"
                }
                className="h-9 bg-white border border-slate-200 rounded-xl shadow-sm flex items-center justify-center gap-3 text-xs font-semibold disabled:opacity-50"
            >
                <Bike size={15} />
                Out for delivery
            </button>

            {/* DELIVERED */}
            <button
                onClick={() =>
                    updateStatus(
                        "delivered",
                        "Order delivered successfully"
                    )
                }
                disabled={
                    status !==
                    "out_for_delivery"
                }
                className="h-9 bg-white border border-slate-200 rounded-xl shadow-sm flex items-center justify-center gap-3 text-xs font-semibold disabled:opacity-50"
            >
                <CheckCircle size={15} />
                Delivered
            </button>

            {/* CANCEL */}
            <button
                onClick={() =>
                    updateStatus(
                        "cancelled",
                        "Order cancelled successfully"
                    )
                }
                disabled={
                    status ===
                    "cancelled" ||
                    status === "delivered"
                }
                className="h-9 bg-white border border-slate-200 rounded-xl shadow-sm flex items-center justify-center gap-3 text-xs font-semibold text-red-500 disabled:opacity-50"
            >
                <XCircle size={15} />
                Cancel
            </button>

            {/* INVOICE */}
            <button
                onClick={() =>
                    setOpenInvoice(true)
                }
                className="h-9 bg-white border border-slate-200 rounded-xl shadow-sm flex items-center justify-center gap-3 text-xs font-semibold"
            >
                <FileText size={15} />
                Invoice
            </button>
        </div>
    );
}