export default function ProductsTable({
    items,
    formatCurrency,
}) {
    return (
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
                    {items?.map((item, index) => (
                        <tr key={item.order_item_id}>
                            <td className="border border-black p-2 text-center">
                                {index + 1}
                            </td>

                            <td className="border border-black p-2">
                                {item.product_sku}
                            </td>

                            <td className="border border-black p-2">
                                {item.product_name}
                            </td>

                            <td className="border border-black p-2 text-right">
                                {formatCurrency(
                                    item.price
                                )}
                            </td>

                            <td className="border border-black p-2 text-center">
                                {item.quantity}
                            </td>

                            <td className="border border-black p-2 text-right">
                                {formatCurrency(
                                    item.total
                                )}
                            </td>
                        </tr>
                    ))}

                    {!items?.length && (
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
    );
}