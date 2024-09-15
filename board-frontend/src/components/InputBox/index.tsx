import React, { ChangeEvent, forwardRef, SetStateAction, KeyboardEvent } from 'react'
import './style.css'

//          interface: Input Box 컴포넌트 Properties           //
interface Props { // 외부에서 받아오는 변수들 정의함
    label: string;
    type: 'text' | 'password'; // literal type
    placeholder: string;
    value: string;
    setValue: React.Dispatch<SetStateAction<string>>; // App.tsx의 usetState에서 가져옴
    error: boolean;

    icon?: string; // 필수가 아님
    onButtonClick?: () => void; // 필수가 아님

    message?: string;

    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}
//          component: Input Box 컴포넌트           //
const InputBox = forwardRef<HTMLInputElement, Props>((props: Props, ref) => { // input element를 컨트롤 하기위해 forwardRef를 사용한다.

    //          state: properties(variable)                  //
    const { label, type, placeholder, value, error, icon, message } = props;    
    
    //          state: properties(function)                  //
    const { setValue, onButtonClick, onKeyDown } = props;
    
    //          event handler: input 값 변경 이벤트 함수 처리          //
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setValue(value);
    }

    //          event handler: key 이벤트 함수 처리          //
    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if(!onKeyDown) return;
        onKeyDown(event);
    }

    //          render: Input Box 컴포넌트                          //
    return(
        <div className='inputbox'>
            <div className='inputbox-label'>{label}</div>
            <div className={error ? 'inputbox-container-error' : 'inputbox-container'}>
                <input ref={ref} type={type} className='input' placeholder={placeholder} value={value} onChange={onChangeHandler} onKeyDown={onKeyDownHandler} />
                {onButtonClick !== undefined && (
                    <div className='icon-button'>
                        {icon !== undefined && (<div className={`icon ${icon}`}></div>)}
                    </div>
                )}
            </div>
            {message !== undefined && (<div className='inputbox-message'>{message}</div>)}
        </div>
    );

});

export default InputBox;