import { useState } from "react"; 

export const useForm = ( initialSate = {} ) => {

    const [ inputValue, setInputValue ] = useState( initialSate );

    const reset = () => {

        setInputValue( initialSate );

    };

    const handleInputChange = ( { target } ) => {

        setInputValue({

            ...inputValue,
            [ target.name ] : target.value

        });

    };

    return [ inputValue, handleInputChange, reset ];

};