export default async function Docs({
    params,
}: {
    params: {slug: string[]};
}){
    const {slug} = params; 
    if(slug?.length === 2){
        return (
            <>
        <p>Slug of the docs page of {slug[1]} and the route of {slug[2]}</p>
            </>
        );
    }else  if(slug?.length === 1){
        return (
            <>  
        Docs slug of {slug[0]};
            </>
        );
    } else{
    return (
        <>
        Docs slug of {slug[1] ?? "not provided"};
        </>
    )
}
}