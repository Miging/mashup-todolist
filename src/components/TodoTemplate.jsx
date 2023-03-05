import styled from "styled-components";
import React from "react";



const TodoTemplateBlock=styled.div`
    width:512px;
    height: 768px;

    position:relative; /* 추가버튼 설정을 위해*/
    background:white;
    border-radius:16px;
    box-shadow:0 0 8px 0 rgba(0,0,0,0.4);

    margin: 0 auto; /* 페이지 중앙에 나오게*/

    margin-top: 96px;
    margin-bottom:32px;
    display:flex;
    flex-direction:column;
`;

function TodoTemplate({children}) {
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;