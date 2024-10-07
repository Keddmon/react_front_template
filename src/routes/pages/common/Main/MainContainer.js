import { useEffect, useState } from "react";
import MainPresenter from "./MainPresenter"

/**
 * Container
 * - 비즈니스 로직을 처리하는 역할을 담당
 * - API 호출, 상태 관리 등 비동기 작업과 데이터 처리를 수행
 * - 처리된 데이터를 Presenter에 전달하여 UI를 렌더링
 */

const MainContainer = () => {

    /* ===== STATE ===== */
    const [testForUseEffect, setTestForUseEffect] = useState(null);
    const [testForButtonClick, setTestForButtonClick] = useState(null);

    /* ===== useEffect를 통한 API 호출 ===== */
    useEffect(() => {

        /* ===== GET 요청 예시 (async/await) ===== */
        const fetchTest = async () => {
            try {

                const response = await fetch('http://localhost:8080/test');
                console.log('response: ', response)

                const result = await response.json(); // 응답 데이터를 JSON으로 변환
                console.log('result: ', result)

                setTestForUseEffect(result.data); // 데이터를 상태에 저장
                console.log('testForUseEffect: ', testForUseEffect);

            } catch (err) {
                console.error(err);
            }
        };

        /* ===== 다른 예시 (위와 동일) ===== */
        // const fetchTest = async () => {
        //     try {
        //         const response = await fetch('http://localhost:8080/test', {
        //             method: 'GET',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //                 Accept: 'application/json',
        //             },
        //         });
        //     } catch (err) {
        //         console.error(err);
        //     }
        // };

        fetchTest(); // 작성한 함수 실행
    }, []); // 빈 배열을 넣으면 처음 렌더링될 때 한 번만 호출됨



    /* ===== 함수와 버튼을 통한 API 호출 ===== */
    const handleTest = async () => {
        try {
            const response = await fetch('http://localhost:8080/test');
            const result = await response.json();
    
            setTestForButtonClick(result.data);

            console.log(testForButtonClick);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <MainPresenter
            handleTest={handleTest} // 작성한 비즈니스 로직을 Presenter에게 넘김
        />
    );
};

export default MainContainer;