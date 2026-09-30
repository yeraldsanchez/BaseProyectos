function useRegistro(setCount,personas,setPersonas) {
    function handleSubmit(nombre) {
        if (!nombre.trim()) return;
        setCount(prev => prev + 1);
        setPersonas([...personas, nombre]);
    }
    return {handleSubmit};
}

export default useRegistro;