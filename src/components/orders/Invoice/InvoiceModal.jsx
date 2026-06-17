"use client";
 
import { useRef } from "react";
import { X } from "lucide-react";
 
import InvoiceInfo from "./InvoiceInfo";
import ProductsTable from "./ProductsTable";
import TotalSection from "./TotalSection";
import PaymentSummary from "./PaymentSummary";
import InvoiceFooter from "./InvoiceFooter";
 
export default function InvoiceModal({
    order,
    setOpenInvoice,
}) {
    const invoiceRef = useRef(null);
 
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
            <div className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto">
 
                <button
                    onClick={() =>
                        setOpenInvoice(false)
                    }
                    className="absolute top-4 right-4"
                >
                    <X size={20} />
                </button>
                <div
                    ref={invoiceRef}
                    className="p-8 bg-white"
                >
                    <InvoiceInfo
                        order={order}
                        fullAddress={fullAddress}
                        invoiceRef={invoiceRef}
                    />
 
                    <ProductsTable
                        items={order?.items}
                        formatCurrency={
                            formatCurrency
                        }
                    />
 
                    <TotalSection
                        pricing={order?.pricing}
                        formatCurrency={
                            formatCurrency
                        }
                    />
 
                    <PaymentSummary
                        payments={order?.payment}
                        formatCurrency={
                            formatCurrency
                        }
                    />
 
                    <InvoiceFooter />
                </div>
            </div>
        </div>
    );
}
 