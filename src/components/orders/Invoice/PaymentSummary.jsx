export default function PaymentSummary({
    payments,
    formatCurrency,
}) {
    return (
        <div className="mt-4">
            <h3 className="font-bold text-base mb-3">
                Payment Summary
            </h3>

            <table className="w-full border-collapse border border-black">
                <thead>
                    <tr className="text-sm">
                        <th className="border border-black p-1">
                            Receipt No
                        </th>

                        <th className="border border-black p-1">
                            Date
                        </th>

                        <th className="border border-black p-1">
                            Time
                        </th>

                        <th className="border border-black p-1">
                            Method
                        </th>

                        <th className="border border-black p-1">
                            Status
                        </th>

                        <th className="border border-black p-1">
                            Amount
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {payments?.map((payment) => (
                        <tr key={payment.payment_id}>
                            <td className="border border-black text-xs p-1">
                                -
                            </td>

                            <td className="border border-black text-xs p-1">
                                -
                            </td>

                            <td className="border border-black text-xs p-1">
                                -
                            </td>

                            <td className="border border-black text-xs p-1">
                                {payment.method?.toUpperCase() ||
                                    "-"}
                            </td>

                            <td className="border border-black text-xs p-1">
                                {payment.status ||
                                    "-"}
                            </td>

                            <td className="border border-black text-xs p-1 text-right">
                                {formatCurrency(
                                    payment.amount
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}