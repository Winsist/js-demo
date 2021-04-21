function foo(){
    console.log(111)
    bar()
}
function bar(){
    console.log(this)
}
foo()