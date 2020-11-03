// Code your solution here

function findMatching(drivers, s){
    const match = drivers.filter(d => {
        return d.toLowerCase() === s.toLowerCase()
    })

    return match
}

function fuzzyMatch(drivers, s){
    return drivers.filter(d => {
        return d.charAt(0).toLowerCase() === s.charAt(0).toLowerCase()
    })
}

function matchName(drivers, s){
    return drivers.filter(d => {d.name.toLowerCase() === s.toLowerCase()})
}