import { Link, useParams } from "react-router-dom"

//객체 배열


const ProductInfo = () =>{
    
    //URL 파라미터에서 id값을 추출

    const {id} = useParams()
    return(

        <section className="product-info">
            <h1>상품 정보</h1>
            <p>상품 ID: {id}</p>
        </section>           

    )
}

export default ProductInfo