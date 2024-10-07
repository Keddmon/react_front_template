import { MainLayout } from '../../../../layouts';
import './Main.css';

/**
 * Presenter
 * - UI를 담당하는 역할을 수행
 * - Container에서 전달받은 데이터를 기반으로 화면을 렌더링
 * - 비즈니스 로직은 처리하지 않으며, 순수하게 UI만 다룸
 */

const MainPresenter = ({

    // Container에서 넘긴 데이터를 props로 받음
    handleTest
    
}) => {
    return (
        <MainLayout>
            <button
                onClick={handleTest}
            >테스트 버튼</button>
        </MainLayout>
    );
};

export default MainPresenter;