export default async function Reviews({
    params,
} : {
    params: { productid: string ;
    reviewid: string
    };
}) {
      const productid = params.productid;
      const reviewid = params.reviewid;
      return ( 
      <>
     <p>
         review {reviewid} for {productid}
     </p>
      </>)
      ;
}