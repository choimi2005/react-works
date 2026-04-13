import styled from 'styled-components'

const Button = styled.button`
    padding: 10px 20px;
    margin: 10px;
    font-size: 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #0056b3;
    }
`    
// button 컴포넌트를 상속받아 RoundedButton 버튼을 생성
// 상속의 형태는 : styled (부모 컴포넌트)
const RoundedButton = styled(Button)`
    border-radius: 50px;
` 


const StyleButton = () => {

    return(
        <div>
            <Button>Click me</Button>
            <RoundedButton>Click Me</RoundedButton>
        </div> 
    )



}
export default StyleButton