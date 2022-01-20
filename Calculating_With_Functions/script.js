function zero(par) { return (typeof par === 'string') ? parseInt(eval(`0 ${par}`)) : 0 }
function one(par) { return (typeof par === 'string') ? parseInt(eval(`1 ${par}`)) : 1 }
function two(par) { return (typeof par === 'string') ? parseInt(eval(`2 ${par}`)) : 2 }
function three(par) { return (typeof par === 'string') ? parseInt(eval(`3 ${par}`)) : 3 }
function four(par) { return (typeof par === 'string') ? parseInt(eval(`4 ${par}`)) : 4 }
function five(par) { return (typeof par === 'string') ? parseInt(eval(`5 ${par}`)) : 5 }
function six(par) { return (typeof par === 'string') ? parseInt(eval(`6 ${par}`)) : 6 }
function seven(par) { return (typeof par === 'string') ? parseInt(eval(`7 ${par}`)) : 7 }
function eight(par) { return (typeof par === 'string') ? parseInt(eval(`8 ${par}`)) : 8 }
function nine(par) { return (typeof par === 'string') ? parseInt(eval(`9 ${par}`)) : 9 }

function plus(n) { return `+ ${n}` }
function minus(n) { return `- ${n}` }
function times(n) { return `* ${n}` }
function dividedBy(n) { return `/ ${n}` }
