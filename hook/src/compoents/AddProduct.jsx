import { useState} from "react"
 
const AddProduct = () =>{
    // 상품 상태 관리
    const [productName , setProductName] = useState("");
    // 상품을 저장할 배열 상태 관리
    const [products, setProducts] = useState([]);

    //상품명 상태 변경 함수
    const handleInputChange = (e) =>{
        //console.log(e.target.value);
        setProductName(e.target.value);
    }

    //상품 추가 함수
    const handleAddProduct = () => {
        
        // 상품 미입력시 유효성 검사
        // trim() 공백을 없애주는 함수
        if(productName.trim() === ''){

            alert("상품 이름을 입력해주세요");
            return;
        }

        //id 는 고유한 값이 필요해서 Date.now() 사용

        const newProducts = [...products, 
            {id: Date.now(), name: productName}];
            

            console.log("상품목록:", newProducts);
            setProducts(newProducts);
        }


    // 상품 삭제 함수

    const handleDeleteProduct = (id) => {
        
        //filter 걸러냄 삭제할 상품을 제외한 새로운 상품 배열을 생성
        setProducts(products.filter(products => products.id !== id))
    }


    return  (
    
    <>
        <div>
            <h3>상품 추가</h3>
            <input type="text"
            placeholder="상품 이름 입력"
            //value= {productName}
            onChange={handleInputChange}
            />
            <button onClick={handleAddProduct}> 추가 </button>
        </div>
    
    
        <div className="products">
            <h3>추가된 상품 목록</h3>
            {products.length == 0 ? (
                <p>추가된 상품이 없습니다.</p>
            ) : (
                <ul>
                 {products.map((product) => (
                    <li key={product.id}>
                            {product.name} {''}
                            <button onClick={() => handleDeleteProduct(product.id)}
                            style={{marginLeft: '10px', color: 'red'}}
                            >삭제
                            </button>
                    </li>

                 ))}      
            </ul>

            )}
            
           
        </div>
    
    
    </>




    )
}

export default AddProduct