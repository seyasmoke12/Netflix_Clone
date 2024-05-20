import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from "../../components/Header/Header"
import  Banner from "../../components/banner/banner"
import RowList from "../../components/Rows/RowList/RowList"

const Home = () => {
return (
    <div>
        <Header/>
        <Banner/>
        <RowList />
        <Footer/>
    </div>
)
}

export default Home