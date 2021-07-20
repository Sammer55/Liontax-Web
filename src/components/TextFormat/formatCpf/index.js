export const formatCpf = (cpf) => {
    const cpfToString = cpf.toString()
    const firstBlock = cpfToString.substr(0, 3)
    const secondBlock = cpfToString.substr(4, 3)
    const thirdBlock = cpfToString.substr(8, 3)
    const fourBlock = cpfToString.substr(12, 2)
    const cpfFormated = firstBlock + secondBlock + thirdBlock + fourBlock
    return cpfFormated;
}