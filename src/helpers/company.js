import companyData from './../data/MOCK_DATA.json';

const getCompanyData = searchText => {
    return new Promise((resolve, reject) => {
        if (searchText) {
            const filteredData = companyData.filter((company) => {
                let company_name = company.company_name
                if (company_name) {
                    return company_name.toLowerCase().includes(searchText.toLowerCase())
                }
            })
            resolve(filteredData)
        }
        resolve(companyData)
    })
}

export {
    getCompanyData
}