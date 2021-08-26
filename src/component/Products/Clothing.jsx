import React,{useEffect} from "react";
import Client from "shopify-buy";

// id Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI3MjA3NzU4NjY0MA==
const client = Client.buildClient({
    domain: "akarshan-online.myshopify.com",
    storefrontAccessToken: "d5cbac65ac113145b5758b9f36ae7890"
});

const Clothing = () =>{
    
    const collectionId = "Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI3MjA3NzU4NjY0MA==";
    useEffect(()=>{
        client.collection.fetchAllWithProducts(collectionId).then(res =>{
            console.log(res);
        }).catch(error =>{
            console.log(error);
        })
    })

    return(
        <div classNAme="">
            <h1>Clothing</h1>
        </div>
    )
}
export default Clothing;