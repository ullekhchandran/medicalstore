export const searchData=(state,medicine)=>{
    const searchedData=state.data.find(data=>data.medicine==medicine)
    return searchedData?searchedData:null
}