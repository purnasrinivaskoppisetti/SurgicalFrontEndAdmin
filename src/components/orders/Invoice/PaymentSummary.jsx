export default function PaymentSummary({
    payments,
    formatCurrency,
}) {
    return (
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
                    {payments?.map((payment) => (
                        <tr key={payment.payment_id}>
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
                    ))}
                </tbody>
            </table>
        </div>
    );
}