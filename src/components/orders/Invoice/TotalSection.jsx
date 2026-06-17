export default function TotalSection({
    pricing,
    formatCurrency,
}) {
    return (
        <div className="flex justify-end mt-4 border-b border-black">
            <div className="w-[250px] text-sm">
                <div className="flex justify-between">
                    <span>Sub Total</span>

                    <span>
                        {formatCurrency(
                            pricing?.subtotal
                        )}
                    </span>
                </div>
                <div className="flex justify-between">
                    <span>Shipping</span>

                    <span>
                        {formatCurrency(
                            pricing?.shipping
                        )}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span>Discount</span>

                    <span>
                        -
                        {formatCurrency(
                            pricing?.discount
                        )}
                    </span>
                </div>

                <div className="flex justify-between font-bold">
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