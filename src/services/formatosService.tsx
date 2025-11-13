export const formatosService = {
    PrecoBr: (preco: number): string =>{
        return `${preco.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })}`
    },
    PesoEmKg:(ValorPeso: number): string =>{
        return `${ValorPeso.toLocaleString('pt-BR', {minimumFractionDigits: 3})} Kg`
    }
}