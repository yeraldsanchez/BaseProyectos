function useRegistro(setCount,personas,setPersonas) {
    function handleSubmit(nombre) {
        setCount(prev => prev + 1);
        setPersonas([...personas, nombre]);
    }
    return {handleSubmit};
}

export default useRegistro;