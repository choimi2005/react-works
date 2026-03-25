import { Link } from "react-router-dom"

//객체 배열

const products = [
    {
        id: 1,
        name: '모니터',
        price : 130000,
        description : '22인치 최신 모니터'
    },
    
    {
        id: 2,
        name: '마우스',
        price : 30000,
        description : '무선 마우스 그레이'
    },
    
    {
        id: 3,
        name: '키보드',
        price : 50000,
        description : '무선 키보드 블랙'
    }

]

const ProductList = () =>{

    return(

        <section className="product-list">
                <h1>상품 목록</h1>

                <ul>
                    {products.map((products) => (
                            <div key={products.id}>
                                <h3>
                                    <Link to={`/products/${products.id}`}>
                                    {products.name}
                                    </Link>

                                </h3>
                                <p>가격: {products.price}</p>
                                <p>설명: {products.description}</p>
                            </div>
                        )


                    )}

                </ul>

        </section>
           

    )
}

export default ProductList