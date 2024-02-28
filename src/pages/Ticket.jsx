import React, { useContext, useState } from 'react'
import { ContextApi } from '../App'
import { useNavigate } from 'react-router-dom'

const Ticket = () => {
    const Navigate = useNavigate()
    const { ticket, setStore, store } = useContext(ContextApi)
    // const handleStore = (data) => {
    //     setStore([...store, { ...data, store: true }])
    // }
    // const handleDelStore = (id) => {
    //     const updateData = store?.filter((items) => id !== items["Case ID's"])
    //     setStore((updateData))
    //     Navigate(-1)
    // }

    return (
        <section>
            <div className='ticket_con' >
                <h1>Ticket</h1>
                <div>
                    <div>
                        <span className='ticket_ID' >Ticket ID: #{ticket["Case ID's"]}</span>
                        <span className='ticket_status' >Ticket Status: {ticket["Status to be filled by the POC"]} </span>
                    </div>

                    <h2>{ticket["Issue Description"]}</h2>
                    <p>{ticket["Issue VOC"]}</p>

                    <div className='ticket_info'>
                        <div>
                            <span className='ticket_time'>{ticket["ToneTag POC Name"]} Tech Support </span>
                            <span className='ticket_time'>{ticket["Time Taken to Resolve"]}</span>
                        </div>
                        <p>{ticket["Merchant VOC/Action"]}</p>
                    </div>
                </div>
                    {/* <button className='save_del_btn' onClick={() => handleStore(ticket)} >Save</button>
                    <button className='save_del_btn' onClick={() => handleDelStore(ticket["Case ID's"])} >Delete</button> */}
            </div>
        </section>

    )
}

export default Ticket