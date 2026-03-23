
const Example01 = () => {
    //조건문 렌더링
    const isLogined = true;

    return (
        <div>
            <h2>조건부 렌더링 예제</h2>
            {/*삼항(조건) 연산자 */}
            {isLogined ? <p>로그인 상태입니다.</p> : <p>로그아웃 상태입니다.</p>}

            {isLogined && <p>로그인 상태입니다.</p>}
        </div>
    )
}

export default Example01