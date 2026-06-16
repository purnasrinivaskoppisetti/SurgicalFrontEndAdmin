import SectionTitle from "./SectionTitle";

export default function ShippingAddressSection({
    address,
}) {
    return (
        <div className="mb-5">
            <SectionTitle title="Shipping Address" />

            <div className="space-y-2 text-[13px] text-slate-700">
                <p>
                    {address?.full_name }
                </p>

                <p>
                    {address?.phone }
                </p>

                {/* <p>
                    {address?.address ||
                        "-"}
                </p> */}
                <p>
                    {address?.address_line1}
                </p>
                <p>
                    {address?.address_line2}
                </p>


                <p>
                    {address?.city},{" "}
                    {address?.state}
                </p>
                <p>
                    {address?.pincode}
                </p>
            </div>
        </div>
    );
}