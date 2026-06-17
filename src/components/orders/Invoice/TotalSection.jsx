export default function TotalSection({
    pricing,
    formatCurrency,
}) {
    return (
        <div className="flex justify-end mt-8">
            <div className="w-[380px] border border-black">
                <div className="flex justify-between p-3 border-b border-black">
                    <span>Sub Total</span>

                    <span>
                        {formatCurrency(
                            pricing?.subtotal
                        )}
                    </span>
                </div>

                <div className="flex justify-between p-3 border-b border-black">
                    <span>GST</span>

                    <span>
                        {formatCurrency(
                            pricing?.gst
                        )}
                    </span>
                </div>

                <div className="flex justify-between p-3 border-b border-black">
                    <span>Shipping</span>

                    <span>
                        {formatCurrency(
                            pricing?.shipping
                        )}
                    </span>
                </div>

                <div className="flex justify-between p-3 border-b border-black">
                    <span>Discount</span>

                    <span>
                        -
                        {formatCurrency(
                            pricing?.discount
                        )}
                    </span>
                </div>

                <div className="flex justify-between p-3 font-bold text-lg">
                    <span>Net Amount</span>

                    <span>
                        {formatCurrency(
                            pricing?.grand_total
                        )}
                    </span>
                </div>
            </div>
        </div>
    );
}