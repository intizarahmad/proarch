import React from 'react'
import PropTypes from 'prop-types';
import './index.css'

// Table Header Component 
const TableHeader = ({tableInfoData})=> (
    <div className="tr">
    { 
       tableInfoData && 
       tableInfoData.map((header)=> {
            return <div key={header.headName} className="td">{header.headName}</div>
        })
    }
    </div>
)

// Table Body Component 
const TableBody = ({tableData, tableInfoData})=> (
    <>
    { 
        tableData && 
        tableData.map((data)=>{
            return <TableRow rowData={data} tableInfoData={tableInfoData}/>
        })
    }
    </>
)

// Table Row Component 
const TableRow = ({rowData, tableInfoData})=> {
    return(
        <div className="tr">
        { 
        tableInfoData && 
        tableInfoData.map((body)=> {
                return <div key={body.fieldName} className="tc">{rowData[body.fieldName]}</div>
            })
        }
        </div>
    )
}

// Main Table ComponeNt
const  Table = ( {
    tableInfoData,
    tableData
}) => {
    return (
        (tableInfoData && tableData.length > 0)  
        ?
        <div className="div-table">
            <TableHeader tableInfoData={tableInfoData} tableData={tableData}/>
            <TableBody tableInfoData={tableInfoData} tableData={tableData} />
        </div>
        : null
    )
}

Table.defaultProps = {
    tableData: []
}

Table.propTypes = {
    tableInfoData: PropTypes.array.isRequired,
    tableData: PropTypes.array.isRequired,
}
export default Table
