import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import style from "./SuperRadio.module.css"

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
       if(onChangeOption){
           onChangeOption(e.currentTarget.value)
       }
    }

    const mappedOptions: any[] = options ? options.map((o, i) => (

        <label key={name + '-' + i}>
            <input
                type={'radio'}
                value={o}
                onChange={onChangeCallback}
                name={name}
                checked={value === o}
                className={style.radio}
            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
