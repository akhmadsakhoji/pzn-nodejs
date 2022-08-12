// import dns from "dns"

// CARA 1
// function callback(error, ip){
    //     console.info(ip);
    // }
    
    // dns.lookup("www.google.com", callback)
    
    
// CARA 2
import dns from "dns/promises"
const websiteDetail = await dns.lookup("www.google.com")


console.info(websiteDetail.address);
console.info(websiteDetail.family);