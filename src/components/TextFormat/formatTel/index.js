export const formatTel = (tel) => {
    const telToString = tel.toString()
    const DDD = telToString.substr(0, 3)
    const firstsNumbers = telToString.substr(5, 2)
    const lastNumbers = telToString.substr(9, 5)
    const latestNumbers = telToString.substr(15, 4)
    const telFormated = DDD + firstsNumbers + lastNumbers + latestNumbers
    return telFormated;

}