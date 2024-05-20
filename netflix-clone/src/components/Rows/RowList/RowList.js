import React from 'react'
import Row from '../ROW.js/Row'
import requests from "../../../utils/requast"

function RowList() {
return (
    <>
    <Row title="NETFLIX ORIGINALS" fetchurl={requests.fetchNetflixOriginals}
    isLargeRow={true}
    />
    <Row title="TRENDING" fetchurl={requests.fetchTrending}/>
    <Row title="ACTION MOVIES" fetchurl={requests.fetchActionMovies}/>
    <Row title="TOP RATED" fetchurl={requests.fetchTopRatedMovies}/>
    <Row title="ROMANCE" fetchurl={requests.fetchRomanceMovies}/>
    <Row title="HORROR" fetchurl={requests.fetchHorrorMovies}/>
    </>
)
}

export default RowList