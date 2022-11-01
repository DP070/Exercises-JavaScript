function checksAge(person){
if(person.age >= 18){
    person.olderAge = true
} else {
    person.olderAge = false
}
return person
}