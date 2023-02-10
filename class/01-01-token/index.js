console.log('hello nice to meet you')

function getToken(aaaa) {
    console.log(aaaa)
    // String 으로 0.0900이런 식이 보통의 경우에는 900 이런 식으로 표현이 될 것이나,
    // 0900 이런식으로 freeze를 해주고, 이것을 추가 보존하기 위하여 padStart를 사용한다.
    const result = String(Math.floor(Math.random() * 10 ** aaaa)).padStart(aaaa, '0')
    console.log(result)
}

getToken(8)