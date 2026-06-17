"use client";

import { Download } from "lucide-react";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";

export default function InvoiceInfo({
    order,
    fullAddress,
    invoiceRef,
}) {
    const handleDownloadInvoice = async () => {
        if (!invoiceRef?.current) return;

        try {
            const dataUrl = await toPng(
                invoiceRef.current,
                {
                    cacheBust: true,
                    pixelRatio: 2,
                    backgroundColor: "#ffffff",

                    // Exclude download button from PDF
                    filter: (node) => {
                        return !node.classList?.contains(
                            "download-btn"
                        );
                    },
                }
            );

            const pdf = new jsPDF(
                "p",
                "mm",
                "a4"
            );

            const imgProps =
                pdf.getImageProperties(
                    dataUrl
                );

            const pdfWidth = 210;
            const pdfHeight =
                (imgProps.height *
                    pdfWidth) /
                imgProps.width;

            let heightLeft =
                pdfHeight;

            let position = 0;

            pdf.addImage(
                dataUrl,
                "PNG",
                0,
                position,
                pdfWidth,
                pdfHeight
            );

            heightLeft -= 297;

            while (heightLeft > 0) {
                position =
                    heightLeft -
                    pdfHeight;

                pdf.addPage();

                pdf.addImage(
                    dataUrl,
                    "PNG",
                    0,
                    position,
                    pdfWidth,
                    pdfHeight
                );

                heightLeft -= 297;
            }

            pdf.save(
                `Invoice-${
                    order?.order_number ||
                    "Invoice"
                }.pdf`
            );
        } catch (error) {
            console.error(
                "PDF Download Error:",
                error
            );
        }
    };

    return (
        <>
            {/* HEADER */}
            <div className="relative border-b border-black pb-4">
                {/* DOWNLOAD BUTTON */}
                <button
                    onClick={
                        handleDownloadInvoice
                    }
                    className="download-btn absolute top-0 right-0 h-8 w-8 rounded-full border border-slate-300 bg-white hover:bg-slate-100 flex items-center justify-center"
                >
                    <Download size={16} />
                </button>

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
            <div className="grid grid-cols-2 gap-10 border-y border-black py-5 mt-1">
                <div>
                    <h3 className="font-bold text-base mb-1">
                        Customer Details
                    </h3>

                    <div className="text-xs">
                        <p>
                            <strong>
                                Name:
                            </strong>{" "}
                            {
                                order?.customer
                                    ?.name
                            }
                        </p>

                        <p>
                            <strong>
                                Email:
                            </strong>{" "}
                            {
                                order?.customer
                                    ?.email
                            }
                        </p>

                        <p>
                            <strong>
                                Phone:
                            </strong>{" "}
                            {
                                order
                                    ?.shipping_address
                                    ?.phone
                            }
                        </p>

                        <p>
                            <strong>
                                Address:
                            </strong>{" "}
                            {
                                fullAddress
                            }
                        </p>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-base mb-3">
                        Invoice Details
                    </h3>

                    <div className="text-xs">
                        <p>
                            <strong>
                                Order No:
                            </strong>{" "}
                            {order?.order_number ||
                                "-"}
                        </p>

                        <p>
                            <strong>
                                Invoice No:
                            </strong>{" "}
                            INV-
                            {order?.order_number ||
                                "-"}
                        </p>

                        <p>
                            <strong>
                                Invoice
                                Date:
                            </strong>{" "}
                            {order?.order_date
                                ? new Date(
                                      order.order_date
                                  ).toLocaleDateString(
                                      "en-IN"
                                  )
                                : "-"}
                        </p>

                        <p>
                            <strong>
                                Status:
                            </strong>{" "}
                            {order?.status ||
                                "-"}
                        </p>

                        <p>
                            <strong>
                                Payment
                                Status:
                            </strong>{" "}
                            {order?.payment_status ||
                                "-"}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}