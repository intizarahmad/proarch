import React,{ useState, useEffect} from 'react'

import Box from './../common/Box'
import InputText from './../common/InputText'
import Table from './../common/Table'
import Loader from './../common/Loader'
import { COMPANY_TABLE } from '../../config/contants'
import { getCompanyData } from '../../helpers/company'

const Index = (props)=> {
    const [searchText, setSearchText] = useState([])
    const [tableData, setTableData ] = useState([])
    const [isLoading, setLoading ] = useState(false)
   
    let searchTimeOut = null
    const onChange = (e)=>{
        setSearchText(e.target.value)
        setLoading(true)
        setTableData([])
        if (searchTimeOut)
        clearTimeout(searchTimeOut);

        searchTimeOut = setTimeout(
            function () {
                fetchData(e.target.value);
            },
            500
        );
    }

    useEffect(()=>{
        setLoading(true)
        fetchData();
    },[])

    async function fetchData(searchText) {
        const companyData = await getCompanyData(searchText)
        setTableData(companyData)
        setLoading(false)
    }
   
    return (
            <Box >
                <h3 className="heading">Company Data</h3>
                <div className="search-box">
                <InputText 
                    placeholder="Please enter company name to search" 
                    onChange = {onChange}
                    value={searchText}
                    name = "search"  
                />
                </div>
                {isLoading && <Loader />} 
                {
                    (tableData.length === 0 && !isLoading) ? 
                    <div className="no-data">No data Found.</div>    
                    :
                    <Table 
                        tableInfoData = { COMPANY_TABLE } 
                        tableData  = { tableData }
                    />
                }
            </Box> 
    )
}

export default Index
