export default function InvoiceFooter() {
    return (
        <>
            <div className="mt-6">
                <h3 className="font-bold">
                    Notes
                </h3>

                <p className="mt-2 text-xs">
                    Thank you for choosing
                    Surgical World. Please
                    keep this invoice for
                    future reference.
                </p>
            </div>

            <div className="flex justify-between mt-13">
                <div className="text-center">
                    <div className="border-t border-black w-48"></div>

                    <p className="mt-2 text-xs">
                        Customer Signature
                    </p>
                </div>

                <div className="text-center">
                    <div className="border-t border-black w-48"></div>

                    <p className="mt-2 text-xs">
                        Authorized Signatory
                    </p>
                </div>
            </div>
        </>
    );
}