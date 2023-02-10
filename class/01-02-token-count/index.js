console.log('hello nice to meet you')

function getToken(aaaa) {


    if(aaaa === undefined|null) {
        console.log('raised error! 갯수를 제대로 입력해 주세요.')
        return 
    } else if(aaaa <= 0) {
        console.log('raised error! 갯수가 너무 적습니다.')
        return
    } else if(aaaa > 10) {
        console.log('raised error! 갯수가 너무 적습니다.')
        return
    }

    const result = String(Math.floor(Math.random() * 10 ** aaaa)).padStart(aaaa, '0')
    console.log(result)
}

getToken()