import data2 from '../data2.json'
const Store = () => {
    return (
        <section className='ticket_section' >
            <div className='search_bar' >
                <h2>Store</h2>

            </div>

            <div className='tickets_container store_con' >
                <div className='tickets_header tickets_row'>
                    <div className='tickets_items' >
                        <span className='srNo' >SrNo.</span>
                        <span>Case ID</span>
                    </div>
                    <span className='tickets_items'>Shop Name</span>
                    <span className='tickets_items'>Store Shop URL</span>
                    <span className='tickets_items'>Store Lat-Long</span>
                    <span className='tickets_items'>Map Link</span>
                    <span className='tickets_items'>Order Details</span>
                    <span className='tickets_items'>Name</span>
                    <span className='tickets_items'>Phone</span>
                    <span className='tickets_items'>Email</span>
                    <span className='tickets_items'>Txn Status</span>
                    <span className='tickets_items'>Total Amount</span>
                    <span className='tickets_items'>Discount</span>
                    <span className='tickets_items'>Packing Charges</span>
                    <span className='tickets_items'>Delivery Charges</span>
                    <span className='tickets_items'>Order Type</span>
                    <span className='tickets_items'>Rating</span>
                    <span className='tickets_items'>Confirmed Duration</span>
                    <span className='tickets_items'>Paid Duration</span>
                    <span className='tickets_items'>Ready Duration</span>
                    <span className='tickets_items'>Delivered Duration</span>
                    <span className='tickets_items'>Duration</span>
                    <span className='tickets_items'>Order Status</span>
                    <span className='tickets_items'>Total Taxes</span>
                    <span className='tickets_items'>Total Packaging Charges</span>
                    <span className='tickets_items'>Item Name</span>
                    <span className='tickets_items'>Qty</span>
                    <span className='tickets_items'>Price Per Item</span>
                </div>
                <div>
                    {
                        data2?.map((items, index) => {
                            return (
                                <div  key={index} className='tickets_data_row tickets_row'>
                                    <div className='tickets_items' >
                                        <span className='srNo'>{index + 1}</span>
                                        <span className='tickets_items'>{items["App Type"]}</span>
                                    </div>
                                    <span className='tickets_items'>{items["Shop Name"]}</span>
                                    <span className='tickets_items'>{items["Store Shop URL"]}</span>
                                    <span className='tickets_items'>{items["Store Lat-Long"]}</span>
                                    <span className='tickets_items'>{items["Map Link"]}</span>
                                    <span className='tickets_items'>{items["Order Details"]}</span>
                                    <span className='tickets_items'>{items["Name"]}</span>
                                    <span className='tickets_items'>{items["Phone"]}</span>
                                    <span className='tickets_items'>{items["Email"]}</span>
                                    <span className='tickets_items'>{items["Txn Status"]}</span>
                                    <span className='tickets_items'>{items["Total Amount"]}</span>
                                    <span className='tickets_items'>{items["Discount"]}</span>
                                    <span className='tickets_items'>{items["Packing Charges"]}</span>
                                    <span className='tickets_items'>{items["Delivery Charges"]}</span>
                                    <span className='tickets_items'>{items["Order Type"]}</span>
                                    <span className='tickets_items'>{items["Rating"]}</span>
                                    <span className='tickets_items'>{items["Confirmed Duration"]}</span>
                                    <span className='tickets_items'>{items["Paid Duration"]}</span>
                                    <span className='tickets_items'>{items["Ready Duration"]}</span>
                                    <span className='tickets_items'>{items["Delivered Duration"]}</span>
                                    <span className='tickets_items'>{items["Duration"]}</span>
                                    <span className='tickets_items'>{items["Order Status"]}</span>
                                    <span className='tickets_items'>{items["Total Taxes"]}</span>
                                    <span className='tickets_items'>{items["Total Packaging Charges"]}</span>
                                    <span className='tickets_items'>{items["Item Name"]}</span>
                                    <span className='tickets_items'>{items["Qty"]}</span>
                                    <span className='tickets_items'>{items["Price Per Item"]}</span>
                                </div>
                            )
                        })
                    }

                </div>

            </div>

        </section>
    )
}

export default Store