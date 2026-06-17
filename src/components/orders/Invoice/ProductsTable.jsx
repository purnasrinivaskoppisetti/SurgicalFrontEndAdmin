export default function ProductsTable({
    items,
    formatCurrency,
}) {
    return (
        <div className="mt-3">
            <h3 className="font-bold text-base mb-2">
                Detailed Breakup
            </h3>
            
            <table className="w-full p-1 border-collapse border border-black">
                <thead>
                    <tr>
                        <th className="border text-sm p-1 border-black">
                            No.
                        </th>

                        <th className="border border-black text-sm p-1">
                            SKU
                        </th>

                        <th className="border border-black text-sm p-1">
                            Particulars
                        </th>

                        <th className="border border-black text-sm p-1">
                            Rate
                        </th>

                        <th className="border border-black text-sm p-1">
                            Units
                        </th>

                        <th className="border border-black text-sm p-1">
                            Amount
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {items?.map((item, index) => (
                        <tr key={item.order_item_id}>
                            <td className="border border-black text-xs p-1 text-center">
                                {index + 1}
                            </td>

                            <td className="border border-black text-xs p-1">
                                {item.product_sku}
                            </td>

                            <td className="border border-black text-xs p-1">
                                {item.product_name}
                            </td>

                            <td className="border border-black text-xs p-1 text-right">
                                {formatCurrency(
                                    item.price
                                )}
                            </td>

                            <td className="border border-black text-xs p-1 text-center">
                                {item.quantity}
                            </td>

                            <td className="border border-black text-xs p-1 text-right">
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
                                className="border border-black text-sm p-4 text-center"
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