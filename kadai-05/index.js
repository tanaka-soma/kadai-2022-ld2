const profile={
    name:"田中",
    age:20,
    hobby:"映画鑑賞",
    major:"文学",
}
const dictionary={
    name:"名前",
    age:"年齢",
    hobby:"趣味",
    major:"専攻",
}

for (const key of Object.keys(profile)) {
    console.log("私の"+dictionary[key]+"は"+profile[key]+"です")
}