export default async function ProductSingle({
    params,
}: {
    params : { productid : string};
}){
    const productId = params.productid;
    return <>
    Product id {productId}
    </>
}