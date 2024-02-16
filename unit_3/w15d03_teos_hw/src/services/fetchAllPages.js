async function fetchAllPages(url){
let allData=[];
let nextPage=url;

try{
    while(nextPage){
        const response = async()=>{ await fetch(nextPage);}
        const data = async()=>{await response.json();}
        allData=[...allData, ...data.results];
        nextPage=data.next;
    }
    return allData;
}
catch(err){
    console.error("Error fetching data:", err);
    return[];
}
}
export default fetchAllPages;


(async () => {
    const apiUrlPage1 = "https://swapi.dev/api/starships/?page=1";
    const apiUrlPage2 = "https://swapi.dev/api/starships/?page=2";
    const apiUrlPage3 = "https://swapi.dev/api/starships/?page=3";
    const apiUrlPage4 = "https://swapi.dev/api/starships/?page=4";
  
    const allDataPage1 = await fetchAllPages(apiUrlPage1);
    console.log("Page 1 data:", allDataPage1);
  
    const allDataPage2 = await fetchAllPages(apiUrlPage2);
    console.log("Page 2 data:", allDataPage2);
  
    const allDataPage3 = await fetchAllPages(apiUrlPage3);
    console.log("Page 3 data:", allDataPage3);
  
    const allDataPage4 = await fetchAllPages(apiUrlPage4);
    console.log("Page 4 data:", allDataPage4);
  })();

 