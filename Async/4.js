// function getUser() {
//     setTimeout(function () {
//         const userids = [10, 20, 30, 40];
//         console.log(userids);
//         setTimeout(function (id) {
//             const user = {
//                 name: 'John Doe',
//                 age: 25
//             };
//             console.log("User ID : " + id + ": User name : " + user.name +
//                 ", User Age: " + user.age);
//             setTimeout(function (age) {
//                 console.log(user);
//             }, 1000, user.age);
//         }, 1000, userids[3]);
//     }, 1500)
// }
// function abc(str, cb) {
//     setTimeout(() => {
//         cb();
//         console.log(str);
//     }, 0)
// }

// function def() {
//     console.log("I am from def");
// }
// function efg() {
//     console.log('I am from efg');
// }



// abc("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, hic possimus? Odit eius, explicabo inventore nobis accusamus nisi aliquam debitis autem soluta est reprehenderit assumenda dolores corporis ex quae perspiciatis.", getUser);

// def();
// def();
// def();
// def();
// def();
// def();
// setTimeout(() => { efg() }, 1000);
// def();
// def();
// def();
// def();
// def();
// def();
// setTimeout(() => { def() }, 2000);
// def();
// def();
// def();
// def();


function getUser() {
    setTimeout(function insideGetUser() {
        const userids = [10, 20, 30, 40];
        console.log(userids);
        setTimeout(function printUserid(id) {
            const user = {
                name: 'John Doe',
                age: 25
            };
            console.log("User ID : " + id +
                ": User name : " + user.name +
                ", User Age: " + user.age);
            setTimeout(function printage(age) {
                console.log(user);
            }, 1000, user.age);
        }, 1000, userids[3]);
    }, 1500)
}

function abc(str, cb) {
    let insideabc=() => {
        cb();
        console.log(str);
    }
    setTimeout(insideabc, 0)
}

function def() {
    console.log("I am from def");
}
function efg() {
    console.log('I am from efg');
}



abc("CFI Bonus", getUser);

def();
def();
def();
def();
def();
def();
setTimeout(() => { efg() }, 1000);
def();
def();
def();
def();
def();
def();
setTimeout(() => { def() }, 2000);
def();
def();
def();
def();