const apple = 3
const banana = 2

console.log("철수는 사과를 " + apple + '개, ' + '바나나를 '+banana + '개 가지고 있습니다.')
console.log(`철수는 사과를 ${apple}개, 바나나를 ${banana}개 가지고 있습니다.`)

function getWelcomeTemplate(a,b,c,d) {
    const result = `
        <html>
            <body>
                <h1>${a}님 가입을 환영합니다!</h1>
                <hr>
                <div>이름: ${a}</div>
                <div>나이: ${b}살</div>
                <div>학교: ${c}</div>
                <div>가입일: ${d}</div>
            </body>
        </html>
    `
    console.log(result)    
}

const myname = '영희'
const myage = 12
const myschool = '토끼초등학교'
const mycreatedAt = '2023-02-10'

getWelcomeTemplate(myname, myage, myschool, mycreatedAt)