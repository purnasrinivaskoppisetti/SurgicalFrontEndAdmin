"use client";

import { X } from "lucide-react";

export default function InvoiceModal({
  order,
  setOpenInvoice,
}) {
  const formatCurrency = (value) =>
    `₹${Number(value || 0).toLocaleString(
      "en-IN"
    )}`;

  const fullAddress = [
    order?.shipping_address?.address_line1,
    order?.shipping_address?.address_line2,
    order?.shipping_address?.city,
    order?.shipping_address?.state,
    order?.shipping_address?.pincode,
    order?.shipping_address?.country,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <div className="fixed inset-0 z-[60] bg-black/70 flex items-center justify-center p-4">
      <div className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto">

        {/* Close */}
        <button
          onClick={() =>
            setOpenInvoice(false)
          }
          className="absolute top-4 right-4"
        >
          <X size={20} />
        </button>

        <div className="p-8">

          {/* HEADER */}
          <div className="border-b border-black pb-4">
            <h1 className="text-4xl font-bold">
              SURGICAL WORLD
            </h1>

            <p className="text-sm">
              Medical & Surgical Supplies
            </p>

            <p className="text-sm">
              Mumbai, Maharashtra
            </p>

            <p className="text-sm">
              +91 9498888888
            </p>
          </div>

          {/* TITLE */}
          <div className="text-center mt-6">
            <h2 className="text-2xl font-bold">
              TAX INVOICE
            </h2>
          </div>

          {/* CUSTOMER + INVOICE DETAILS */}
          <div className="grid grid-cols-2 gap-10 border-y border-black py-5 mt-5">

            {/* Customer Details */}
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
                {order?.shipping_address?.phone ||
                  "-"}
              </p>

              <p>
                <strong>Address:</strong>{" "}
                {fullAddress || "-"}
              </p>
            </div>

            {/* Invoice Details */}
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
                INV-
                {order?.order_number || "-"}
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
                {order?.payment_status ||
                  "-"}
              </p>
            </div>
          </div>

          {/* DETAILED BREAKUP */}
          <div className="mt-8">
            <h3 className="font-bold text-xl mb-3">
              Detailed Breakup
            </h3>

            <table className="w-full border-collapse border border-black">
              <thead>
                <tr>
                  <th className="border border-black p-2">
                    No.
                  </th>

                  <th className="border border-black p-2">
                    SKU
                  </th>

                  <th className="border border-black p-2 text-left">
                    Particulars
                  </th>

                  <th className="border border-black p-2">
                    Rate
                  </th>

                  <th className="border border-black p-2">
                    Units
                  </th>

                  <th className="border border-black p-2">
                    Amount
                  </th>
                </tr>
              </thead>

              <tbody>
                {order?.items?.map(
                  (item, index) => (
                    <tr
                      key={
                        item.order_item_id
                      }
                    >
                      <td className="border border-black p-2 text-center">
                        {index + 1}
                      </td>

                      <td className="border border-black p-2">
                        {item.product_sku}
                      </td>

                      <td className="border border-black p-2">
                        {
                          item.product_name
                        }
                      </td>

                      <td className="border border-black p-2 text-right">
                        {formatCurrency(
                          item.price
                        )}
                      </td>

                      <td className="border border-black p-2 text-center">
                        {
                          item.quantity
                        }
                      </td>

                      <td className="border border-black p-2 text-right">
                        {formatCurrency(
                          item.total
                        )}
                      </td>
                    </tr>
                  )
                )}

                {!order?.items?.length && (
                  <tr>
                    <td
                      colSpan={6}
                      className="border border-black p-4 text-center"
                    >
                      No products found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* TOTAL SECTION */}
          <div className="flex justify-end mt-8">
            <div className="w-[380px] border border-black">

              <div className="flex justify-between p-3 border-b border-black">
                <span>
                  Sub Total
                </span>

                <span>
                  {formatCurrency(
                    order?.pricing
                      ?.subtotal
                  )}
                </span>
              </div>

              <div className="flex justify-between p-3 border-b border-black">
                <span>GST</span>

                <span>
                  {formatCurrency(
                    order?.pricing
                      ?.gst
                  )}
                </span>
              </div>

              <div className="flex justify-between p-3 border-b border-black">
                <span>
                  Shipping
                </span>

                <span>
                  {formatCurrency(
                    order?.pricing
                      ?.shipping
                  )}
                </span>
              </div>

              <div className="flex justify-between p-3 border-b border-black">
                <span>
                  Discount
                </span>

                <span>
                  -
                  {formatCurrency(
                    order?.pricing
                      ?.discount
                  )}
                </span>
              </div>

              <div className="flex justify-between p-3 font-bold text-lg">
                <span>
                  Net Amount
                </span>

                <span>
                  {formatCurrency(
                    order?.pricing
                      ?.grand_total
                  )}
                </span>
              </div>

            </div>
          </div>

          {/* PAYMENT SUMMARY */}
          <div className="mt-10">

            <h3 className="font-bold text-xl mb-3">
              Payment Summary
            </h3>

            <table className="w-full border-collapse border border-black">

              <thead>
                <tr>
                  <th className="border border-black p-2">
                    Receipt No
                  </th>

                  <th className="border border-black p-2">
                    Date
                  </th>

                  <th className="border border-black p-2">
                    Time
                  </th>

                  <th className="border border-black p-2">
                    Method
                  </th>

                  <th className="border border-black p-2">
                    Status
                  </th>

                  <th className="border border-black p-2">
                    Amount
                  </th>
                </tr>
              </thead>

              <tbody>
                {order?.payment?.map(
                  (payment) => (
                    <tr
                      key={
                        payment.payment_id
                      }
                    >
                      <td className="border border-black p-2">
                        -
                      </td>

                      <td className="border border-black p-2">
                        -
                      </td>

                      <td className="border border-black p-2">
                        -
                      </td>

                      <td className="border border-black p-2">
                        {payment.method?.toUpperCase() ||
                          "-"}
                      </td>

                      <td className="border border-black p-2">
                        {payment.status ||
                          "-"}
                      </td>

                      <td className="border border-black p-2 text-right">
                        {formatCurrency(
                          payment.amount
                        )}
                      </td>
                    </tr>
                  )
                )}
              </tbody>

            </table>

          </div>

          {/* NOTES */}
          <div className="mt-10">
            <h3 className="font-bold">
              Notes
            </h3>

            <p className="mt-2 text-sm">
              Thank you for choosing
              Surgical World. Please
              keep this invoice for
              future reference.
            </p>
          </div>

          {/* SIGNATURE */}
          <div className="flex justify-between mt-20">

            <div className="text-center">
              <div className="border-t border-black w-48"></div>

              <p className="mt-2">
                Customer Signature
              </p>
            </div>

            <div className="text-center">
              <div className="border-t border-black w-48"></div>

              <p className="mt-2">
                Authorized Signatory
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}