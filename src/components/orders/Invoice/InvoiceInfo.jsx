export default function InvoiceInfo({
    order,
    fullAddress,
}) {
    return (
        <>
            {/* HEADER */}
            <div className="border-b border-slate-400 pb-4">
                <h1 className="text-xl font-bold">
                    SURGICAL WORLD
                </h1>

                <p className="text-xs">
                    Medical & Surgical Supplies
                </p>

                <p className="text-xs">
                    Mumbai, Maharashtra
                </p>

                <p className="text-xs">
                    +91 9498888888
                </p>
            </div>

            {/* TITLE */}
            <div className="text-center mt-1">
                <h2 className="text-xl font-bold">
                    TAX INVOICE
                </h2>
            </div>

            {/* CUSTOMER + INVOICE DETAILS */}
            <div className="grid grid-cols-2 gap-10 border-y border-slate-400 py-5 mt-1">
                <div>
                    <h3 className="font-bold text-lg mb-3">
                        Customer Details
                    </h3>

                    <p>
                        <strong>Name:</strong>{" "}
                        {order?.customer?.name || "-"}
                    </p>

                    <p>
                        <strong>Email:</strong>{" "}
                        {order?.customer?.email || "-"}
                    </p>

                    <p>
                        <strong>Phone:</strong>{" "}
                        {order?.shipping_address?.phone || "-"}
                    </p>

                    <p>
                        <strong>Address:</strong>{" "}
                        {fullAddress || "-"}
                    </p>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-3">
                        Invoice Details
                    </h3>

                    <p>
                        <strong>Order No:</strong>{" "}
                        {order?.order_number || "-"}
                    </p>

                    <p>
                        <strong>Invoice No:</strong>{" "}
                        INV-{order?.order_number || "-"}
                    </p>

                    <p>
                        <strong>Invoice Date:</strong>{" "}
                        {order?.order_date
                            ? new Date(
                                  order.order_date
                              ).toLocaleDateString(
                                  "en-IN"
                              )
                            : "-"}
                    </p>

                    <p>
                        <strong>Status:</strong>{" "}
                        {order?.status || "-"}
                    </p>

                    <p>
                        <strong>Payment Status:</strong>{" "}
                        {order?.payment_status || "-"}
                    </p>
                </div>
            </div>
        </>
    );
}