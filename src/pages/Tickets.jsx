import React, { useContext, useState } from 'react'
import data from '../data.json';
import { ContextApi } from '../App';
import { useNavigate } from 'react-router-dom';

const Tickets = () => {
    const Navigate = useNavigate()
    const { setTicket } = useContext(ContextApi)
    const [currentPage, setCurrentPage] = useState(1)
    const recordPage = 12;
    const lastIndex = currentPage * recordPage;
    const firstPage = lastIndex - recordPage;
    const record = data?.data?.slice(firstPage, lastIndex);
    const nPage = Math.ceil(data?.data?.length / recordPage);
    const num = [...Array(nPage + 1).keys()].slice(1);

    const getTicket = (val) => {
        setTicket(val)
        Navigate('/ticket')
    }
    const handlePrevBtn = () => {
        currentPage !== 1 ? setCurrentPage(currentPage - 1) : currentPage
    }
    const handleNextBtn = () => {
        currentPage !== nPage
            ? setCurrentPage(currentPage + 1) : currentPage
    }
    const handleChangePage = (val) => {
        setCurrentPage(val)
    }

    return (
        <section className='ticket_section' >
            <div className='search_bar' >
                <h2>All Tickets</h2>

            </div>

            <div className='tickets_container' >
                <div className='tickets_header tickets_row'>
                    <div className='tickets_items' >
                    <span className='srNo' >SrNo.</span>
                        <span>Case ID</span>
                    </div>
                    <span className='tickets_items'>Bug ID</span>
                    <span className='tickets_items'>Status</span>
                    <span className='tickets_items'>Date Case Received</span>
                    <span className='tickets_items'>ToneTag POC Name</span>
                </div>
                <div>
                    {
                        record?.map((items, index) => {
                            return (
                                <div onClick={() => getTicket(items)} key={index} className='tickets_data_row tickets_row'>
                                    <div className='tickets_items' >
                                        <span className='srNo'>{index + 1}</span>
                                        <span className='tickets_items'>{items["Case ID's"]}</span>
                                    </div>
                                    <span className='tickets_items'>{items["Bug ID"]}</span>
                                    <span className='tickets_items'>{items["Status to be filled by the POC"]}</span>
                                    <span className='tickets_items'>{items["Date Case Received"]}</span>
                                    <span className='tickets_items'>{items["ToneTag POC Name"]}</span>
                                </div>
                            )
                        })
                    }

                    <div className='pagination_con' >
                    <button onClick={handlePrevBtn} >Prev</button>
                    {
                        num?.map((item, index) => <div className={`pagination_number ${currentPage === item ? "active" : ""} `} onClick={() => handleChangePage(item)} key={index}>{item}</div>)
                    }
                    <button onClick={handleNextBtn}>Next</button>

                </div>
                </div>
                
            </div>

        </section>
    )
}

export default Tickets