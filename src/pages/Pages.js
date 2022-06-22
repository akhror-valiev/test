import React from 'react'
import { Route, Routes } from "react-router-dom"
import DetailPage from '../components/detailPage/DetailPage'

const Pages = () => {
    return (
        <Routes>
            <Route path="/detail/:name" element={<DetailPage />} />

        </Routes>
    )
}

export default Pages