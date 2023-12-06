import React from 'react'

const Button = ({ children, handleOnclick, fw, type = 'button', style }) => {
    return (
        <button
            type={type}
            className={style ? style : `p-[10px] hover:underline flex justify-center items-center gap-1 bg-secondary rounded-md text-white outline-non ${fw ? 'w-full' : 'w-fit'}`}
            onClick={handleOnclick}
        >
            {children}
        </button>
    )
}

export default Button
